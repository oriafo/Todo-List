//applying changing colors
$("li").click(function(){
    $(this).toggleClass("completed");
  });

//deleting the Todo's
$("span").click(function(event){
    $(this).parent().fadeout(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
  
