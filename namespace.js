//空のWingsオブジェクトを作って擬似的に名前空間として使う
// Wings || {} とすることによって、WIngsがみ定義の場合にだけ新たな名前空間を作成する

var Wings = Wings || {};

Wings.Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName : function() {
    return this.lastName + this.firstName;
  }
};

var mem = new Wings.Member('太郎', '田中');
console.log(mem.getName());
