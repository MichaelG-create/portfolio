// Fonction asynchrone pour charger et injecter le HTML
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            // Affiche une erreur claire si le fichier n'est pas trouvé
            console.error(`Failed to load component: ${componentPath}. Status: ${response.status}`);
            return;
        }
        const html = await response.text();
        const container = document.getElementById(elementId);
        if (container) {
            // Utiliser outerHTML pour remplacer le div placeholder par l'élément injecté (header ou aside)
            container.outerHTML = html;
        } else {
            console.error(`Container element with ID "${elementId}" not found on the page.`);
        }
    } catch (error) {
        console.error('An error occurred during component loading:', error);
    }
}

// Fonction principale pour charger les composants
function initializeComponents() {
    const isEnglish = document.documentElement.lang === 'en';
    const langSuffix = isEnglish ? '_en' : '';

    // Utiliser le chemin absolu /components/
    loadComponent('header-placeholder', `components/header${langSuffix}.html`); 

    // Utiliser le chemin absolu /components/
    loadComponent('sidebar-placeholder', `components/sidebar${langSuffix}.html`);
}

// Assurez-vous que le DOM est chargé avant d'initialiser les composants
document.addEventListener('DOMContentLoaded', initializeComponents);