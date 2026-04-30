# 🗳️ VoteWise AI - Election Helpline

An interactive, AI-powered civic-tech platform designed to educate citizens on the Indian election process. Built with Next.js, Gemini AI, and deployed on Google Cloud Run.

## 🚀 Live Demo
**Website:** [https://election-project-871678427838.asia-south1.run.app](https://election-project-871678427838.asia-south1.run.app)

---

## ✨ Features
- **AI Chat Assistant**: Powered by Gemini 2.5 Flash to answer questions about the electoral process, documentation, and polling rules.
- **Interactive Election Timeline**: A visual journey through the history and process of Indian elections.
- **Electoral Glossary**: Easy-to-understand definitions for complex election terminology (EVM, VVPAT, Model Code of Conduct, etc.).
- **Neutral & Factual**: Designed to be strictly informative and unbiased for first-time voters.

---

## 🛠️ Implementation Details

### Technology Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **AI Engine**: [Google Gemini 2.5 Flash API](https://ai.google.dev/)
- **Styling**: Tailwind CSS & Framer Motion for premium animations
- **Infrastructure**: Dockerized and deployed on **Google Cloud Run**

### AI Integration
The chat system uses a secure backend route (`/api/chat`) that interfaces with the Google Generative AI SDK. It includes a custom system prompt that enforces neutrality and focuses strictly on educational content related to Indian democracy.

---

## 📂 Project Structure

```text
election_project/
├── src/
│   ├── app/                # Next.js App Router Pages
│   │   ├── api/chat/       # Gemini AI API Endpoint
│   │   ├── chat/           # AI Assistant Interface
│   │   ├── glossary/       # Election Terms Directory
│   │   ├── timeline/       # Interactive Election History
│   │   └── layout.tsx      # Main Application Wrapper
│   ├── components/         # Reusable UI Components
│   │   └── layout/         # Navbar, Footer, etc.
│   └── lib/                # Utility Functions (Tailwind Merge, etc.)
├── public/                 # Static Assets
├── Dockerfile              # Cloud Run Production Configuration
└── next.config.ts          # Standalone Build Configuration
```

---

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Barshan007b/Election_Helpline.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment (Cloud Run)

The project is configured for one-command deployment using the Google Cloud SDK:

```bash
gcloud run deploy election-project --source . --region asia-south1
```

---

## 📜 Disclaimer
This is an educational project. For official information, always refer to the [Election Commission of India (ECI)](https://eci.gov.in/).
