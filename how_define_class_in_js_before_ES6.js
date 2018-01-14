//変数Memberに対して空の関数リテラルを代入 === クラスを定義(厳密にはコンストラクター)
var Member = function() {};

//インスタンス化
var mem = new Member();

//こんな感じで初期化できる
var Member = function(firstname, lastname) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.getName = function() {
    return this.lastName + ' ' + this.firstName;
  }
};

var mem = new Member('マイケル', 'ジャクソン');

//seal();を使うとオブジェクトを凍結できる
Object.seal(this);
