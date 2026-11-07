console.log("Skrypt intetia startuje...");

(function () {
  const SELECTOR = '.weather-VideoPlayer-container.weather-sidebar-video-player';

  function removeEl() {
    document.querySelectorAll(SELECTOR).forEach(el => el.remove());
    console.log("usunieto reklame interia");
  }

  // Natychmiastowe usunięcie (jeśli element już istnieje)
  removeEl();

  // Obserwator – łapie elementy dodane później przez JS strony
  const observer = new MutationObserver(() => removeEl());
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();