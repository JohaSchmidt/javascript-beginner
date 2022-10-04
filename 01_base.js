// Variablen
var name = 'Johannes' // lieber nicht benutzen

const firstName = 'Johannes';
var lastname = 'Schmidt'; //string
//let age = 26; //number
const istprogrammer = true; //boolean

// Мутирование
//console.log('Vorname des Menschens: '+ firstName + ', er ist: '+ age + ' Jahre alt')
//alert('Vorname des Menschens: '+ firstName + ', er ist: '+ age + ' Jahre alt')
//lastname = prompt('Nachname')
//alert(firstName +  ' ' + lastname);

const currentYear = 2022;
const birthYear = 1980;
const age = currentYear - birthYear;
console.log(age);

function calculateAge(Year){
    return currentYear - Year
}
console.log(calculateAge(1982))
