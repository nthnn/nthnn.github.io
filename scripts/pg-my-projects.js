let dumpData = (data, category, filter = "")=> {
    let content = "", count = 0;

    for(let j = 0; j < data.length; j++)
        if(data[j]["category"].includes(category) || category === "category")
            if(filter === "" || data[j]["title"].toLowerCase().indexOf(filter.toLowerCase()) != -1 || data[j]["description"].toLowerCase().indexOf(filter.toLowerCase()) != -1) {
                content += "<div class=\"card card-body border-secondary animate__animated animate__flipInX\"><div class=\"row\"><div class=\"col-lg-7\"><img src=\"" + data[j]["thumbnail"] + "\" class=\"card-img\" width=\"100%\"/><div class=\"mobile-break\"><br/></div></div><div class=\"col-lg-5\"><h3 class=\"card-title shimmer shimmer-with-hover\">" + data[j]["title"] + "</h3><small><i>" + data[j]["short_description"] + "</i></small><br/><br/><p>" + data[j]["description"] + "</p><a href=\"projects/project-" + data[j]["id"] + ".html\" class=\"btn-reactive-a\"><button class=\"btn-reactive\"><div class=\"i-wrapper\"><i class=\"lni lni-text-align-left no-rotate\"></i></div><span class=\"lead\">See Full Article</button></a></div></div></div><br/>";
                count++;
            }

    if(count > 0) {
        $("#no-projects-found").removeClass("d-none animate__animated animate__fadeIn").addClass("d-none");
        $("#projects").html(content);
    }
    else {
        $("#no-projects-found").removeClass("d-none").addClass("animate__animated animate__fadeIn");
        $("#projects").html("");
    }
};

$.getJSON("./assets/database/projects.json", (data)=> {
    data.reverse();
    setTimeout(()=> dumpData(data, "category"), 5800);

    $("#filter").change(()=> {
        dumpData(data, $("input[name=category]:checked").val(), $("#filter").val().replace(/[\u00A0-\u9999<>\&]/g, (i)=> {
            return '&#' + i.charCodeAt(0) + ';';
         }));
    });

    $("#categories input[type=radio]").change(()=> {
        $("#projects").html("");
        dumpData(data, $("input[name=category]:checked").val());
    });
}).fail(()=> {
    $("#projects").addClass("d-none");
    $("#cannot-load").removeClass("d-none").addClass("animate__animated animate__fadeIn");
});