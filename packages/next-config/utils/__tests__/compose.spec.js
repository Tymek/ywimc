const compose = require('../compose')

describe('compose', () => {
  test('it should work with single function', () => {
    const f = jest.fn(x => `f(${x})`)

    expect(compose(f)('x')).toEqual(f('x'))
    expect(f).toHaveBeenCalledTimes(2)
  })

  test('it should fold functions', () => {
    const f = x => `f(${x})`
    const g = x => `g(${x})`
    const h = x => `h(${x})`

    expect(compose(f, g)('x')).toEqual('f(g(x))')
    expect(compose(f, g, h)('x')).toEqual('f(g(h(x)))')
  })
})
