// Select color input
// Select size input

var inputWidth, sizePicker, inputHeight;
pixelCanvas = $("#pixelCanvas");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
 inputHeight = $("#inputHeight").val();
 inputWidth = $("#inputWidth").val();
 pixelCanvas.children().remove();
 for (var x = 1; x <= inputHeight; x++){
	 pixelCanvas.append("<tr></tr>");
 }
 var gridHorizon = $("tr");
 for (var y = 1; y <= inputWidth; y++){
	 gridHorizon.append("<td></td>");
 } 
 
 // To paint grid with selected color or remove the color
 
 var grid = pixelCanvas.find("td");
 
     grid.click(function(){
		 var colorValue = $("#colorPicker").val();
		 if ($(this).attr("bgcolor")){
			 $(this).removeAttr("bgcolor");
		 } else {
			 $(this).attr("bgcolor", colorValue);
		 }
	 }); 
}
// Event Listener to create grid with input

$("#sizePicker").submit(function(event){
	event.preventDefault();
	makeGrid();
});
