$(document).bind("contextmenu", function (event) {
    event.preventDefault();
    $(".context-menu").finish().toggle(100).
    css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});

$(document).bind("mousedown", function (e) {
    if (!$(e.target).parents(".context-menu").length > 0)
        $(".context-menu").hide(100);
});

$(".context-menu li").click(function(){
    switch($(this).attr("data-action")) {
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
    }
  
    $(".context-menu").hide(100);
});