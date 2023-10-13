// Class Declaration 
class Person {
    
    constructor(fn,ln){
        this.first_name = fn;
        this.last_name = ln;
    }

    getFullName = () => {
        return this.first_name+ ' '+this.last_name;
    }
}


let rupesh = new Person('Rupesh', 'Patel');
let yash = new Person('Yash','Patel');

console.log(rupesh.getFullName());
console.log(yash);


// class expressions 
/*const Person1 = class Person {
    constructor(fn,ln){
        this.first_name = fn;
        this.last_name = ln;
    }

    getFullName = ()=>{
        return this.first_name+ ' '+this.last_name;
    }
}

const Person2 = Person1;

let rupesh1 = new Person2('Rupesh', 'Patel');
let yash1 = new Person2('Yash','Patel');

console.log(rupesh1.getFullName());
console.log(yash1);*/

module.exports = {
    Person: Person
}