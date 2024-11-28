const header = document.getElementById("header");
// Wir holen uns das Element mit der ID "header" und speichern es in der Variable

const title = document.getElementById("title");
// Wir holen uns das Element mit der ID "title" und speichern es in der Variable

const excerpt = document.getElementById("excerpt");
// Wir holen uns das Element mit der ID "excerpt" und speichern es in der Variable

const profile_img = document.getElementById("profile_img");
// Wir holen uns das Element mit der ID "profile_img" und speichern es in der Variable

const names = document.getElementById("name");
// Wir holen uns das Element mit der ID "name" und speichern es in der Variable

const date = document.getElementById("date");
// Wir holen uns das Element mit der ID "date" und speichern es in der Variable

const animated_bgs = document.querySelectorAll(".animated-bg");
// Wir holen uns alle Elemente mit der Klasse "animated-bg" und speichern sie in der Variable

const animated_bg_text = document.querySelectorAll(".animated-bg-text");
// Wir holen uns alle Elemente mit der Klasse "animated-bg-text" und speichern sie in der Variable

setTimeout(getData, 2000);
// Nach 2 Sekunden wird die Funktion getData ausgeführt

function getData() {
  header.innerHTML = '<img src="./Downloads.jpeg" alt="Bild" />';
  // Setzt den inneren HTML-Inhalt von "header" auf ein Bild

  title.innerHTML = "Lorem ipsum dolor sit amet";
  // Setzt den inneren HTML-Inhalt von "title" auf den Text "Lorem ipsum dolor sit amet"

  excerpt.innerHTML = "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet";
  // Setzt den inneren HTML-Inhalt von "excerpt" auf den Text "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet"

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Mensch" />';
  // Setzt den inneren HTML-Inhalt von "profile_img" auf ein Bild

  names.innerHTML = "John Doe";
  // Setzt den inneren HTML-Inhalt von "name" auf "John Doe"

  date.innerHTML = "Okt 08, 2024";
  // Setzt den inneren HTML-Inhalt von "date" auf "Okt 08, 2024"

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  // Geht durch jedes Element in "animated_bgs" und entfernt die Klasse "animated-bg"
  // und SPEICHERT das ergebniss in der temporären Variable "bg"

  animated_bg_text.forEach((bg2) => bg2.classList.remove("animated-bg-text"));
  // Geht durch jedes Element in "animated_bg_text" und entfernt die Klasse "animated-bg-text"
  // und SPEICHERT das ergebniss in der temporären Variable "bg2"

}
