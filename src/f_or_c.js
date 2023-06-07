export function farenOrCel() {
  if (document.querySelector(".f-or-c").textContent === "Display Celsius") {
    document.querySelector(".f-or-c").textContent = "Display Farenheight";
  } else {
    document.querySelector(".f-or-c").textContent = "Display Celsius";
  }
}
