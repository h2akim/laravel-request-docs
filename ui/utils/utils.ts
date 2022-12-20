import { RequestIntent } from "./constants"

export function getAPIInfoId(info?: IAPIInfo) {
  return info ? `${info.httpMethod}-${info.uri}`: ""
}

export function getLocalStorageKey(api: IAPIInfo, intent: RequestIntent) {
  return `__lrd_${api.httpMethod}_${api.uri}_${intent}`
}

export function getLocalStorageJSONData(key: string) {
  const localStorageData = localStorage.getItem(key)
  if (localStorageData) {
    return JSON.parse(localStorageData)
  }
  return undefined
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}