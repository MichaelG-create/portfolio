/**
 * Function to switch the site's language in the SPA structure.
 * This function handles the language attribute change and triggers
 * the reloading of the header/sidebar components and the main content.
 * * NOTE: This function relies on:
 * - initializeComponents (from inject_components.js) to reload the Header/Sidebar.
 * - loadContent (from router.js) to reload the main view.
 */
function switchLang(newLang) {
    // 1. Update the document language attribute (Crucial for router and component injector)
    document.documentElement.lang = newLang;

    // 2. Update the URL hash to reflect the new language/path, if necessary.
    // In our case, we don't change the hash (#home remains #home), only the content.

    // 3. Re-load the static components (Header/Sidebar) with the new language version
    if (typeof initializeComponents === 'function') {
        initializeComponents();
    } else {
        console.error("initializeComponents not found. Cannot reload static components.");
    }

    // 4. Re-load the dynamic content with the new language version
    if (typeof loadContent === 'function') {
        loadContent();
    } else {
        console.error("loadContent not found. Cannot reload main content.");
    }
    
    // We prevent the default link behavior by returning false in the HTML onclick.
}