import './src/styles/main.scss'
import wrapWithProvider from './wrap-with-provider'

export const wrapRootElement = wrapWithProvider

// Handle page-specific setup
export const onRouteUpdate = () => {
  // Workaround: ensure 404 page heavy image doesn't block initial render in dev proxy
  try {
    const notFoundImg = document.querySelector('img[alt="Page not found"]')
    if (notFoundImg) {
      notFoundImg.loading = 'lazy'
      notFoundImg.decoding = 'async'
    }
  } catch {}
}
