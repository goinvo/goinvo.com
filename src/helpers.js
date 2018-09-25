import config from '../config.js'

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

export function extractCaseStudyDataFromQuery(data)  {
  return data.allMdx.edges.map(edge => {
    return {
      slug: edge.node.parent.name,
      ...edge.node.frontmatter
    };
  });
}

export function findCaseStudyById(id, caseStudies) {
  return caseStudies.find(item => item.slug === id);
}
