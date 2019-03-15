import qs from "qs"

export function base64EncodeUnicode(str: string) {
  const replacer = (_: any, p1: any) => String.fromCharCode(Number(`0x${p1}`))
  const encoded = encodeURIComponent(str) // use encodeURIComponent to get percent-encoded UTF-8
    .replace(/%([0-9A-F]{2})/g, replacer) // convert the percent encodings into raw bytes
  return btoa(encoded)
}

export function base64DecodeUnicode(str: string) {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(
    atob(str)
      .split("")
      .map((c: any) => "%" + `00${c.charCodeAt(0).toString(16)}`.slice(-2)) // eslint-disable-line prefer-template
      .join(""),
  )
}

export function appendRequestId(requestId: any) {
  const queryParams = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  queryParams.requestId = requestId
  const queryString = qs.stringify(queryParams, { addQueryPrefix: true })
  history.pushState("", document.title, `${window.location.pathname}${queryString}`)
}

export function removeRequestId() {
  const { requestId, ...queryParams } = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  let queryString = ""
  if (Object.getOwnPropertyNames(queryParams).length) {
    queryString = qs.stringify(queryParams, { addQueryPrefix: true })
  }
  history.pushState("", document.title, `${window.location.pathname}${queryString}`)
}

export function removeHash() {
  history.pushState("", document.title, window.location.pathname + window.location.search)
}
