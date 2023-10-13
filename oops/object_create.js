const Person = {
    first_name : "Rupesh",
    last_name : "Patel",
    initialize: function(first_name,last_name){
        this.first_name = first_name,
        this.last_name = last_name;
        return this;
    },  
    getFullName: function(){
        return this.first_name+ ' '+this.last_name;
    }
}

let rupesh = Object.create(Person);

console.log(rupesh.getFullName());

let yash = Object.create(Person).initialize("Yash", "Patel");

console.log(yash);