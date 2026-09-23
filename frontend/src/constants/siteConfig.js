/**
 * Central site configuration — single source of truth for static values.
 * Social links, email, CV asset, analytics ID and nav routes live here so
 * they are edited in one place instead of being scattered across components.
 */

/* --- social / contact --- */
export const GITHUB_URL = 'https://github.com/noshu12'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/noushad-n081/'
export const EMAIL_ADDRESS = 'alamnoushad081@gmail.com'
export const MAILTO_LINK = `mailto:${EMAIL_ADDRESS}`

/* --- assets --- */
export const CV_PATH = '/NOUSHAD-ALAM-CV-Resume_main.pdf'
export const CV_FILE_NAME = 'Noushad_Alam_CV.pdf'

/* --- analytics --- */
export const GA_MEASUREMENT_ID = 'G-NX7CQKHL6K'

/* --- navigation routes (desktop links + mobile drawer) --- */
export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/project', label: 'Project' },
  { to: '/contact', label: 'Contact' }
]
