function change(id) {
    var btn = document.getElementById(id);
    if (btn.value == "more") {
        btn.value = "less";
        btn.innerHTML = "- less";
    } else {
        btn.value = "more";
        btn.innerHTML = "+ more";
    }
}