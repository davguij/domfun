export function createElementFromHTML(html: string) {
  const div = document.createElement('div')
  div.innerHTML = html.trim()

  return div.firstChild as Node
}

export { createElementFromHTML as html }
