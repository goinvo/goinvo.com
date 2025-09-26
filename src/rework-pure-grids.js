const fs = require('fs')
const rework = require('rework')
const pureGrids = require('rework-pure-grids')

let reworkedCss = rework('')
  .use(
    pureGrids.units({
      // These should be in sync with values in client/src/styles/scss/common/variables/_breakpoints.scss
      mediaQueries: {
        sm: 'screen and (min-width: 35.5em)',
        md: 'screen and (min-width: 48em)',
        lg: 'screen and (min-width: 54em)',
        xl: 'screen and (min-width: 80em)',
      },
    })
  )
  .toString()

const paths = {
  reworkedCss: './src/styles/vendor/',
}

if (!fs.existsSync(paths.reworkedCss)) {
  fs.mkdirSync(paths.reworkedCss)
}

fs.writeFileSync(
  `${paths.reworkedCss}pure-grids-responsive-reworked.css`,
  reworkedCss
)
