'use client'

import { useEffect, useState } from 'react'

import { IconArrowLeft, IconArrowRight, IconTimer } from '@/utils/vector-icons'

/* eslint-disable prefer-template */
/* eslint-disable arrow-body-style */
interface ITimer {
  isFirstStep: boolean
  isLastStep: boolean
  next: () => void
  back: () => void
}
export default function Timer({ isFirstStep, isLastStep, next, back }: ITimer) {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="my-5 flex h-3 w-full items-center justify-center">
      {!isFirstStep && (
        <div className="absolute left-0 cursor-pointer p-2" onClick={back}>
          <IconArrowLeft />
        </div>
      )}
      <div className=" flex items-center gap-1">
        <IconTimer />
        <span className="ml-[8px] text-[14px] font-bold leading-[16px] text-[#000000]">{formatTime(elapsedTime)}</span>
      </div>
      {!isLastStep && (
        <div className="absolute right-0 cursor-pointer p-2" onClick={next}>
          <IconArrowRight />
        </div>
      )}
    </div>
  )
}
