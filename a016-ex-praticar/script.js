const filmes = [
    {
        titulo: 'O Auto da Compadecida',
        ano: 2000,
        diretor: 'Guel Arraes',
        elenco: [
            'Selton Mello',
            'Mateus Nachtergaele',
            'Marco Nanini',
            'Fernanda Montenegro',
        ],
    },
    {
        titulo: 'Carandiru',
        ano: 2001,
        diretor: 'Hector Babenco',
        elenco: [
            'Wagner Moura',
            'José Carlos Vasconcelos',
            'Ailton Graça',
            'Caio Blat',
        ],
    },
    {
        titulo: 'Aquarius',
        ano: 2012,
        diretor: 'Kléber Mendonça Filho',
        elenco: [
            'Sônia Braga',
            'Humberto Carrão',
            'Maeve Jinkings',
            'Bárbara Colen',
        ],
    },
]


console.log("\nFORMA 1")
// só com in que fica os nome grudado teria que alterar no array elenco um espaço na frente

for (let i in filmes) {
    console.log(`\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}, tem no elenco: ${filmes[i].elenco}`);
}

console.log("\nFORMA 2")
// dois for in fica umm embaixo do outro

for (let i in filmes) {
    console.log(`\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}, tem no elenco:`);
    for (let j in filmes[i].elenco) {
        console.log(`${filmes[i].elenco[j]}`);
    }
}

console.log("\nFORMA 3")
// for in e for of mas ainda fica um embaixo do outro

for (let i in filmes) {
    console.log(`\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}, tem no elenco:`);
    for (let j of filmes[i].elenco) {
        console.log(`${j}`);
    }
}

console.log("\nFORMA 4")
// for in e for of criando uma variavel string mas ainda com o bug da virgula

for (let i in filmes) {
    let string

    string = (`\n${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}, tem no elenco:`);

    for (let j of filmes[i].elenco) {
        string += ` ${j},`
    }

    console.log(string);
}