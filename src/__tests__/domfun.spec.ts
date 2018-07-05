import { df } from '../domfun'

describe('dm', () => {
  it('should echo the selector', () => {
    const el = df('body').echo()
    expect(el).toBe(document.body)
  })
})
