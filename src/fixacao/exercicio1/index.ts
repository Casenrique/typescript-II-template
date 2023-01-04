/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum RAINBOWCOLORS {
  RED = "vermelha",
  ORANGE = "laranja",
  YELLOW = "amarela",
  GREEN = "verde",
  BLUE = "azul",
  DARKBLUE = "azul escuro",
  VIOLET = "violeta"
}

type TPerson = {
  name: string,
  age: number,
  favoriteColor: RAINBOWCOLORS
}

const personOne: TPerson = {
  name: "Thor",
  age: 34,
  favoriteColor: RAINBOWCOLORS.ORANGE
} 
const personTwo: TPerson = {
  name: "Viúva Negra",
  age: 27,
  favoriteColor: RAINBOWCOLORS.DARKBLUE
} 
const personThree: TPerson = {
  name: "Homem Aranha",
  age: 16,
  favoriteColor: RAINBOWCOLORS.RED
} 

