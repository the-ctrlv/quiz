/* eslint-disable arrow-body-style */
import Image from 'next/image'

import { IQuestion } from '@/shared/types'

export default function Question({
  data,
  currentStepIndex,
  setCurrentStepIndex,
  isLastStep,
  currentValues,
  register,
  setValue,
}: IQuestion) {
  const getConvertedValue = (index: number) => {
    switch (index) {
      case 0:
        return 'A'
      case 1:
        return 'B'
      case 2:
        return 'C'
      case 3:
        return 'D'
      case 4:
        return 'E'
      case 5:
        return 'F'
      default:
        return null
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative aspect-square w-full">
        <Image src={data.questionImage} alt={`Question-${currentStepIndex + 1}`} fill className="object-contain" />
      </div>
      <h4 className="my-5 text-center text-base font-semibold">Choose your answer:</h4>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10">
        <input type="hidden" {...register(`question-${data.index + 1}`)} />

        {data.answerImages.map((answer, index) => {
          const isActive = currentValues[`question-${data.index + 1}`] === getConvertedValue(index)
          return (
            <button
              type={isLastStep ? 'submit' : 'button'}
              className={`flex h-[53px] items-center justify-center gap-4 rounded-md border p-2
            ${isActive ? 'border-primary' : 'border-transparent'}
            `}
              key={index}
              onClick={() => {
                setValue(`question-${data.index + 1}`, getConvertedValue(index))
                if (!isLastStep) {
                  setCurrentStepIndex(currentStepIndex + 1)
                }
              }}
            >
              <h5 className="text-[34px] font-bold text-primary">{getConvertedValue(index)}</h5>
              <Image
                src={answer}
                alt={`Answer-${data.index}-${index}`}
                className="h-auto w-[53px]"
                width={56}
                height={41}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
