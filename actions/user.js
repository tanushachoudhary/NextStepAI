"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    // 1. Check for the industry insight BEFORE the transaction
    let industryInsight = await db.industryInsight.findUnique({
      where: {
        industry: data.industry,
      },
    });

    let insightsToCreate = null;

    // 2. If it doesn't exist, run the slow AI call OUTSIDE the transaction
    if (!industryInsight) {
      const insights = await generateAIInsights(data.industry);
      insightsToCreate = {
        industry: data.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      };
    }

    // 3. Now, start the transaction for DATABASE operations ONLY
    const updatedUser = await db.$transaction(
      async (tx) => {
        // If we generated new insights, create the record now
        if (insightsToCreate) {
          await tx.industryInsight.create({
            data: insightsToCreate,
          });
        }

        // Update the user
        const userToUpdate = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return userToUpdate;
      },
      {
        timeout: 15000, // You can likely lower this timeout now
      }
    );

    revalidatePath("/");
    return updatedUser;
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    // Throwing the original error can give more context on the client
    throw new Error(`Failed to update profile: ${error.message}`);
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
