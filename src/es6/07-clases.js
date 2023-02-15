class user{
    //metodos
    greeting(){
        return "Hello";
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting()); 

class User{
    //constructor
    constructor(){
        console.log("nuevo usuario");
    }
    greeting(){
        return "Hello";
    }
}
const david = new User();

//this

class User{
    //constructor
    constructor(name){
        this.name = name;
    }
    speak(){
        return "Hello";
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const juan = new User("Juan");
console.log(juan.greeting());

//setters and getters

class User{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}, your age is ${this.age}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const ana = new User("ana",15);
console.log(ana.uAge);
console.log(ana.uAge = 20);
console.log(ana.greeting());
