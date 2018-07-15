export function siblings(element: Node) {
  const nextSiblings: Node[] = []
  const previousSiblings: Node[] = []

  const pushToArray = (el: Node, direction: -1 | 1) => {
    if (direction === -1 && el.previousSibling) {
      previousSiblings.push(el.previousSibling)
      pushToArray(el.previousSibling, -1)
    }

    if (direction === 1 && el.nextSibling) {
      nextSiblings.push(el.nextSibling)
      pushToArray(el.nextSibling, 1)
    }
  }

  if (element.previousSibling) {
    pushToArray(element, -1)
  }

  if (element.nextSibling) {
    pushToArray(element, 1)
  }

  return [...previousSiblings.reverse(), ...nextSiblings]
}
