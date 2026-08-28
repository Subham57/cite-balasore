import { useMemo, useState } from 'react'
import coursesData from '../data/courses.json'
import CourseCard from '../components/CourseCard.jsx'
import NeuCard from '../components/NeuCard.jsx'

const CATEGORIES = ['All', ...new Set(coursesData.map((c) => c.category))]

export default function Courses() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return coursesData.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      const matchesCategory = category === 'All' || c.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-brand-600 font-display font-semibold text-sm uppercase tracking-wide">
          What We Teach
        </p>
        <h1 className="text-4xl font-bold mt-1">All Courses</h1>
        <p className="text-ink-soft mt-3">
          Browse our full range of certified, job-focused computer courses. Use search or filters
          to find the right one for you.
        </p>
      </div>

      {/* Search & filters */}
      <NeuCard className="p-4 sm:p-5 mb-10 sticky top-24 z-30">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses by name, topic or category..."
              aria-label="Search courses"
              className="w-full bg-base shadow-neu-pressed rounded-neu-sm pl-11 pr-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto neu-scroll-x pb-1 lg:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-neu-sm text-xs font-display font-semibold transition-all shrink-0 ${
                  category === cat
                    ? 'bg-base shadow-neu-pressed text-brand-600'
                    : 'bg-base shadow-neu-flat-sm text-ink-soft hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </NeuCard>

      {/* Results */}
      {filtered.length > 0 ? (
        <>
          <p className="text-sm text-ink-faint mb-6">
            Showing {filtered.length} course{filtered.length !== 1 ? 's' : ''}
            {category !== 'All' ? ` in ${category}` : ''}
            {query ? ` for "${query}"` : ''}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </>
      ) : (
        <NeuCard className="p-14 text-center">
          <p className="text-4xl mb-4">🔍</p>
          <h3 className="font-display font-semibold text-lg">No courses found</h3>
          <p className="text-ink-soft text-sm mt-2">
            Try a different keyword or clear the filters to see all courses.
          </p>
        </NeuCard>
      )}
    </div>
  )
}
