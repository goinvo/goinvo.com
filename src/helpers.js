import config from '../config.js'

export function imageUrl(path) {
  return `${config.cloudfrontUrl}${path}`
}
