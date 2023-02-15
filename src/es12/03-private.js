class User{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}, your age is ${this.age}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const ana = new User("ana",15);
console.log(ana.uAge);
console.log(ana.uAge = 20);
console.log(ana.greeting());
