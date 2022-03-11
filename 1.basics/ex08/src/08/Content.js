import React, {Fragment} from 'react'
import Clock01 from './Clock01'
import Clock02 from './Clock'

function content() {
  return (
    <Fragment>
      <p>{`Dynamic HTML Rendering`}</p>
      <Clock01 />
      <Clock02 />
    </Fragment>
  );
}

export default content