new Typewriter(document.getElementById("what"), { loop: true })
    .typeString("student.").pauseFor(2500).deleteAll()
    .typeString("full-stack developer.").pauseFor(1000).deleteAll()
    .typeString("software engineer.").pauseFor(1000).deleteAll()
    .typeString("web developer.").pauseFor(1000).deleteAll()
    .typeString("mobile app developer.").pauseFor(1000).deleteAll()
    .start();

let reveal = ()=> {
    for(let rev of $(".reveal"))
        if(rev.getBoundingClientRect().top < window.innerHeight - 90)
            $(rev).addClass("active");
        else $(rev).removeClass("active");
};

$(document).bind("scroll", reveal);
reveal();