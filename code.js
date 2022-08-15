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