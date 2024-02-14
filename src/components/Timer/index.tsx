'use client'

import { useState } from 'react'

import { IconArrowLeft, IconArrowRight, IconTimer } from '@/utils/vector-icons'

export default function Timer() {
  const countdownTime = 10
  const [time] = useState(countdownTime)

  const formatTime = (t: number) => {
    // convert time in 00:00 format

    const minutes = Math.floor(t / 60)
    const seconds = t % 60

    return `${minutes}:${seconds}`
  }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setTime((prev) => prev - 1)
  //     }, 1000)
  //     return () => clearInterval(interval)
  //   }, [])

  return (
    <div className="my-5 flex w-full items-center justify-between">
      <IconArrowLeft />
      <div className="flex items-center gap-1">
        <IconTimer />
        <span className="ml-[8px] text-[14px] font-bold leading-[16px] text-[#000000]">{formatTime(time)}</span>
      </div>
      <IconArrowRight />
    </div>
  )
}
