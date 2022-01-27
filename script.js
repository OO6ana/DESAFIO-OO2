//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let number = 20
console.log(number > 18)
if(number > 18){
    console.log("Você é maior de idade")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano = true
if(humano){
    console.log("Você não é um robô")
}else{
    console.log("Você não é humano")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let mesAniversario = "Janeiro"
if(mesAniversario == "Dezembro" || mesAniversario == "Janeiro"){
    console.log("Parabéns, você faz aniversário em Janeiro ou Dezembro !!")
}else{
    console.log("Que pena, você não faz aniversário em Janeiro ou Dezembro")
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = "Ana Luiza"
if(nome.substring(0,1) == "R"){
    console.log(` ${nome}, seu nome começa com a letra "R" !!!`)
}else{
    console.log(` ${nome}, infelizmente seu nome não começa com a letra "R" :(`)
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

if(nome.length > 6 || nome.substring (0,1) == "E"){
    console.log(`${nome}, o seu nome tem mais de seis (06) letras ou começa com a letra "E" 🥳`)
}else{
    console.log(` ${nome}, o seu nome tem menos do que seis (06) letras ou não começa com a letra "E"`)
}