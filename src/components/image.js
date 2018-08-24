import React from 'react'

import config from '../../config'

const Image = (props) => (
  <img src={ `${config.cloudfrontUrl}${props.src}`} alt={ props.alt } />
)

export default Image
