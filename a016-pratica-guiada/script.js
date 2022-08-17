// const filmes = [
//   {
//     titulo: 'O Auto da Compadecida',
//     ano: 2000,
//     diretor: 'Guel Arraes',
//     elenco: [
//       'Selton Mello',
//       'Mateus Nachtergaele',
//       'Marco Nanini',
//       'Fernanda Montenegro',
//     ],
//   },
//   {
//     titulo: 'Carandiru',
//     ano: 2001,
//     diretor: 'Hector Babenco',
//     elenco: [
//       'Wagner Moura',
//       'José Carlos Vasconcelos',
//       'Ailton Graça',
//       'Caio Blat',
//     ],
//   },
//   {
//     titulo: 'Aquarius',
//     ano: 2012,
//     diretor: 'Kléber Mendonça Filho',
//     elenco: [
//       'Sônia Braga',
//       'Humberto Carrão',
//       'Maeve Jinkings',
//       'Bárbara Colen',
//     ],
//   },
// ]

// // escreva seu código abaixo 👇🏻

const megaSena = [
  [1, 2, 3, 4, 5, 6],
  [11, 22, 33, 44, 55, 66],
  [10, 20, 30, 40, 50, 61],
  [12, 23, 34, 45, 56, 67]
]

//O QUE NÃO DEU CERTO
// if (megaSena.length === 4) {
//   for (let i = 0; i < megaSena.length; i++) {
//     for (let j = 0; j < megaSena[i].length; j++) 
//     {  
//     }
//     console.log(megaSena[i][j]);
//   }
// } else {
//     console.log("blabla");
// }

//SEM FOR IN E SEM FOR OF
// if (megaSena.length === 4) {
//   for (let i = 0; i < megaSena.length; i++) {
//     let sorteio = `sorteio ${i + 1}: `
//     for (let j = 0; j < megaSena[i].length; j++) {
//       sorteio += `${megaSena[i][j]} `
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("blabla");
// }

// SÓ COM FOR IN
// if (megaSena.length === 4) {
//   for (let i in megaSena) {
//     let sorteio = `sorteio ${Number(i) + 1}: `
//     for (let j = 0; j < megaSena[i].length; j++) {
//       sorteio += `${megaSena[i][j]} `
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("blabla");
// }

// FOR IN E FOR OF
if (megaSena.length === 4) {
  for (let i in megaSena) {
    let sorteio = `sorteio ${Number(i) + 1}: `
    for (let j of megaSena[i]) {
      sorteio += `${j} `
    }
    console.log(sorteio);
  }
} else {
  console.log("blabla");
}