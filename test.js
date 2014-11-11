function updateScroll(){
    // Laddar om scrollen varje 5 sekund.
	$('#console').animate({"scrollTop": $('#console')[0].scrollHeight}, "fast");
}
setInterval( "updateScroll()", 5000 );
