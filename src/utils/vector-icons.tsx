/* eslint-disable max-len */
// import type { SVGProps } from 'react'

// type IconType = {
//   white?: boolean
// } & SVGProps<SVGSVGElement>

export const IconArrowLeft = () => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.16466 0.835224L1 5.99989L6.16466 11.1646"
      stroke="#0070F3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconArrowRight = () => (
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.16468 0.835224L6.32935 5.99989L1.16468 11.1646"
      stroke="#0070F3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconTimer = () => (
  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.16467 0C5.51967 0 3.99717 0.5775 2.78967 1.54C1.17967 2.8175 0.164673 4.795 0.164673 7C0.164673 10.8675 3.29717 14 7.16467 14C8.93217 14 10.5422 13.335 11.7847 12.25C13.2372 10.9725 14.1647 9.1 14.1647 7C14.1647 3.1325 11.0322 0 7.16467 0ZM8.91467 7.4375C8.91467 7.8925 8.66967 8.33 8.28467 8.5575L6.09717 9.87C5.88717 10.01 5.64217 10.0625 5.41467 10.0625C4.97717 10.0625 4.53967 9.835 4.29467 9.4325C3.92717 8.8025 4.11967 7.9975 4.74967 7.63L6.30717 6.7025V4.8125C6.30717 4.095 6.90217 3.5 7.61967 3.5C8.33717 3.5 8.91467 4.095 8.91467 4.8125V7.4375Z"
      fill="#0070F3"
    />
  </svg>
)

export const Icons = {
  arrowLeft: IconArrowLeft,
  arrowRight: IconArrowRight,
  timer: IconTimer,
}

export type Icon = keyof typeof Icons
