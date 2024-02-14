/* eslint-disable react/jsx-one-expression-per-line */
export default function ProgressBar({
  currentQuestion,
  totalQuestions,
}: {
  currentQuestion: number
  totalQuestions: number
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-full bg-[#DFE4EA]">
      <div className="relative rounded-full" />
      <div className="bg-primary h-5 w-1/2 " />
      <span
        className="bg-primary absolute left-1/2 top-1/2 -translate-x-1/2
      -translate-y-1/2"
      >
        {currentQuestion}/{totalQuestions}
      </span>
    </div>
  )
}
