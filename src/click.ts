export function click(elementList: Node[], callback: () => void) {
  document.addEventListener('click', (ev: Event) => {
    if (ev && elementList.includes(ev.target as Node)) {
      callback()
    }
  })

  return elementList
}
