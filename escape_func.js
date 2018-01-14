//書いてる時間ない、本格入門の215ページのやつを後から写経する

function escapeHtml(str) {
  if (!str) { return ''; }
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt');
}
