import header from "./components/header.js";
import footer from "./components/footer.js";
import counterSection from "./components/home-page/counterSection.js";
import whoWeAreSection from "./components/home-page/whoWeAreSection.js";
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("header-placeholder");
    if (headerContainer) {
        headerContainer.innerHTML = header();
    }
    const footerContainer = document.getElementById("footer-placeholder");
    if (footerContainer) {
        footerContainer.innerHTML = footer();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const counterSectionContainer = document.getElementById("counter-section-placeholder");
    if (counterSectionContainer) {
        counterSectionContainer.innerHTML = counterSection();
    }
    const whoWeAreSectionContainer = document.getElementById("who-we-are-section-placeholder");
    if (whoWeAreSectionContainer) {
        whoWeAreSectionContainer.innerHTML = whoWeAreSection();
    }
});
