import config from '../config.js'
import features from './data/features.json'
import caseStudiesOrder from './data/case-study-order.json'

export function mediaUrl(path) {
  return `${config.cloudfrontUrl}${path}`
}

export function formatDate(date) {
  date = new Date(date);

  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const month = date.toLocaleString("en-us", { month: "short" });
  const year = date.toLocaleString("en-us", { year: "2-digit" });

  return `${day}.${month}.${year}`;
}

export function extractCaseStudyDataFromQuery(data) {
  return data.allMdx.edges.map(edge => {
    return {
      slug: edge.node.parent.name,
      ...edge.node.frontmatter
    };
  });
}

export function extractWorkItemLinkDetails(item) {
  const link = item.slug ? `/work/${item.slug}` : item.link;
  const externalLink = item.slug ? false : item.link.includes('/vision/') ? false : true;
  const suppressNewTab = item.external ? false : true;

  return {
    link,
    externalLink,
    suppressNewTab
  }
}

export function concatCaseStudiesAndFeatures(caseStudies, filterFeatures = true) {
  let featuresToDisplay = features;

  if (filterFeatures) {
    featuresToDisplay = features.filter(feature => !feature.hiddenWorkPage);
  }

  return extractCaseStudyDataFromQuery(caseStudies).concat(featuresToDisplay).sort((a, b) => {
    return caseStudiesOrder.indexOf(a.slug || a.id) > caseStudiesOrder.indexOf(b.slug || b.id) ? 1 : -1;
  })
}
