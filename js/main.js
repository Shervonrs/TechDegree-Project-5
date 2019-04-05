
$(document).ready(function(){
  $("#searchBox").on("keyup", function() {
    const content= $(this).val().toLowerCase();
    console.log(content)
    $("a[data-type]").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(content) > -1)
    });
  });
});
