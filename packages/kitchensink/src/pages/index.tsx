import { FunctionComponent, useState } from 'react'

export type CountType = {
  count: number
}

const Count: FunctionComponent<CountType> = ({ count }) => (
  <p>{count ? `Count: ${count}` : ''}</p>
)

const IndexPage: FunctionComponent = () => {
  const [count, setCount] = useState(0)

  const add = () => setCount(count + 1)

  return (
    <>
      <h1>Hello World!</h1>
      <Count count={count} />
      <button type="button" onClick={add}>
        Add +1
      </button>
    </>
  )
}

export default IndexPage
