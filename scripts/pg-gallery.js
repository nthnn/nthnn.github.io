var clickImage = (e)=> {
    e.dispatchEvent(new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": true
    }));
};

let reveal = ()=> {
    for(let rev of $(".reveal"))
        if(rev.getBoundingClientRect().top < window.innerHeight - 90)
            $(rev).addClass("active");
        else $(rev).removeClass("active");
};

$.getJSON("./assets/database/gallery.json", (data)=> {
    let content = "<div class=\"row\">", capId = 1;

    data.reverse();
    for(let i = 0; i < data.length; i++) {
        if(i % 3 == 0) content += "</div><div class=\"row\">";

        content += "<div class=\"col-lg-4" + (i <= 2 ? "" : " reveal fade-bottom") + "\"><a id=\"caption-" + capId + "\" href=\"" + data[i]["src"] + "\"><img class=\"img-fluid\" src=\"" + data[i]["src"] + "\" alt=\"" + data[i]["caption"] + "\"/></a><span onclick=\"clickImage(document.getElementById('caption-" + capId + "'))\" class=\"lead fw-bold gallery-caption\">" + data[i]["caption"] + "</span><p class=\"date\">" + data[i]["date"] + "</p></div>";
        capId++;
    }
    content += "</div>";

    $(".gallery-container").html(content);
    baguetteBox.run(".gallery-container", {
        animation: 'fadeIn',
        noScrollBars: true,
    });

    reveal();
}).fail(() => {
    $("#error-message").removeClass("d-none").addClass("animate__animated animate__fadeIn")
});

$(document).bind("scroll", reveal);