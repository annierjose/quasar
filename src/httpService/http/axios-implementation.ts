import axios, { AxiosPromise } from 'axios'

export abstract class AxiosImplementation<T, S> {

  baseUrl: string = ''

  constructor (url: string) {
    this.baseUrl = url
  }

  getHttp (params: object, methodsUrl?: string, headers?: object): AxiosPromise<T> {
    let url: string = this.baseUrl
    if (methodsUrl) url = url.concat(methodsUrl)
    return axios.get(url, {params: params}).then((value: any) => {
      return this.encode(value)
    }).catch((reason: any) => {
      return reason
    })
  }

  protected abstract encode (s: S): T
  protected abstract decode (t: T): S

}
