function switchLang(lang) {
  let path = window.location.pathname;
  
  // Gère la racine GitHub Pages (redirigée vers /index.html)
  if (path === '/' || path === '/index.html') {
    path = '/index.html';
  }
  
  let newPath;
  if (lang === 'fr') {
    // Français : enlève _en
    newPath = path.replace(/_en\.html$/, '.html');
    // Si on était sur index sans suffixe, va vers index.html
    if (path === '/index.html') newPath = '/index.html';
  } else {
    // Anglais : ajoute _en
    newPath = path.replace(/\.html$/, '_en.html');
    // index.html → index_en.html
    if (path === '/index.html') newPath = '/index_en.html';
  }
  
  window.location.href = window.location.origin + newPath;
}
