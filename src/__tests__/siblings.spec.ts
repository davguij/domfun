import { df, first, siblings } from '../'
import { createElementFromHTML } from '../html'

let firstEl: Node
let secondEl: Node
let thirdEl: Node

beforeAll(() => {
  firstEl = createElementFromHTML('<div id="first" class="test"></div>')
  secondEl = createElementFromHTML('<div id="second" class="test"></div>')
  thirdEl = createElementFromHTML('<div id="third" class="test"></div>')
  document.body.appendChild(firstEl)
  document.body.appendChild(secondEl)
  document.body.appendChild(thirdEl)
})

it('should return a list of siblings', () => {
  expect(siblings(first(df('#first')))).toEqual([secondEl, thirdEl])
  expect(siblings(first(df('#second')))).toEqual([firstEl, thirdEl])
  expect(siblings(first(df('#third')))).toEqual([firstEl, secondEl])
})
