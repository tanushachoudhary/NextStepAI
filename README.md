# 💼 NextStepAI – Your Personalized AI Career Coach

NextStepAI is an personalized AI career coach that helps job seekers unlock their potential through resume optimization, tailored cover letter generation, mock interview preparation, and weekly updates on industry hiring trends and in-demand skills.
Built with Next.js, PostgreSQL, ClerkAuth, and Inngest. 

<img width="1903" height="855" alt="image" src="https://github.com/user-attachments/assets/3b7dc7ff-88d1-443c-94e3-bcec3a4a88f3" />

<img width="1890" height="565" alt="Screenshot 2025-07-28 180113" src="https://github.com/user-attachments/assets/69d17d4c-3ec8-4456-975a-4142599f1637" />

<img width="1906" height="863" alt="image" src="https://github.com/user-attachments/assets/cb84457f-6f62-4f00-8b43-2b31dccead02" />


---

## 🚀 Features

- ✅ **Resume Optimization** – Parses and enhances resumes based on job descriptions using AI
- 📝 **Cover Letter Generator** – Generates personalized, role-specific cover letters
- 🎯 **Mock Interview Quizzes** – Offers smart quiz prep for technical and behavioral rounds
- 📈 **Industry Trends** – Curated weekly insights on skills in demand and hiring trends
- 🔐 **Clerk Authentication** – Secure sign-in/sign-up with role-based routing
- 🌐 **Fully Responsive** – Built with modern UI components and adaptive layouts

---

## 🧠 Tech Stack

| Layer          | Tech Used                                                      |
|----------------|----------------------------------------------------------------|
| **Frontend**   | `Next.js`, `TailwindCSS`, `ShadCN UI`                          |
| **Backend**    | `Inngest` (for serverless job pipelines), `Next.js API routes` |
| **Auth**       | `Clerk`                                                        |
| **Database**   | `PostgreSQL` hosted on `NeonDB`                                |
| **Deployment** | Vercel                                                         |

---

## 🧪 Getting Started

```bash
git clone https://github.com/tanushachoudhary/NextStepAI.git
cd NextStepAI
npm install
````

### 🛠️ Configure Environment

Create a `.env` file and add the required variables:

```env
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
DATABASE_URL=postgresql://<user>:<password>@<neondb-host>/<db-name>
GEMINI_API_KEY=
```

---

## 📁 Folder Structure

```
/app           → Next.js app directory (routes, components)
/lib           → Utility functions
/components    → Reusable UI components (ShadCN)
/jobs          → Inngest functions for async background jobs
/styles        → Tailwind and global styles
.env.local     → Environment variables
```

---

## 📍 Future Enhancements

* 🎓 AI-powered skill gap detection
* 🧠 LLM-based smart job matching
* 📱 Mobile App (React Native)

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, and submit a pull request.

---

## 📄 License

MIT © [Tanusha Choudhary](https://github.com/tanushachoudhary)
