import config from '../config.js'
import features from './data/features.json'
import caseStudiesOrder from './data/case-study-order.json'

export function mediaUrl(path) {
  return `${config.cloudfrontUrl}${path}`
}

export function formatDate(date) {
  date = new Date(date)

  const day = date.toLocaleString('en-us', { day: '2-digit' })
  const month = date.toLocaleString('en-us', { month: 'short' })
  const year = date.toLocaleString('en-us', { year: '2-digit' })

  return `${day}.${month}.${year}`
}

export function extractCaseStudyDataFromQuery(data) {
  return data.allMdx.nodes.map(node => {
    return {
      slug: node.parent.name,
      ...node.frontmatter,
    }
  })
}

export function findCaseStudyById(data, id) {
  return data.allMdx.nodes.find(node => {
    return node.id === id
  })
}

export function extractWorkItemLinkDetails(item) {
  const link = item.slug ? `/work/${item.slug}` : item.link
  const externalLink = item.slug
    ? false
    : item.link.includes('/vision/')
      ? false
      : true
  const suppressNewTab = item.external ? false : true

  return {
    link,
    externalLink,
    suppressNewTab,
  }
}

export function getSortedWorkItems(caseStudies, selectedCategoryId = "all", filterFeatures = true) {
  const categoryOrder = caseStudiesOrder[selectedCategoryId] || [];
  console.log('Category Order:', categoryOrder);

  // Extract case studies
  const caseStudyItems = caseStudies.allMdx.nodes.map(node => ({
    slug: node.parent.name,
    ...node.frontmatter,
  }));

  // Filter features if needed
  let featuresToDisplay = features;
  if (filterFeatures) {
    featuresToDisplay = features.filter(feature => !feature.hiddenWorkPage);
  }

  // Combine case studies and features
  const combinedItems = caseStudyItems.concat(featuresToDisplay);

  // Filter items based on the selected category (if not "all")
  const filteredItems =
    selectedCategoryId === "all"
      ? combinedItems
      : combinedItems.filter(item =>
          item.categories && item.categories.includes(selectedCategoryId)
        );

  // Sort items based on the category order
  return filteredItems.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.slug || a.id);
    const indexB = categoryOrder.indexOf(b.slug || b.id);

    // Items not in the order list will appear at the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });
}

export function debounce(func, wait, immediate) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
