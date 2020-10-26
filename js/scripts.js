$(document).ready(function() {
  $("#iceCream").submit(function(event){
    event.preventDefault();
    let array = [$("#iceCream1").val(),$("#iceCream2").val(),$("#iceCream3").val()];
    alert(array);
    array.forEach(function(element) {
      $("#list").append("<li>" + element + "</li>");
    })
  });
});