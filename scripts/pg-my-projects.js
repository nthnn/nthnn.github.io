let dumpData = (data, category)=> {
    let content = "";

    for(let j = 0; j < data.length; j++)
        if(data[j]["category"].includes(category) || category === "category")
            content += "<div class=\"card card-body border-secondary\"><div class=\"row\"><div class=\"col-lg-7\"><img src=\"" + data[j]["thumbnail"] + "\" class=\"card-img\" width=\"100%\"/><div class=\"mobile-break\"><br/></div></div><div class=\"col-lg-5\"><h3 class=\"card-title shimmer shimmer-with-hover\">" + data[j]["title"] + "</h3><small><i>" + data[j]["short_description"] + "</i></small><br/><br/><p>" + data[j]["description"] + "</p><a href=\"projects/project-" + data[j]["id"] + ".html\" class=\"btn-reactive-a\"><button class=\"btn-reactive\"><div class=\"i-wrapper\"><i class=\"lni lni-text-align-left no-rotate\"></i></div><span class=\"lead\">See Full Article</button></a></div></div></div><br/>";

    $("#projects").html(content);
};

$.getJSON("./assets/database/projects.json", (data)=> {
    data.reverse();
    dumpData(data, "category");
});