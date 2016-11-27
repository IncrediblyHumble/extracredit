export class User {
  name:string;
  email:string;
  password:string;
  type:string;
  address:string;
  phone:string;
  ACCOUNT_TYPES = [
    'USER','WORKER','MANAGER','ADMIN'
  ]
}
