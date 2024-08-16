import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector(".menu");
  const eventos = ["click", "touchend"];

  // teste

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    eventos.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    );
  }
}
