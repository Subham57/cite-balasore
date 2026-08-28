import config from '../data/config.json'
import NeuCard from '../components/NeuCard.jsx'

const { aboutUs, foundedYear, studentsTrained, coursesOffered, placementRate } = config

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Intro */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <p className="text-brand-600 font-display font-semibold text-sm uppercase tracking-wide">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold mt-1 leading-tight">{aboutUs.heading}</h1>
          <p className="text-ink-soft mt-5 leading-relaxed">{aboutUs.story}</p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <NeuCard className="p-4 text-center">
              <p className="font-display font-bold text-xl text-brand-600">{foundedYear}</p>
              <p className="text-[11px] text-ink-faint mt-1">Founded</p>
            </NeuCard>
            <NeuCard className="p-4 text-center">
              <p className="font-display font-bold text-xl text-brand-600">{studentsTrained}</p>
              <p className="text-[11px] text-ink-faint mt-1">Students</p>
            </NeuCard>
            <NeuCard className="p-4 text-center">
              <p className="font-display font-bold text-xl text-brand-600">{coursesOffered}</p>
              <p className="text-[11px] text-ink-faint mt-1">Courses</p>
            </NeuCard>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <NeuCard className="p-2 col-span-2">
            <img
              src={aboutUs.images[0]}
              alt="CodeCraft classroom"
              className="w-full h-56 object-cover rounded-neu-sm"
            />
          </NeuCard>
          <NeuCard className="p-2">
            <img
              src={aboutUs.images[1]}
              alt="Practical training session"
              className="w-full h-40 object-cover rounded-neu-sm"
            />
          </NeuCard>
          <NeuCard className="p-2">
            <img
              src={aboutUs.images[2]}
              alt="Graduation day at CodeCraft"
              className="w-full h-40 object-cover rounded-neu-sm"
            />
          </NeuCard>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <NeuCard className="p-8">
          <div className="w-12 h-12 rounded-neu-sm bg-brand-gradient flex items-center justify-center text-white text-xl mb-5 shadow-neu-flat-sm">
            🎯
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Our Mission</h3>
          <p className="text-ink-soft leading-relaxed">{aboutUs.mission}</p>
        </NeuCard>
        <NeuCard className="p-8">
          <div className="w-12 h-12 rounded-neu-sm bg-teal-gradient flex items-center justify-center text-white text-xl mb-5 shadow-neu-flat-sm">
            🔭
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Our Vision</h3>
          <p className="text-ink-soft leading-relaxed">{aboutUs.vision}</p>
        </NeuCard>
      </div>

      {/* Values */}
      <div>
        <div className="text-center mb-10">
          <p className="text-teal-600 font-display font-semibold text-sm uppercase tracking-wide">
            What Drives Us
          </p>
          <h2 className="text-3xl font-bold mt-1">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutUs.values.map((v) => (
            <NeuCard key={v.title} className="p-6 text-center">
              <p className="font-display font-semibold text-ink mb-2">{v.title}</p>
              <p className="text-sm text-ink-soft leading-relaxed">{v.description}</p>
            </NeuCard>
          ))}
        </div>
      </div>

      {/* Placement banner */}
      <div className="mt-20 bg-brand-gradient rounded-neu shadow-neu-flat-lg p-10 sm:p-14 text-center">
        <h2 className="text-3xl font-bold text-white">{placementRate} Placement Assistance</h2>
        <p className="text-brand-50/90 mt-3 max-w-xl mx-auto">
          We work with local businesses and IT companies to help our graduates find real jobs, not
          just certificates.
        </p>
      </div>
    </div>
  )
}
