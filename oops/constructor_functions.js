function Person(fn, ln ) {
    this.first_name = fn;
    this.last_name = ln; 

    this.getFullName = function(){
        return this.first_name+ ' '+ this.last_name;
    }
}

//

let rupesh = new Person('Rupesh', 'Patel');
let yash = new Person('Yash','Patel');

console.log(rupesh.getFullName());
console.log(yash);