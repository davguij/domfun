import { df, first, last } from '../'
import { createElementFromHTML } from '../html'

let firstEl: Node
let secondEl: Node
let thirdEl: Node

beforeAll(() => {
  firstEl = createElementFromHTML('<div id="first" class="test"></div>')
  secondEl = createElementFromHTML('<div id="second" class="test"></div>')
  thirdEl = createElementFromHTML('<div id="second" class="test"></div>')
  document.body.appendChild(firstEl)
  document.body.appendChild(secondEl)
  document.body.appendChild(thirdEl)
})

it('should return the first element of the node list', () => {
  expect(first(df('.test'))).toBe(firstEl)
})

it('should return the last element of the node list', () => {
  expect(last(df('.test'))).toBe(thirdEl)
})
