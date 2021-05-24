// NOTE: These are CSS derived variables, needed for JS crossover.
// For things to behave as expected, the numbers should match the variables
// in the SCSS files:
// - styles/variables/_typography.scss (baseFontSize)
// - styles/variables/_breakpoints.scss (mediaQueries)
// - styles/_layout.scss (maxWidth)
// TODO: Is there some fancy way we can share these without duplicating?
const baseFontSize = 16
const mediaQueries = {
  sm: '35.5em',
  md: '48em',
  lg: '54em',
  xl: '80em',
}
const maxWidth = {
  default: 1020,
  sm: 600,
  md: 775,
}

export default {
  cloudfrontUrl: 'https://dd17w042cevyt.cloudfront.net',
  hubspotContactFormId: '888955e3-1618-46d8-b553-c06a855723be',
  hubspotNewsletterFormId: '7bb39794-e6f9-4c94-9b26-e7de3a81f716',
  hubspotNewsletterFullFormId: '42f0daf8-2815-4436-9f44-8e70fd91bd7a',
  hubspotApplicationFormId: '953741a9-2774-4205-9b72-16f551c1139d',
  hubspotBlogFeedUrl: 'https://yes.goinvo.com/articles/rss.xml',
  rssToJsonServiceUrl: 'https://api.rss2json.com/v1/api.json?rss_url=',
  baseFontSize,
  mediaQueries,
  maxWidth,
  sizes: {
    full: ['100vw'],
    fullToHalfAtLarge: [`(min-width: ${mediaQueries.lg}) 50vw`, '100vw'],
    fullToThirdAtLarge: [`(min-width: ${mediaQueries.lg}) 50vw`, '100vw'],
    fullInsideMediumMaxWidth: [
      `(min-width: ${maxWidth.md}) ${maxWidth.md}`,
      '100vw',
    ],
    fullToHalfAtLargeInsideMediumMaxWidth: [
      `(min-width: ${maxWidth.md}px) ${parseInt(maxWidth.md / 2, 10)}px`,
      `(min-width: ${mediaQueries.lg}) 50vw`,
      '100vw',
    ],
    fullToThirdAtLargeInsideMediumMaxWidth: [
      `(min-width: ${maxWidth.md}px) ${parseInt(maxWidth.md / 3, 10)}px`,
      `(min-width: ${mediaQueries.lg}) 33vw`,
      '100vw',
    ],
    fullToHalfAtMediumInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default / 2,
        10
      )}px`,
      `(min-width: ${mediaQueries.md}) 50vw`,
      '100vw',
    ],
    fullToHalfAtLargeInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default / 2,
        10
      )}px`,
      `(min-width: ${mediaQueries.lg}) 50vw`,
      '100vw',
    ],
    fullToTwoThirdsAtLargeInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default * 0.66,
        10
      )}px`,
      `(min-width: ${mediaQueries.lg}) 66vw`,
      '100vw',
    ],
    fullToThirdAtLargeInsideMaxWidth: [
      `(min-width: ${maxWidth.default}px) ${parseInt(
        maxWidth.default / 3,
        10
      )}px`,
      `(min-width: ${mediaQueries.lg}) 33vw`,
      '100vw',
    ],
  },
}
