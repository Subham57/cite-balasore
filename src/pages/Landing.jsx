import { Link } from 'react-router-dom'
import config from '../data/config.json'
import coursesData from '../data/courses.json'
import Carousel from '../components/Carousel.jsx'
import CourseCard from '../components/CourseCard.jsx'
import NeuCard from '../components/NeuCard.jsx'
import NeuButton from '../components/NeuButton.jsx'

const popularCourses = coursesData.filter((c) => c.popular).slice(0, 6)

const STATS = [
  { label: 'Students Trained', value: config.studentsTrained },
  { label: 'Courses Offered', value: config.coursesOffered },
  { label: 'Placement Assistance', value: config.placementRate },
  { label: 'Years of Excellence', value: `${new Date().getFullYear() - config.foundedYear}+` },
]

export default function Landing() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="inline-block bg-base shadow-neu-pressed px-4 py-2 rounded-full text-xs font-display font-semibold text-brand-600 uppercase tracking-wide mb-6">
              Since {config.foundedYear} &middot; Two Branches in the City
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight">
              Build a career the{' '}
              <span className="text-transparent bg-clip-text bg-brand-gradient">practical</span> way.
            </h1>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
              {config.shortDescription}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <NeuButton as={Link} to="/courses" variant="primary" className="text-base px-8 py-4">
                Explore Courses
              </NeuButton>
              <NeuButton as={Link} to="/contact" variant="default" className="text-base px-8 py-4">
                Talk to Us
              </NeuButton>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <NeuCard key={s.label} className="p-4 text-center">
                  <p className="font-display font-bold text-2xl text-brand-600">{s.value}</p>
                  <p className="text-[11px] text-ink-faint mt-1 leading-tight">{s.label}</p>
                </NeuCard>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <NeuCard className="p-3">
              <img
                src="/images/about/about-1.svg"
                alt="Students learning at CITE Computer"
                className="w-full h-[380px] object-cover rounded-neu-sm"
              />
            </NeuCard>
            <NeuCard className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 px-5 py-4 max-w-[240px]">
              <div className="w-11 h-11 rounded-full bg-teal-gradient flex items-center justify-center text-white font-display font-bold shadow-neu-flat-sm shrink-0">
                ✓
              </div>
              <p className="text-xs text-ink-soft leading-snug">
                <span className="font-semibold text-ink block">Certified Training</span>
                Industry-recognized certificates
              </p>
            </NeuCard>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <div>
            <p className="text-teal-600 font-display font-semibold text-sm uppercase tracking-wide">
              Our Track Record
            </p>
            <h2 className="text-3xl font-bold mt-1">Achievements &amp; Recognition</h2>
          </div>
        </div>

        <Carousel
          items={config.achievements}
          ariaLabel="Achievements and recognitions"
          keyExtractor={(a) => a.id}
          itemClassName="w-[85%] sm:w-1/2 lg:w-1/3"
          renderItem={(a) => (
            <NeuCard className="p-5 h-full flex flex-col">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="w-full h-40 object-cover rounded-neu-sm mb-4"
              />
              <h3 className="font-display font-semibold text-ink">{a.title}</h3>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">{a.description}</p>
            </NeuCard>
          )}
        />
      </section>

      {/* POPULAR COURSES SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <div>
            <p className="text-brand-600 font-display font-semibold text-sm uppercase tracking-wide">
              Most Loved
            </p>
            <h2 className="text-3xl font-bold mt-1">Our Popular Courses</h2>
          </div>
          <Link
            to="/courses"
            className="text-sm font-display font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            View all courses →
          </Link>
        </div>

        <Carousel
          items={popularCourses}
          ariaLabel="Popular courses"
          keyExtractor={(c) => c.id}
          itemClassName="w-[85%] sm:w-1/2 lg:w-1/3"
          renderItem={(course) => <CourseCard course={course} />}
        />
      </section>

      {/* LOCATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-teal-600 font-display font-semibold text-sm uppercase tracking-wide">
            Visit Us
          </p>
          <h2 className="text-3xl font-bold mt-1">Our Branches</h2>
          <p className="text-ink-soft mt-3 max-w-xl mx-auto">
            Tap on a map to open directions in Google Maps and find the nearest CITE branch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {config.branches.map((branch) => (
            <NeuCard key={branch.id} className="overflow-hidden">
              <div className="relative h-56">
                <iframe
                  title={branch.name}
                  src={`https://www.google.com/maps?q=${branch.lat},${branch.lng}&z=15&output=embed`}
                  className="w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${branch.name} in Google Maps`}
                  className="absolute inset-0 bg-brand-900/0 hover:bg-brand-900/10 transition-colors flex items-end justify-end p-3"
                >
                  <span className="bg-base shadow-neu-flat-sm px-3 py-1.5 rounded-neu-sm text-xs font-display font-semibold text-brand-600">
                    Open in Maps ↗
                  </span>
                </a>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg">{branch.shortName}</h3>
                <p className="text-sm text-ink-soft mt-2">{branch.address}</p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <a href={`tel:${branch.phone}`} className="text-brand-600 font-semibold">
                    {branch.phone}
                  </a>
                  <span className="text-ink-faint">{branch.timings}</span>
                </div>
              </div>
            </NeuCard>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="p-10 sm:p-14 text-center bg-brand-gradient rounded-neu shadow-neu-flat-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to start learning?</h2>
          <p className="text-brand-50/90 mt-3 max-w-xl mx-auto">
            Talk to our counsellors and find the right course for your goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NeuButton as={Link} to="/courses" variant="default" className="text-base px-8 py-4">
              Browse Courses
            </NeuButton>
            <NeuButton as={Link} to="/contact" variant="teal" className="text-base px-8 py-4">
              Get in Touch
            </NeuButton>
          </div>
        </div>
      </section>
    </div>
  )
}
