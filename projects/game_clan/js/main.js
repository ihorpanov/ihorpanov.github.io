$(document).ready(function () {
	$(document).on("click", "button[name='send']", function() {
		var message = $("textarea[name='inp']").val();
		$("<div class='msg'><div class='msg_top clear'><a class='photo'></a><p class='nick'><a href='#' class='nick_a'>Unknown User</a></p><p class='time'>12:00</p></div><p class='text'>"+message+"</p></div>").prependTo("#chat");
		document.getElementById("textarea").value = "";
	});
});