function switchLang(lang) {
  const currentUrl = window.location.href;
  const filename = currentUrl.split('/').pop(); // Gets 'index.html' or '' or 'projets.html'
  
  let newFilename;

  // Handle root access (folder only) or index.html
  if (filename === '' || filename === 'index.html' || filename === 'index_en.html') {
    newFilename = (lang === 'fr') ? 'index.html' : 'index_en.html';
  } else {
    // For other pages like projets.html <-> projets_en.html
    if (lang === 'fr') {
      // Remove _en if present
      newFilename = filename.replace('_en.html', '.html');
    } else {
      // Add _en if not present
      if (!filename.includes('_en.html')) {
        newFilename = filename.replace('.html', '_en.html');
      } else {
        newFilename = filename; // Already English
      }
    }
  }

  // Construct new URL
  // This replaces the last part of the path with the new filename
  const newUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/')) + '/' + newFilename;
  
  window.location.href = newUrl;
}