/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//1.1

// export type TPerson = {
//   id: string,
//   name: string,
//   email: string,
//   password: string,
//   role: "Admin" | "Normal"
// }

// const userOne:TPerson = {
//   id: "01",
//   name: "Carlos",
//   email: "carlos@gmail.com",
//   password: "12345",
//   role: "Normal"
// }

// const userTwo:TPerson = {
//   id: "02",
//   name: "Henrique",
//   email: "henrique@gmail.com",
//   password: "@12345",
//   role: "Admin"
// }

// console.table(userOne)
// console.table(userTwo)
// console.table([userOne, userTwo])

//1.2

export type TAdminAccount = {
  account: string | number,
  permission: boolean
}

export type TNormalAccount = {
  account: string | number,
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 


export enum ROLE {
 ADMIN = "Admin",
 NORMAL = "Normal"
}

export type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: ROLE
}

const userOne:TPerson = {
  id: "01",
  name: "Carlos",
  email: "carlos@gmail.com",
  password: "12345",
  role: ROLE.NORMAL
}

const userTwo:TPerson = {
  id: "02",
  name: "Henrique",
  email: "henrique@gmail.com",
  password: "@12345",
  role: ROLE.ADMIN
}

//2.2

type TAdminUser = TPerson & TAdminAccount

const userThree: TAdminUser = {
  id: "03",
  name: "Adão Negro",
  email: "adaonegro@gmail.com",
  password: "@12345!",
  role: ROLE.ADMIN,
  account: "admin1",
  permission: true
}

type TNormalUser = TPerson & TNormalAccount

const userFour: TNormalUser = {
  id: "04",
  name: "Gavião Arqueiro",
  email: "gaviao_arqueiro@gmail.com",
  password: "@12345!",
  role: ROLE.NORMAL,
  account: "normal1",
  permission: false
}

console.table(userThree)
console.table(userFour)
console.table([userThree, userFour])

//2.3

const arrayUsers: TAdminUser[] | TNormalUser[] = []

arrayUsers.push(userThree)
arrayUsers.push(userFour)
