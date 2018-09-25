const maxWidth = 1020;

export default {
  cloudfrontUrl: 'https://dd17w042cevyt.cloudfront.net',
  hubspotContactFormId: "888955e3-1618-46d8-b553-c06a855723be",
  hubspotNewsletterFormId: "7bb39794-e6f9-4c94-9b26-e7de3a81f716",
  hubspotApplicationFormId: "953741a9-2774-4205-9b72-16f551c1139d",
  hubspotBlogFeedUrl: "https://yes.goinvo.com/articles/rss.xml",
  rssToJsonServiceUrl: "https://api.rss2json.com/v1/api.json?rss_url=",
  maxWidth: maxWidth,
  sizes: {
    full: ['100vw'],
    fullToHalfAtLarge: [`(min-width: 54em) 50vw`, '100vw'],
    fullToThirdAtLarge: [`(min-width: 54em) 50vw`, '100vw'],
    fullToHalfAtLargeInsideMaxWidth: [`(min-width: ${maxWidth}px) ${maxWidth / 2}px`, `(min-width: 54em) 50vw`, '100vw'],
    fullToThirdAtLargeInsideMaxWidth: [`(min-width: ${maxWidth}px) ${maxWidth / 3}px`, `(min-width: 54em) 33vw`, '100vw'],
    caseStudy: [`(min-width: 775px) 775px`, '100vw'],
  }
}
