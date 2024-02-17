/* eslint-disable react/jsx-one-expression-per-line */
export default function ProgressBar({
  currentQuestion,
  totalQuestions,
}: {
  currentQuestion: number
  totalQuestions: number
}) {
  const minWidthPercentage = 10 // Adjust this value based on your design needs.
  const widthPercentage = Math.max((currentQuestion / totalQuestions) * 100, minWidthPercentage)
  return (
    <div className="relative w-full overflow-hidden rounded-full bg-[#DFE4EA]">
      <div className="relative rounded-full" />
      <div
        className="relative h-5 bg-primary transition-all duration-500 ease-in-out"
        style={{
          width: `${widthPercentage}%`,
        }}
      >
        <span
          className="absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-sm
      text-white"
        >
          {currentQuestion}/{totalQuestions}
        </span>
      </div>
    </div>
  )
}
