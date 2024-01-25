//     1. Imprima no console a quantidade de pessoas Total.
//     2. Imprima no console a quantidade de pessoas pessoas do sexo
//     Feminino.
//     3. Imprima no console a soma do salário de todas as pessoas.
//     4. Imprima no console a média do salário de todas as pessoas.
//     5. Imprima no console a soma do salário de todos as pessoas do sexo
//     Masculino
//     6. Imprima no console a média do salário de todas as pessoas do sexo
//     Masculino
//     7. Utilize a função Some, para descobrir se existe algum salário
//     superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
//     contrário falso.
//     8. Utilize a função findIndex, para descobrir a posição da pessoa de
//     nome 'Eva Trindade'.
//     9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
//     sobrenome "Silva".
//     10. Imprima os nomes utilizando o MAP

const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',

        sexo: 'F',
        salario: 3350.25,
    },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.log(`A quantidade de pessoas no total são: ${data.length}`);

// 2. Imprima no console a quantidade de pessoas pessoas do sexoFeminino.
let sexoFemininoFiltrado = data.filter(sexo => sexo.sexo === 'F');
console.log(`\nExistem ${sexoFemininoFiltrado.length} pessoas do sexo Feminino`);

// 3. Imprima no console a soma do salário de todas as pessoas.
let somaSalario = data.reduce((acc, salario) => acc + salario.salario, 0);
console.log(`\nA soma do salário de todas as pessoas é: R$${somaSalario.toFixed(2)}`);

// 4. Imprima no console a média do salário de todas as pessoas.
let mediaSalario = somaSalario / data.length
console.log(`\nA media do salario de todas as pessoas é: R$${mediaSalario.toFixed(2)}`);

// 5. Imprima no console a soma do salário de todos as pessoas do sexoMasculino
let sexoMasculinoFiltrado = data.filter(sexo => sexo.sexo === 'M');
let somaSalarioM = sexoMasculinoFiltrado.reduce((acc, salario) => acc + salario.salario, 0);
console.log(`\nA soma da media do salário de todas as pessoas do Sexo Masculino é: R$${somaSalarioM.toFixed(2)}`);

// 6. Imprima no console a média do salário de todas as pessoas do sexoMasculino
let mediaSalarioM = somaSalarioM / sexoMasculinoFiltrado.length;
console.log(`\nA média do salário de todas as pessoas do sexo Masculino é: R$${mediaSalarioM.toFixed(2)}`);

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
let maiorQue7000 = data.some(pessoa => pessoa.salario > 7000);
console.log(`\nExistem salario superior a R$7000? ${maiorQue7000}`);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade' .
let evaTrindade = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade');
console.log(`\nA posição da pessoa com nome Eva Trindade é ${evaTrindade}`);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
let silvaFiltrada = data.filter(pessoa => pessoa.nome.includes('Silva'));
console.log('\nTodas as pessoas com sobrenome Silva:')
let nomes = `Nomes: `;
silvaFiltrada.forEach(pessoa => nomes += `${pessoa.nome}, `);
console.log(nomes);

// 10. Imprima os nomes utilizando o MAP
console.log('\nImprimindo os nomes: ');
data.map(pessoa => console.log(`Nome: ${pessoa.nome}`));
