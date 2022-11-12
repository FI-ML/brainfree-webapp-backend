export interface User {
  firstName: string,
  lastName: string,
  email: string
}

export const selectId = (entity: User) => entity.email;
