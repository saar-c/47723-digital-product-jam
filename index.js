html_tag_list = document.getElementById("html_tag_list")
hide_html_tag_list_button = document.getElementById("hide_html_tag_list_button");

function hide_element(id){
  document.getElementById(id).style.visibility = "hidden";
}

hide_html_tag_list_button.addEventListener("click", hide_element(html_tag_list));
