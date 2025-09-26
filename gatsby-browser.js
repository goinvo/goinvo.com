import './src/styles/main.scss'
import wrapWithProvider from './wrap-with-provider'

export const wrapRootElement = wrapWithProvider

// Toggle header style based on scroll (after hero + search sections)
export const onRouteUpdate = () => {
  const header = document.getElementById('header')
  if (!header) return
  const update = () => {
    // Only use transparent header on the homepage. All other routes should stay solid for contrast.
    const isHomepage = !!document.querySelector('.app.homepage') || (typeof window !== 'undefined' && window.location && window.location.pathname === '/')
    if (!isHomepage) {
      header.classList.remove('header-nav--transparent')
      header.classList.add('header-nav--solid')
      return
    }

    const thresholdEl = document.querySelector('.expertise-section') || document.querySelector('.project-search')
    const threshold = thresholdEl ? (thresholdEl.getBoundingClientRect().bottom + window.scrollY) : window.innerHeight * 0.8
    const solid = window.scrollY > threshold
    header.classList.toggle('header-nav--transparent', !solid)
    header.classList.toggle('header-nav--solid', solid)
  }
  update()
  window.removeEventListener('scroll', window.__headerScrollHandler || (()=>{}))
  window.__headerScrollHandler = () => update()
  window.addEventListener('scroll', window.__headerScrollHandler, { passive: true })

  // Workaround: ensure 404 page heavy image doesn't block initial render in dev proxy
  try {
    const notFoundImg = document.querySelector('img[alt="Page not found"]')
    if (notFoundImg) {
      notFoundImg.loading = 'lazy'
      notFoundImg.decoding = 'async'
    }
  } catch {}
}
