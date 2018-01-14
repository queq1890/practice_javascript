var Animal = function() {};

Animal.prototype = {
  walk: function() {
    console.log('トコトコ...');
  }
};

var SuperAnimal = function() {};
SuperAnimal.prototype = {
  walk: function() {
    console.log('ドドドドドドド');
  }
};

var Dog = function () {
  Animal.call(this);
};

Dog.prototype = new Animal();
var d1 = new Dog();
d1.walk();//トコトコ...

Dog.prototype = new SuperAnimal();
var d2 = new Dog();
d2.walk();//ドドドドドドドド
d1.walk();//トコトコ...
