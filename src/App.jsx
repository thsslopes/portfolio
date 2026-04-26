import Portfolio from './Portfolio2'
import MobilePortfolio from './MobilePortfolio'

const params    = new URLSearchParams(window.location.search)
const ua        = navigator.userAgent || ''
const isPhone   = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
                  && !/iPad|Tablet/i.test(ua)
                  && window.innerWidth < 1024

// ?mobile  → force mobile  (useful for testing on desktop)
// ?desktop → force desktop (useful if a phone user wants the full version)
const isMobileView = params.has('mobile') || (isPhone && !params.has('desktop'))

function App() {
  return isMobileView ? <MobilePortfolio /> : <Portfolio />
}

export default App
