export function sldComLanguage(name) {
  return name
}

export function getToken() {
  const token = window.localStorage.getItem('sld_token')
  return token ?? ''
}
