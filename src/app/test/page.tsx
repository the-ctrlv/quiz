'use client'

import { BaseSyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import ProgressBar from '@/components/ProgressBar'
import Question from '@/components/Question'
import Timer from '@/components/Timer'

import { questions } from '../data/questions'

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === questions.length - 1

  const { register, handleSubmit, setValue, watch, getValues } = useForm({
    mode: 'onChange',
  })

  // added this line to update all fields immediately
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const watchAllFields = watch()

  const currentValues = getValues()

  const questionsArray = questions.map((question, index) => (
    <Question
      register={register}
      setValue={setValue}
      currentValues={currentValues}
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

  const onSubmit = async (data: { [key: string]: string }, event?: BaseSyntheticEvent) => {
    event?.preventDefault()
    // here you can submit the form
    // eslint-disable-next-line no-console
    console.log('Data submitted:', data)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <ProgressBar currentQuestion={currentStepIndex + 1} totalQuestions={questionsArray.length} />
      <Timer isFirstStep={isFirstStep} isLastStep={isLastStep} next={next} back={back} />
      <form onSubmit={handleSubmit(onSubmit)}>{questionsArray[currentStepIndex]}</form>
    </div>
  )
}
