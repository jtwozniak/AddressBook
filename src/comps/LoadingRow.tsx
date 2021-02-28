import React, { useEffect, useRef, useState } from "react"

type Props = {
  onVisible: () => void
}

export const LoadingRow = ({ onVisible }: Props) => {
  const ref = useRef()
  const [isIntersecting, setIsIntersecting] = useState(false)
  useEffect(() => {
    const options = {
      root: ref.current,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setIsIntersecting(isIntersecting)
    }, options)

    return () => {
      observer.disconnect()
    }
  })

  useEffect(() => {
    if (isIntersecting) {
      onVisible()
    }
  }, [isIntersecting])

  return (
    <tr ref={ref}>
      <td>Loading animation?...</td>
    </tr>
  )
}
