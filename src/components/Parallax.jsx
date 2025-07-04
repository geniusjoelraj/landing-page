import { useRef, useEffect, useState } from "react"

export default function Parallax() {
  const [scrollY, setScrollY] = useState(-230) //to make sure to reset the +230px on the element
  // without the -230 the element will have transform: 230px when it is not visible causing it to show when scrolled out
  const [isVisible, setIsVisible] = useState(false)
  const elemref = useRef(null) //used to set the div as an referenve for IntersectionObserver

  useEffect(() => {
    const handleScroll = () => {
      if (isVisible && elemref.current) {
        const rect = elemref.current.getBoundingClientRect()
        const elementTop = rect.top + window.pageYOffset
        const viewportHeight = window.innerHeight

        const scrollIntoView = window.pageYOffset + viewportHeight - elementTop //Calculate the scroll

        if (scrollIntoView > 0) {
          setScrollY(scrollIntoView)
        }
      }
    }

    if (isVisible) {
      window.addEventListener('scroll', handleScroll, { passive: true }) //passive true for smoth scroll
      handleScroll()
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (!entry.isIntersecting) {
          setScrollY(-230)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '10px'
      }
    )

    if (elemref.current) {
      observer.observe(elemref.current)
    }

    return () => {
      if (elemref.current) {
        observer.unobserve(elemref.current)
      }
    }
  }, [])

  return (
    <>
      <div
        className="text-[180px] font-bold text-gray-300 text-center my-20"
        ref={elemref}
      >
        Ship{" "}
        <span
          className="bg-gradient-to-r from-orange-500 to-purple-400 bg-clip-text text-transparent inline-block"
          style={{
            transform: `translateY(${(-scrollY * 0.3) + 230}px)`
          }}
        >
          faster
        </span>
      </div>

    </>
  )
}
