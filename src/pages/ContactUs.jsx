import config from '../data/config.json'
import NeuCard from '../components/NeuCard.jsx'
import NeuButton from '../components/NeuButton.jsx'

export default function ContactUs() {
  const { contact, branches } = config

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-brand-600 font-display font-semibold text-sm uppercase tracking-wide">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold mt-1">Contact Us</h1>
        <p className="text-ink-soft mt-3">
          Have a question about a course, fees or admissions? Reach out through any of the
          channels below, or visit one of our branches.
        </p>
      </div>

      {/* Quick contact cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <NeuCard className="p-6 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-base shadow-neu-pressed flex items-center justify-center text-xl mb-4">
            📞
          </div>
          <h3 className="font-display font-semibold text-sm mb-2">Call Us</h3>
          {contact.phones.map((p) => (
            <a key={p} href={`tel:${p}`} className="block text-sm text-brand-600 font-semibold py-0.5">
              {p}
            </a>
          ))}
        </NeuCard>

        <NeuCard className="p-6 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-base shadow-neu-pressed flex items-center justify-center text-xl mb-4">
            ✉️
          </div>
          <h3 className="font-display font-semibold text-sm mb-2">Email Us</h3>
          {contact.emails.map((e) => (
            <a
              key={e}
              href={`mailto:${e}`}
              className="block text-sm text-brand-600 font-semibold py-0.5 break-all"
            >
              {e}
            </a>
          ))}
        </NeuCard>

        <NeuCard className="p-6 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-base shadow-neu-pressed flex items-center justify-center text-xl mb-4">
            💬
          </div>
          <h3 className="font-display font-semibold text-sm mb-2">WhatsApp</h3>
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-brand-600 font-semibold"
          >
            {contact.whatsapp}
          </a>
        </NeuCard>

        <NeuCard className="p-6 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-base shadow-neu-pressed flex items-center justify-center text-xl mb-4">
            🌐
          </div>
          <h3 className="font-display font-semibold text-sm mb-2">Follow Us</h3>
          <div className="flex items-center justify-center gap-3 mt-1">
            {Object.entries(contact.socialMedia).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-base shadow-neu-flat-sm text-xs font-semibold uppercase text-ink-soft hover:text-brand-600"
              >
                {name.charAt(0)}
              </a>
            ))}
          </div>
        </NeuCard>
      </div>

      {/* Branches */}
      <div className="text-center mb-10">
        <p className="text-teal-600 font-display font-semibold text-sm uppercase tracking-wide">
          Find Us
        </p>
        <h2 className="text-3xl font-bold mt-1">Our Branches</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {branches.map((branch) => (
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
                className="absolute inset-0 hover:bg-brand-900/10 transition-colors"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg">{branch.name}</h3>
              <p className="text-sm text-ink-soft mt-2">{branch.address}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                <a href={`tel:${branch.phone}`} className="text-brand-600 font-semibold">
                  {branch.phone}
                </a>
                <span className="text-ink-faint">{branch.timings}</span>
              </div>
              <NeuButton
                as="a"
                href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="default"
                className="w-full mt-5 text-sm py-3"
              >
                Get Directions
              </NeuButton>
            </div>
          </NeuCard>
        ))}
      </div>
    </div>
  )
}
