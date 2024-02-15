'use client'

import { useState } from 'react'

import ProgressBar from '@/components/ProgressBar'
import Question from '@/components/Question'
import Timer from '@/components/Timer'

import { questions } from '../data/questions'

/* eslint-disable react/jsx-no-bind */

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === questions.length - 1
  const questionsArray = questions.map((question, index) => (
    <Question
      setCurrentStepIndex={setCurrentStepIndex}
      currentStepIndex={currentStepIndex}
      key={index}
      data={question}
      isLastStep={isLastStep}
    />
  ))

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= questionsArray.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  return (
    <div className="relative w-full overflow-hidden">
      <ProgressBar currentQuestion={currentStepIndex + 1} totalQuestions={questionsArray.length} />
      <Timer isFirstStep={isFirstStep} isLastStep={isLastStep} next={next} back={back} />
      {questionsArray[currentStepIndex]}
    </div>
  )
}
