export interface UserTDO {
  id: string,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object
}

export interface User extends UserTDO{

}
