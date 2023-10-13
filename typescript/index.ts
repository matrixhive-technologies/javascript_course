

type car =  {
    number_of_typers:number
    brand?:string
      
}
let myCar:car ;
myCar = {
    number_of_typers:4, 
    brand: 'Maruti',

}
class Person {
    first_name;
    last_name;
    age:number;
    constructor(fn:string,ln:string,age:number){
        this.first_name = fn;
        this.last_name = ln;
        this.age = age;
    }

    getFullName = () => {
        return this.first_name+ ' '+this.last_name;
    }
}

let rupesh:Person = new Person('Rupesh','Patel',35);

console.log(rupesh);