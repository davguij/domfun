function domfun(selector: string) {
  return Array.from(document.querySelectorAll(selector))
}

export { domfun as df }
