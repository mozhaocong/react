export function sldComLanguage(name) {
  return name
}

export function getToken() {
  return window.localStorage.getItem('authorization') || ''
}
