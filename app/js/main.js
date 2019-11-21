$(document).ready(function(){

var $newContent=$(
'<h4> Новый заголовок</h4>'+
'<p>новый абзац</p>'

	);


$newContent.hide();
$('#block').html($newContent);
$('#block').on('click', function(){
$newContent.fadeIn();	
})

});

$(document).ready(function() {
	
});