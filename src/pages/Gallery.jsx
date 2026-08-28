import { useState, useEffect, useCallback } from 'react'
import config from '../data/config.json'
import NeuCard from '../components/NeuCard.jsx'

export default function Gallery() {
  const photos = config.gallery
  const [activeIndex, setActiveIndex] = useState(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, showPrev, showNext])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-brand-600 font-display font-semibold text-sm uppercase tracking-wide">
          Moments Worth Sharing
        </p>
        <h1 className="text-4xl font-bold mt-1">Photo Gallery</h1>
        <p className="text-ink-soft mt-3">
          A look at our achievements, events, and life at CITE Computer.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, i) => (
          <NeuCard
            key={photo.id}
            as="button"
            onClick={() => setActiveIndex(i)}
            className="block w-full overflow-hidden break-inside-avoid p-2 group text-left"
          >
            <div className="relative overflow-hidden rounded-neu-sm">
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          </NeuCard>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-900/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-base shadow-neu-flat flex items-center justify-center text-ink text-xl"
          >
            ×
          </button>

          <button
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-base shadow-neu-flat flex items-center justify-center text-ink text-xl"
          >
            ‹
          </button>

          <div
            className="max-w-3xl w-full bg-base rounded-neu shadow-neu-flat-lg p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[activeIndex].image}
              alt={photos[activeIndex].caption}
              className="w-full max-h-[70vh] object-contain rounded-neu-sm"
            />
            <p className="text-center text-sm font-display font-medium text-ink mt-4">
              {photos[activeIndex].caption}
            </p>
          </div>

          <button
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-base shadow-neu-flat flex items-center justify-center text-ink text-xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
