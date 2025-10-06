# 💰 Welth - AI Financial Intelligence Platform

**Turn Your Spending Into Smart Investments**

Master your finances with AI-powered tracking and insights. Optimize your spending and grow your wealth intelligently.

🌐 **Live Demo:*https://welth-finance-tracker-nine.vercel.app/* 

## 📸 Screenshot
![FinSight Screenshot](https://github.com/awsiyanwaghe/Welth-Finance-Tracker/raw/main/public/screen.png)
---

## ✨ Key Features

### 🤖 AI-Powered Analytics
- **Advanced Analytics** - Get detailed insights into your spending patterns with AI-powered analytics
- **Automated Insights** - Receive automated financial insights and recommendations
- **Predictive Budgeting** - AI-driven budget forecasting and optimization

### 🧾 Smart Financial Tools
- **Smart Receipt Scanner** - Extract data automatically from receipts using advanced AI technology (Google Gemini AI)
- **Multi-Account Support** - Manage multiple bank accounts and credit cards in one place
- **Multi-Currency** - Support for multiple currencies with real-time conversion

### 💡 Intelligent Planning
- **Budget Planning** - Create and manage budgets with intelligent recommendations
- **Spending Optimization** - AI suggestions to reduce unnecessary expenses
- **Investment Insights** - Smart recommendations for wealth growth

---

## 🛠️ Tech Stack & Architecture

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Reusable UI components
- **Recharts** - Data visualization charts

### Backend & Database
- **Next.js API Routes** - Full-stack capabilities
- **PostgreSQL** - Relational database
- **Prisma** - Type-safe database ORM
- **Clerk** - Authentication & user management

### AI & Integrations
- **Google Generative AI** - Gemini AI for receipt scanning and financial insights
- **Resend** - Transactional emails
- **Inngest** - Background job processing
- **Arcjet** - Rate limiting and security
---

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/awsiyanwaghe/Welth-Finance-Tracker.git
cd Welth-Finance-Tracker
```

2. **Install dependencies**
```bash
npm install
```
3. **Environment Setup**
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/wealthwise"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
GOOGLE_AI_API_KEY=your_google_ai_key
RESEND_API_KEY=re_...
ARCJET_KEY=ajkey_...
```
4. **Database Setup**
```bash
npx prisma generate
npx prisma db push
```
5. **Run Development Server**
```bash
npm run dev
```
🎯 Deployment

Vercel (Recommended)
```bash
npm run build
vercel --prod
```

---
Built with ❤️ by Awsian Waghe

**© 2024 WealthWise. All rights reserved.**
