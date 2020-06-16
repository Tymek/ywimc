import React, { FunctionComponent } from 'react'

const Count: FunctionComponent<{
  count: number
}> = (props) => {
  return <h1>{props.count}</h1>
}

export default Count;
