function Person(first_name, last_name){
    return {
        first_name: first_name,
        last_name: last_name,
        getFullName: () => { 
            return first_name+' '+last_name
        }
    }
}

let rupesh =  Person('Rupesh', 'Patel');
let yash =  Person('Yash','Patel');

console.log(rupesh.getFullName());
console.log(yash);