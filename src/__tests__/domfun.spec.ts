import { createElementFromHTML } from '..'
import { df } from '../domfun'

it('should pass the sanity check', () => {
  expect(true).toBeTruthy()
})

describe('the element selector', () => {
  it('should return an array of elements', () => {
    const firstEl = createElementFromHTML('<div id="first" class="test"></div>')
    const secondEl = createElementFromHTML(
      '<div id="second" class="test"></div>'
    )
    document.body.appendChild(firstEl)
    document.body.appendChild(secondEl)
    // tslint:disable-next-line:no-magic-numbers
    expect(df('.test')).toHaveLength(2)
  })
})
