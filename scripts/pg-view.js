let isValidID = (str)=> !isNaN(str) && !isNaN(parseFloat(str));

((paramName, callback)=> {
    var $ = new URL(window.location.href).searchParams.get(paramName);
    if($)
        callback($);
})("id", (id)=> {
    if(isValidID(id)) {
        $.getJSON("./assets/database/projects/" + id + ".json", (data)=> {
            document.title = data["title"];
            $("#main-content").html(data["content"]);

            baguetteBox.run(".main-section", {
                animation: 'fadeIn',
                noScrollBars: true,
            });
        }).fail(()=> {});
    }
    else window.location.href = "404.html";
});