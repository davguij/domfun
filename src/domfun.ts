function domfun(selector: string) {
  const el = document.querySelector(selector)
  function echo() {
    return el
  }

  return { echo }
}

export { domfun as df }
