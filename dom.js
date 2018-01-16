//現在時刻: <span id="result"></span>

var current = new Data();
var result = document.getElementById('result');
result.textContent = current.toLocaleString;

//タグのなまえ h1, h2, aなど
document.getElementByTagName(name);

//name属性からとる
document.getElementsByName(name);

//クラスからとる
document.getElementByClassName(name);

//CSSみたいなセレクター式で要素をとる
document.querySelectorAll(selector);

//これら使って特定の要素を取得した後は、近接するノードはノードウォーキングで取得する
//理由はDOMはHTML全体からいちいち検索してしまうので、ノードウォーキング使って相対で取得する方が軽いため
var list = document.getElementByTagName('h1');
var sons = list.childNodes;

