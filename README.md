# Test Your Knowledge - Interactive Quiz App

A beautiful and interactive quiz application built with Next.js, React, and TypeScript.

## Key Features Implemented

- **Interactive Multiple-Choice Quiz** - Users can select answers and navigate through questions
- **Real-time Score Calculation** - Automatic score computation based on correct answers
- **Smooth Animations & Transitions** - Fade-in effects and scale animations for better UX
- **Progress Indicator** - Visual progress bar showing quiz completion status
- **Responsive Design** - Gradient backgrounds and mobile-optimized layout
- **Mobile-Friendly Interface** - Touch-friendly buttons and responsive spacing
- **Answer Highlighting** - Visual feedback when selecting answers
- **Previous/Next Navigation** - Easy navigation between questions
- **Results Screen** - Score display with restart functionality
- **Animated Score Counter** - Smooth score animation on results page
- **Cute Mascot** - Paw animated mascot on first question with motivational message

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **UI Components** | shadcn/ui components |
| **Icons** | Lucide React |
| **Fonts** | Google Fonts (Geist, Playfair Display) |
| **Analytics** | Vercel Analytics |
| **Package Manager** | pnpm |
| **Deployment** | Vercel

## Setup Instructions

### Prerequisites
- Node.js 18 or higher
- pnpm, npm, or yarn package manager
- Git for version control

### Step-by-Step Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Wedding_Company_Assignment
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will auto-refresh on code changes

5. **Build for production**
```bash
pnpm build
pnpm start
```

## How to Play

1. Read each question carefully
2. Select one of the three options
3. Click the arrow button to proceed to the next question
4. After answering all questions, your score will be displayed
5. Click "Start Again" to retake the quiz

## Project Structure

```
├── app/
│   ├── page.tsx          # Main quiz component
│   ├── layout.tsx        # Root layout
│   ├── RootClientLayout.tsx
│   └── globals.css
├── components/
│   ├── ui/               # UI components
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/           # Images and animations
└── styles/
    └── globals.css
```

## Customization

### Add More Questions

Edit `app/page.tsx` and add to the `questions` array:

```typescript
{
  id: 5,
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3"],
  correctAnswer: "Option 1",
}
```

### Customize Colors

Edit the Tailwind color values in the components to match your brand:
- Primary gradient: `from-[#B8D4E8]`
- Accent colors: `[#C8E3F0]`, `[#2C3E50]`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
```bash
git add .
git commit -m "Your message"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click **"Add New"** → **"Project"**
5. Select your repository
6. Click **"Deploy"**

Your app will be live in minutes!

## License

This project is open source and available under the MIT License.

## Assumptions Made

1. **Quiz Format**: Assumed all questions have exactly 3 multiple-choice options
2. **Question Structure**: Assumed each question has one correct answer
3. **User Interaction**: Assumed users will answer all questions before viewing results (next button is disabled until an answer is selected)
4. **Score Calculation**: Score is calculated as percentage of correct answers (0-100%)
5. **Browser Support**: Assumes modern browsers with ES6+ and CSS Grid support
6. **Single Quiz**: Assumed only one quiz session at a time (no persistent storage of previous attempts)
7. **Questions Data**: Questions are hardcoded in the component for simplicity (no database required)

## Time Spent on Assignment

- **Setup & Project Configuration**: 10 minutes
- **Component Structure & Quiz Logic**: 30 minutes
- **UI Design & Styling**: 40 minutes
- **Animations & Interactions**: 25 minutes
- **Responsive Design**: 20 minutes
- **Bug Fixes & Refinements**: 15 minutes
- **Documentation**: 10 minutes

**Total Time**: ~150 minutes (2.5 hours)