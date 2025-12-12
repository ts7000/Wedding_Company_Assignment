"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: "Meow-Meow",
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: "Ice Cream",
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow",
  },
  {
    id: 4,
    question: "What sound does a cow make?",
    options: ["Woof-Woof", "Moo", "Quack-Quack"],
    correctAnswer: "Moo",
  },
]

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    if (showResults) {
      const finalScore = calculateScore()
      let current = 0
      const increment = Math.ceil(finalScore / 50)
      const timer = setInterval(() => {
        current += increment
        if (current >= finalScore) {
          setAnimatedScore(finalScore)
          clearInterval(timer)
        } else {
          setAnimatedScore(current)
        }
      }, 30)
      return () => clearInterval(timer)
    }
  }, [showResults])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer,
    })
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResults(true)
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1)
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handleRestart = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentQuestion(0)
      setSelectedAnswers({})
      setShowResults(false)
      setAnimatedScore(0)
      setIsTransitioning(false)
    }, 300)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / questions.length) * 100)
  }

  if (showResults) {
    return (
      <div
        className={`min-h-screen bg-gradient-to-br from-[#B8D4E8] via-[#A8CAE0] to-[#6FB9D4] flex items-center justify-center p-4 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100 animate-fadeIn"}`}
      >
        <div className="bg-[#C4B5FD]/60 p-3 rounded-[44px] shadow-2xl">
          <div className="w-full max-w-6xl bg-[#F8FAFB] rounded-[40px] p-8 md:p-12 text-center">
            <p className="text-base md:text-lg text-[#4A5568] mb-4 font-medium">Keep Learning!</p>
            <h1 className="text-3xl md:text-4xl font-serif italic text-[#4A6B7C] mb-3">Your Final score is</h1>
            <div className="text-6xl md:text-8xl font-serif font-bold text-[#4A6B7C] leading-none">
              {animatedScore}
              <span className="text-4xl md:text-5xl align-top">%</span>
            </div>
            <Button
              onClick={handleRestart}
              className="mt-6 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base bg-[#C8E0ED] hover:bg-[#B8D4E8] text-[#2C3E50] font-semibold rounded-2xl transition-all duration-300 shadow-md"
            >
              Start Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8D4E8] via-[#A8CAE0] to-[#6FB9D4] flex items-center justify-center p-3 md:p-4 relative overflow-hidden">
      <div className="bg-[#C4B5FD]/60 p-3 rounded-[44px] shadow-2xl w-full max-w-6xl relative">
        {currentQuestion === 0 && (
          <div className="absolute left-4 bottom-4 z-20">
            <div className="relative">
              <div className="bg-white border-[2px] border-[#6FB9D4] rounded-xl px-4 py-2 shadow-lg mb-1 relative">
                <p className="text-sm font-bold text-[#2C3E50] whitespace-nowrap">Best of Luck !</p>
                <div className="absolute bottom-[-2px] left-4 transform translate-y-full">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#6FB9D4]" />
                  <div className="absolute top-[-7px] left-[-7px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-white" />
                </div>
              </div>
              <div className="relative w-20 h-20 md:w-24 md:h-24 ml-2">
                <img src="/images/paw-animated.gif" alt="Cat Paw Mascot" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        )}

        <div className="bg-[#F8FAFB] rounded-[40px] overflow-hidden p-6 md:p-10 relative flex flex-col">
          <div className="text-center mb-3">
            <h1 className="text-3xl md:text-5xl font-serif italic text-[#4A6B7C] mb-2">Test Your Knowledge</h1>
            <p className="text-sm md:text-base text-[#4A5568]">Answer all questions to see your results</p>
          </div>

          <div className="flex gap-2 mb-8 max-w-5xl mx-auto w-full">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  index <= currentQuestion ? "bg-[#2C3E50]" : "bg-[#D8E4EB]"
                }`}
              />
            ))}
          </div>

          <div className="flex-1" />

          <div
            className={`mb-6 transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <div className="bg-[#C8E3F0] rounded-2xl p-4 mb-6 border border-[#B0D4E8]">
              <h2 className="text-base md:text-lg font-semibold text-[#2C3E50] text-center">
                {currentQ.id}. {currentQ.question}
              </h2>
            </div>

            <div className="space-y-3 max-w-5xl mx-auto">
              {currentQ.options.map((option) => {
                const isSelected = selectedAnswers[currentQuestion] === option
                const isHovered = hoveredOption === option

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    onMouseEnter={() => setHoveredOption(option)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className={`w-full p-4 md:p-5 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 border ${
                      isSelected
                        ? "bg-[#C8E3F0] text-[#2C3E50] shadow-md border-[#A0C8E1]"
                        : isHovered
                          ? "bg-[#E8F4F8] text-[#2C3E50] border-[#D4E8F3]"
                          : "bg-white text-[#2C3E50] border-[#D8E4EB]"
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pr-2 md:pr-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D8EBF5] hover:bg-[#C8E0ED] text-[#2C3E50] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion]}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#C8E0ED] hover:bg-[#B8D4E8] text-[#2C3E50] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}