import { AxiosImplementation } from '@/httpService/http/axios-implementation'
import { User, UserTDO } from '@/models/user'
import IHttpService from '@/httpService/interface/http-interface-service'

export class UserService extends AxiosImplementation<UserTDO, User> implements IHttpService {


  constructor() {
    super('https://jsonplaceholder.typicode.com/');
  }

  protected encode(u: User): UserTDO {
    return Object.assign({}, u )
  }

  protected decode(t: UserTDO): User {
    return {...t}
  }

  save(obj?: any): Promise<any> {
    return new Promise<any>(resolve => {
      resolve()
    })
  }

  get(id: string): Promise<any> {
    let methodUrl: string = 'users/'.concat(id)
    return this.getHttp({},methodUrl)
  }
}
