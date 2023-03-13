var springHeader = document.getElementsByClassName("season-btn");
var i;

for(i = 0; i < springHeader.length; i++){
	springHeader[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block"){
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}