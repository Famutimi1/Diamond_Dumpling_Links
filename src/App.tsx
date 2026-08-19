import type { ReactElement } from 'react'
import logoUrl from './assets/logo.jpeg'

type IconKey = 'globe' | 'instagram' | 'tiktok' | 'form' | 'pin' | 'mail'

interface LinkItem {
  title: string
  sub: string
  url: string
  icon: IconKey
  social: boolean
}

// ---------- icon library ----------
const icons: Record<IconKey, ReactElement> = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#c9a24e" strokeWidth="1.5" />
      <path
        d="M3 12H21M12 3C14.5 5.8 15.8 8.8 15.8 12C15.8 15.2 14.5 18.2 12 21C9.5 18.2 8.2 15.2 8.2 12C8.2 8.8 9.5 5.8 12 3Z"
        stroke="#c9a24e"
        strokeWidth="1.5"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#c9a24e" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.3" stroke="#c9a24e" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="#c9a24e" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M14 3v10.2a3 3 0 1 1-2.2-2.9"
        stroke="#c9a24e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3c.4 2.5 2 4.2 4.4 4.5"
        stroke="#c9a24e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  form: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="#c9a24e" strokeWidth="1.5" />
      <path
        d="M8.3 9.5L10.5 11.7L15.5 6.7"
        stroke="#c9a24e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 15H15.5" stroke="#c9a24e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21C12 21 18 14.6 18 10A6 6 0 0 0 6 10C6 14.6 12 21 12 21Z"
        stroke="#c9a24e"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2" stroke="#c9a24e" strokeWidth="1.5" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="#c9a24e" strokeWidth="1.5" />
      <path
        d="M4.5 7L12 13L19.5 7"
        stroke="#c9a24e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

// ---------- links ----------
// Static list — edit these entries to change what visitors see.
const links: LinkItem[] = [
  { title: 'Visit Our Website', sub: 'Menu & more', url: 'https://diamonddumpling.com', icon: 'globe', social: true },
  { title: 'Share Your Feedback', sub: 'Quick Google Form', url: 'https://forms.gle/your-feedback-form', icon: 'form', social: false },
  { title: 'Leave a Google Review', sub: 'Diamond Dumpling, Abeokuta', url: 'https://share.google/u3a9WFjhUmCln6LMt', icon: 'pin', social: false },
  { title: 'Follow on Instagram', sub: '@diamonddumpling', url: 'https://instagram.com/diamonddumpling', icon: 'instagram', social: true },
  { title: 'Watch on TikTok', sub: '@diamonddumpling', url: 'https://tiktok.com/@diamonddumpling', icon: 'tiktok', social: true },
]

export default function App() {
  return (
    <div className="page">
      {/* Logo / Seal */}
      <div className="seal-wrap">
        <div className="seal" aria-label="Diamond Dumpling logo">
          <img src={logoUrl} alt="Diamond Dumpling logo" />
        </div>
        <h1 className="brand">
          Diamond <span>Dumpling</span>
        </h1>
        <p className="tagline">Fine taste of African and Chinese Food</p>
      </div>

      <div className="fold-divider">
        <span className="line"></span>
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C7 6 3 10 3 15C3 19.5 7 22 12 22C17 22 21 19.5 21 15C21 10 17 6 12 3Z"
            stroke="#c9a24e"
            strokeWidth="1.4"
          />
        </svg>
        <span className="line"></span>
      </div>

      {/* Links */}
      <div id="linkList">
        {links.map((link) => (
          <a
            key={link.url}
            className="link-item"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-icon">{icons[link.icon] || icons.globe}</span>
            <span className="link-body">
              <span className="link-title">{link.title}</span>
              <span className="link-sub">{link.sub}</span>
            </span>
          </a>
        ))}
      </div>

      {/* Social row */}
      <div className="social-row">
        {links
          .filter((l) => l.social)
          .map((link) => (
            <a
              key={link.url}
              className="social-badge"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
            >
              {icons[link.icon] || icons.globe}
            </a>
          ))}
      </div>

      <footer>
        <svg className="mini-seal" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 10C22 16 14 24 14 34C14 45 22 52 32 52C42 52 50 45 50 34C50 24 42 16 32 10Z"
            stroke="#c9a24e"
            strokeWidth="2"
          />
        </svg>
        <p>Diamond Dumpling &mdash; est. with care</p>
      </footer>
    </div>
  )
}
