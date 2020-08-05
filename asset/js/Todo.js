//applying changing colors
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
  });

//deleting the Todo's
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//grabbing a new todo text from input
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        if(todoText.length < 30){
            $(this).val("");
            //create a new li and add it to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        }
        else{
            $(this).val("");
        }
    }
});

