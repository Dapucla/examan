export interface Persons {
  id?: number,
  name: string,
  surname: string,
  patronymic: string,
  phone: number,
  email: string,
  birthday: any,
  group: number,
  department: number
}
export enum TypeDepartmen {
  physics,
  biology,
  sports,
  IT
}
