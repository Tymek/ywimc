import React, { FunctionComponent } from 'react'

export type CountType = {
  count: number
}

const Count: FunctionComponent<CountType> = ({ count }) => (
  <h1>{count}</h1>
)

export default Count;
