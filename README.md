# Test Your Knowledge - Interactive Quiz App

A beautiful and interactive quiz application built with Next.js, React, and TypeScript.

## Features

- Interactive multiple-choice quiz
- Real-time score calculation
- Smooth animations and transitions
- Responsive design with gradient backgrounds
- Mobile-friendly interface
- Keyboard and mouse support
- Cute mascot animations

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Geist, Playfair Display)

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Wedding_Company_Assignment
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

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

Deploy to Vercel with a single click:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Your app will be live in minutes!

## License

This project is open source and available under the MIT License.