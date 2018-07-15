import { df } from '../'
import { click } from '../click'
import { first } from '../first-last'
import { createElementFromHTML } from '../html'

let element: Node

beforeAll(() => {
  element = createElementFromHTML('<div id="first" class="test"></div>')
  document.body.appendChild(element)
})

it('should execute the callback function on one element', () => {
  const mockFn = jest.fn()
  click(df('#first'), mockFn)
  ;(first(df('#first')) as HTMLElement).click()
  expect(mockFn).toBeCalled()
})
