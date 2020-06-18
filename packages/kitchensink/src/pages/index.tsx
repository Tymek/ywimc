import { FunctionComponent, ReactElement } from 'react'

export type CountType = {
  count: number
}

const Count: FunctionComponent<CountType> = ({ count }) => (
  <h1>Hello World! {count}</h1>
)

export default ():ReactElement => <Count count={1} />;
