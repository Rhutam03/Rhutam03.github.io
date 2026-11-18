import { useEffect, useRef, useState } from 'react'
import { useTheme, useChrome } from '../hooks'

const NAV = [
  ['about', 'About'],
  ['work', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['research', 'Publications'],
  ['resume', 'Resumes & CV'],
]
const IDS = NAV.map(([id]) => id)

export default function Header() {
  const [theme, toggle] = useTheme()
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const navigation = useRef(null)
  const { stuck, active } = useChrome(IDS)
  const dark = theme === 'dark'

  useEffect(() => {
    if (!open) return
    navigation.current?.querySelector('a')?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        if (menuButton.current?.offsetParent !== null) menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header id="masthead" className={stuck ? 'sticky' : ''}>
      <span className="mast-spacer" aria-hidden="true"></span>
      <nav ref={navigation} id="links" aria-label="Primary navigation" className={open ? 'open' : ''}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="ctrls">
        <button className="switch" type="button" role="switch" aria-checked={dark} aria-label="Dark mode" onClick={toggle}>
          <svg aria-hidden="true" className="ic ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5 3.6 3.6M20.4 20.4 19 19M19 5l1.4-1.4M3.6 20.4 5 19" /></svg>
          <svg aria-hidden="true" className="ic ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
          <span className="knob" aria-hidden="true"></span>
        </button>
        <button ref={menuButton} id="menu" type="button" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="links">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d={open ? 'M5 5l14 14M19 5 5 19' : 'M3 6h18M3 12h18M3 18h18'} /></svg>
        </button>
      </div>
    </header>
  )
}
