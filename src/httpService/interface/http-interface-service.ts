export default interface IHttpService {
  save (obj?: any): Promise<any>
  get (id: string): Promise<any>
}
