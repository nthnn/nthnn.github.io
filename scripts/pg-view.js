((paramName, callback)=> {
    var $ = new URL(window.location.href).searchParams.get(paramName);
    if($)
        callback($);
})("id", (id)=> {
    $.getJSON("./assets/database/projects/" + id + ".json", (data)=> {
        document.title = data["title"];
        $("#main-content").html(data["content"]);
    }).fail(()=> {});
});

baguetteBox.run(".main-section", {
    animation: 'fadeIn',
    noScrollBars: true,
});