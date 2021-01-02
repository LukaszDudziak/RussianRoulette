export const HIDDEN_CLASS = "hidden";
export const HIDDEN_MODE = false;
export const VISIBLE_MODE = true;

//class created to handle standard actions as: binding elements form DOM and changing visibility class
export class Common {
  constructor(elementId) {
    this.element = this.bindToElement(elementId);
  }

  //binding elements from DOM
  bindToElement(elementId) {
    const element = document.getElementById(elementId);
    return element;
  }

  //changing visibility based on element(active screen) and selected display mode (visible/hidden)
  changeVisibilityScreen(element, mode) {
    mode === VISIBLE_MODE
      ? element.classList.remove(HIDDEN_CLASS)
      : element.classList.add(HIDDEN_CLASS);
  }
}
