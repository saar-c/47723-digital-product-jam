function hide_show_element(id) {
  element = document.getElementById(id);
  if (element.style.display === "none") {
    element.style.display = "block";
  }
  else {
    element.style.display = "none";
  }
}

function change_background_color(color) {
  document.body.style.background = color;
}

function change_text_color(color) {
  document.body.style.color = color;
}

document.getElementById("hide_html_tag_list_button").addEventListener(
  "click", function() { hide_show_element("html_tag_list") }
);

document.getElementById("bg_color_change_button").addEventListener(
  "click", function() { change_background_color("white") }
);

document.getElementById("text_color_change_button").addEventListener(
  "click", function() { change_text_color("black") }
);