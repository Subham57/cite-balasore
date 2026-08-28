import { useRef, useEffect, useCallback } from 'react'

/**
 * Generic auto-sliding, swipeable carousel.
 * Uses native horizontal scroll + scroll-snap so it works great with
 * touch on mobile/tablet, and auto-advances on desktop.
 */
export default function Carousel({
  items,
  renderItem,
  keyExtractor,
  autoPlayMs = 3200,
  ariaLabel = 'Carousel',
  itemClassName = 'w-full sm:w-1/2 lg:w-1/3',
}) {
  const trackRef = useRef(null)
  const timerRef = useRef(null)
  const pausedRef = useRef(false)

  const getStep = () => {
    const track = trackRef.current
    if (!track || !track.firstElementChild) return 0
    const child = track.firstElementChild
    const style = window.getComputedStyle(track)
    const gap = parseFloat(style.columnGap || style.gap || '0')
    return child.getBoundingClientRect().width + gap
  }

  const scrollByStep = useCallback((dir = 1) => {
    const track = trackRef.current
    if (!track) return
    const step = getStep()
    const maxScroll = track.scrollWidth - track.clientWidth

    if (dir > 0 && track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }
    if (dir < 0 && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxScroll, behavior: 'smooth' })
      return
    }
    track.scrollBy({ left: step * dir, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) scrollByStep(1)
    }, autoPlayMs)
    return () => clearInterval(timerRef.current)
  }, [autoPlayMs, scrollByStep])

  const pause = () => (pausedRef.current = true)
  const resume = () => (pausedRef.current = false)

  return (
    <div
      className="relative group"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className="flex gap-6 overflow-x-auto neu-scroll-x snap-x snap-mandatory scroll-smooth pb-4 -mx-1 px-1"
        style={{ scrollbarWidth: 'thin' }}
      >
        {items.map((item, i) => (
          <div
            key={keyExtractor ? keyExtractor(item) : i}
            className={`snap-start shrink-0 ${itemClassName}`}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByStep(-1)}
        className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-base shadow-neu-flat hover:shadow-neu-hover active:shadow-neu-pressed text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByStep(1)}
        className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-base shadow-neu-flat hover:shadow-neu-hover active:shadow-neu-pressed text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
      >
        ›
      </button>
    </div>
  )
}
