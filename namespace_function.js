function namespace(ns) {
  //namespaceを[.]区切りで作成
  var names = ns.split('.');
  var parent = window;

  for (var i = 0, len = names.length; i < len; i++ ) {
    parent[names[i]] = parent[names[i]] || {};
  }
}
