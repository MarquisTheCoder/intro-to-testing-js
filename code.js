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

alert(sayHello(false));