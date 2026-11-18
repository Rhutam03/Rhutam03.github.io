import { useEffect, useState } from 'react'

// Colour theme, remembered between visits. The initial value comes from the
// inline script in index.html that runs before React mounts (avoids a flash).
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  )
  function toggle() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try { localStorage.setItem('theme', next) } catch (e) {}
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) meta.setAttribute('content', next === 'dark' ? '#131210' : '#f3efe6')
      return next
    })
  }
  return [theme, toggle]
}

// Fades blocks in as they scroll into view; respects reduced-motion via CSS.
export function useReveal() {
  useEffect(() => {
    const blocks = document.querySelectorAll('.up')
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      blocks.forEach((el) => el.classList.add('seen'))
      return
    }
    const io = new IntersectionObserver(
      (rows) => {
        rows.forEach((row) => {
          if (row.isIntersecting) {
            row.target.classList.add('seen')
            io.unobserve(row.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    blocks.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Drops a hairline under the masthead once you start scrolling, and reports the
// section currently in view so the nav can underline it.
export function useChrome(sectionIds) {
  const [stuck, setStuck] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    if (!('IntersectionObserver' in window)) {
      return () => window.removeEventListener('scroll', onScroll)
    }
    const spy = new IntersectionObserver(
      (rows) => rows.forEach((r) => { if (r.isIntersecting) setActive(r.target.id) }),
      { rootMargin: '-35% 0px -60% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })
    return () => { window.removeEventListener('scroll', onScroll); spy.disconnect() }
  }, [sectionIds])
  return { stuck, active }
}
