// helloWorld function 

const helloWorld = () => 'Hello, World!'

const sayHello = function(name){

    if(name === false || name == true) {
        return ('Hello, World!');
    }else if(name === null){
        return('not accepted');
    }
    return(`Hello, ${name}!`);
}

const isFive = (number) => number == 5
// alert(sayHello(false));
const isEven = number => (number % 2 === 0 && number !== true && number != false) ? true : false;

const isVowel = function(character){

    if(typeof character === 'string'){
        if(['a','e','i','o','u'].includes(character.toLowerCase())){
            return true;
        }
    }
    return false
}

const add = function(valueOne, valueTwo){
    return(Number(valueOne) + Number(valueTwo))
}

