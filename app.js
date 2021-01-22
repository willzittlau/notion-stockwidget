document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const modes_buttons = document.querySelectorAll(
    ".settings .modes button"
  );

  function updateStyle() {
    const mode = localStorage.getItem("mode") || "light";
    changeMode(mode);
  }
  function changeMode(value) {
    body.className = value;
    localStorage.setItem("mode", value);
    document.getElementById("widgetsettings").setAttribute("width", 500);
  }

  modes_buttons.forEach(function (elem) {
    elem.addEventListener("click", () =>
      changeMode(elem.classList.value)
    );
  });

  updateStyle();
});