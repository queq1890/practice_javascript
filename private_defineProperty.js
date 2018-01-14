function Triangle() {
//プライベートプロパティの定義
  var _base;
  var _height;

  Object.defineProperty(
    this,
    'base',
    {
      get: function() {
        return _base;
      },
      set: function(base) {
        if (typeof base === 'number' && base > 0 ) {
          _base = base;
        }
      }
    }
  };

  Object.defineProperty(
    this,
    'height',
    {
      get: function() {
        return _height;
      },
      set: function(base) {
        if (typeof height === 'number' && height > 0 ) {
          _height = height;
        }
      }
    }
  };
}


//プライベートメンバーにアクセスしない普通のメソッドを定義
Triangle.prototype.getArea = function() {
  return this.base * this.height / 2;
}

var t = new Triangle();
t.base = 10;
t.height = 2;

console.log('三角形の底辺' + t.base);
console.log('三角形の高さ' + t.height);
console.log('三角形の面積' + t.getArea);