import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import coursesData from '../data/courses.json'
import config from '../data/config.json'
import NeuCard from '../components/NeuCard.jsx'
import NeuButton from '../components/NeuButton.jsx'
import CourseCard from '../components/CourseCard.jsx'

export default function CourseDetail() {
  const { courseId } = useParams()
  const [showPayment, setShowPayment] = useState(false)
  const course = coursesData.find((c) => c.id === courseId)

  if (!course) return <Navigate to="/courses" replace />

  const related = coursesData.filter((c) => c.id !== course.id && c.category === course.category).slice(0, 3)

  const discount =
    course.originalPrice && course.originalPrice > course.price
      ? Math.round(100 - (course.price / course.originalPrice) * 100)
      : null

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-ink-faint mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-brand-600">Home</Link>
        <span>/</span>
        <Link to="/courses" className="hover:text-brand-600">Courses</Link>
        <span>/</span>
        <span className="text-ink-soft">{course.name}</span>
      </nav>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left: course info */}
        <div className="lg:col-span-3">
          <NeuCard className="overflow-hidden mb-8">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </NeuCard>

          <span className="inline-block bg-base shadow-neu-pressed px-3 py-1.5 rounded-neu-sm text-xs font-display font-semibold text-brand-600 mb-3">
            {course.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{course.name}</h1>
          <p className="text-ink-soft mt-4 leading-relaxed">{course.description}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="text-xs font-semibold text-ink-soft bg-base shadow-neu-flat-sm px-4 py-2 rounded-full">
              ⏱ {course.duration}
            </span>
            <span className="text-xs font-semibold text-ink-soft bg-base shadow-neu-flat-sm px-4 py-2 rounded-full">
              🎯 {course.level}
            </span>
          </div>

          <NeuCard className="p-6 sm:p-8 mt-10">
            <h2 className="font-display font-bold text-xl mb-5">Syllabus</h2>
            <ul className="space-y-3">
              {course.syllabus.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-base shadow-neu-flat-sm flex items-center justify-center text-xs font-display font-bold text-brand-600 shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink-soft pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </NeuCard>
        </div>

        {/* Right: sticky price / payment card */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-28 space-y-6">
            <NeuCard className="p-6 sm:p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-bold text-3xl text-brand-600">
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
                {course.originalPrice && (
                  <span className="text-ink-faint line-through text-lg">
                    ₹{course.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {discount && (
                  <span className="bg-teal-gradient text-white text-xs font-display font-bold px-2.5 py-1 rounded-neu-sm">
                    {discount}% OFF
                  </span>
                )}
              </div>
              <p className="text-xs text-ink-faint mt-1">Course fee, one-time payment</p>

              {!showPayment ? (
                <NeuButton
                  variant="primary"
                  className="w-full mt-6 text-base py-4"
                  onClick={() => setShowPayment(true)}
                >
                  Pay Now
                </NeuButton>
              ) : (
                <div className="mt-6 animate-fade-in">
                  <div className="bg-base shadow-neu-pressed rounded-neu p-5 text-center">
                    <p className="font-display font-semibold text-sm mb-4">Scan to Pay via UPI</p>
                    <img
                      src={config.payment.qrImage}
                      alt="UPI payment QR code"
                      className="w-44 h-44 mx-auto rounded-neu-sm shadow-neu-flat-sm bg-white p-2"
                    />
                    <p className="text-xs text-ink-faint mt-4">UPI ID</p>
                    <p className="font-display font-semibold text-ink select-all">
                      {config.payment.upiId}
                    </p>
                    <p className="text-xs text-ink-faint mt-1">
                      Payee: {config.payment.payeeName}
                    </p>
                  </div>

                  <div className="mt-4 bg-danger-500/10 border border-danger-500/30 rounded-neu-sm p-4 flex gap-3">
                    <span className="text-danger-500 text-lg leading-none">⚠</span>
                    <p className="text-xs text-danger-600 leading-relaxed font-medium">
                      {config.payment.warningMessage}
                    </p>
                  </div>
                </div>
              )}

              <NeuButton
                as={Link}
                to="/contact"
                variant="default"
                className="w-full mt-4 text-sm py-3.5"
              >
                Ask a Question First
              </NeuButton>
            </NeuCard>

            <NeuCard className="p-6">
              <h3 className="font-display font-semibold text-sm mb-3">This course includes</h3>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                <li className="flex items-center gap-2">✓ Certificate of completion</li>
                <li className="flex items-center gap-2">✓ Hands-on project work</li>
                <li className="flex items-center gap-2">✓ Placement assistance</li>
                <li className="flex items-center gap-2">✓ Study material included</li>
              </ul>
            </NeuCard>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {related.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
