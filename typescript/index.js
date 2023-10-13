var myCar;
myCar = {
    number_of_typers: 4,
    brand: 'Maruti',
};
var Person = /** @class */ (function () {
    function Person(fn, ln, age) {
        var _this = this;
        this.getFullName = function () {
            return _this.first_name + ' ' + _this.last_name;
        };
        this.first_name = fn;
        this.last_name = ln;
        this.age = age;
    }
    return Person;
}());
var rupesh = new Person('Rupesh', 'Patel', 35);
console.log(rupesh);
