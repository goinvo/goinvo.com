import './src/styles/main.scss'
import wrapWithProvider from './wrap-with-provider'

export const wrapRootElement = wrapWithProvider

// Toggle header style based on scroll (after hero + search sections)
export const onRouteUpdate = () => {
  const header = document.getElementById('header')
  if (!header) return
  const update = () => {
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
}
