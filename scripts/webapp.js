(()=> {
    var redir = ()=> { window.location.href = "../"; }, sec = sessionStorage.getItem("sec");
    (sec == null) ? redir() : sec.length !== 36 ? redir() : 0;
})();