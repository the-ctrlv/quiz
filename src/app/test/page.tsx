'use client'

import { useState } from 'react'

import ProgressBar from '@/components/ProgressBar'
import Question from '@/components/Question'
import Timer from '@/components/Timer'

import { questions } from '../data/questions'

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const questionsArray = questions.map((question, index) => (
    <Question
      setCurrentStepIndex={setCurrentStepIndex}
      currentStepIndex={currentStepIndex}
      key={index}
      data={question}
    />
  ))

  return (
    <div className="relative w-full overflow-hidden">
      <ProgressBar currentQuestion={1} totalQuestions={10} />
      <Timer />
      {questionsArray[currentStepIndex]}
    </div>
  )
}
