import { RegisterOptions, UseFormRegisterReturn, UseFormReturn } from 'react-hook-form'

export interface IQuestionData {
  index: number
  questionImage: string
  answerImages: string[]
}

export interface IQuestion {
  data: IQuestionData
  currentStepIndex: number
  setCurrentStepIndex: (index: number) => void
  isLastStep: boolean
  currentValues: { [key: string]: string }
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  setValue: UseFormReturn['setValue']
}
