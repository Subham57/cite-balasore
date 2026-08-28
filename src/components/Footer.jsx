import { Link } from "react-router-dom";
import config from "../data/config.json";

const PAGE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Photo Gallery" },
  { to: "/contact", label: "Contact Us" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/cite-logo.svg"
                alt="CITE - Centre of Innovation and Tech Education"
                className="w-64 h-auto"
              />
              {/* <span className="font-display font-bold text-lg">{config.instituteName}</span> */}
            </Link>
            <p className="text-sm text-ink-soft leading-relaxed">
              {config.shortDescription}
            </p>
          </div>

          {/* Page links */}
          <div>
            <h4 className="font-display font-semibold text-ink mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {PAGE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="font-display font-semibold text-ink mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              {config.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              {config.contact.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-brand-600 transition-colors break-all"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-display font-semibold text-ink mb-4 text-sm uppercase tracking-wide">
              Our Branches
            </h4>
            <ul className="space-y-4">
              {config.branches.map((branch) => (
                <li key={branch.id} className="text-sm text-ink-soft">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-600 transition-colors"
                  >
                    <span className="font-semibold text-ink block">
                      {branch.shortName}
                    </span>
                    {branch.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-base-dark flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-faint text-center sm:text-left">
            &copy; {year} {config.instituteFullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {Object.entries(config.contact.socialMedia).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-base shadow-neu-flat-sm text-ink-soft hover:text-brand-600 hover:shadow-neu-hover transition text-xs font-semibold uppercase"
              >
                {name.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
