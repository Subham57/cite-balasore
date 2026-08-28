import { Link } from 'react-router-dom'
import NeuCard from './NeuCard.jsx'

export default function CourseCard({ course }) {
  const discount =
    course.originalPrice && course.originalPrice > course.price
      ? Math.round(100 - (course.price / course.originalPrice) * 100)
      : null

  return (
    <NeuCard
      as={Link}
      to={`/courses/${course.id}`}
      className="block overflow-hidden h-full group hover:shadow-neu-hover transition-shadow duration-300"
    >
      <div className="relative overflow-hidden rounded-t-neu">
        <img
          src={course.image}
          alt={course.name}
          loading="lazy"
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-base/95 backdrop-blur px-3 py-1 rounded-neu-sm text-xs font-display font-semibold text-brand-600 shadow-neu-flat-sm">
          {course.category}
        </span>
        {discount && (
          <span className="absolute top-3 right-3 bg-teal-gradient text-white px-2.5 py-1 rounded-neu-sm text-xs font-display font-bold shadow-neu-flat-sm">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display font-semibold text-ink text-lg leading-snug line-clamp-2 min-h-[3rem]">
          {course.name}
        </h3>
        <p className="text-sm text-ink-soft mt-2 line-clamp-2">{course.shortDescription}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-brand-600 text-xl">
              ₹{course.price.toLocaleString('en-IN')}
            </span>
            {course.originalPrice && (
              <span className="text-xs text-ink-faint line-through">
                ₹{course.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="text-xs font-semibold text-ink-soft bg-base shadow-neu-pressed px-3 py-1.5 rounded-full">
            {course.duration}
          </span>
        </div>
      </div>
    </NeuCard>
  )
}
