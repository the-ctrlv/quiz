'use client'

import { useEffect } from 'react'
import type { RefObject } from 'react'

type Ref = RefObject<HTMLElement> | RefObject<HTMLElement>[]

const eventTargetIsNode = (eventTarget: EventTarget | null): eventTarget is Node =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !!eventTarget && 'baseURI' in eventTarget

const useClickOutside = (ref: Ref, callback: () => void): void => {
  useEffect(() => {
    const handleClick = ({ target }: MouseEvent | TouchEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref]

      const targetAsNode = eventTargetIsNode(target) ? target : null

      const isOutside = refs.every((el) => el.current && !el.current.contains(targetAsNode))

      if (isOutside) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [ref, callback])
}

export default useClickOutside
