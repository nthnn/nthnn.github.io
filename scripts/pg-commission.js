$.getJSON("https://api.exchangerate-api.com/v4/latest/USD", function(data) {
    let usd = data.rates["PHP"];

    $("#price-sp").html((Math.ceil(usd * 34.99) + 1).toLocaleString("en-US"));
    $("#price-wd").html((Math.ceil(usd * 26.99) + 1).toLocaleString("en-US"));
    $("#price-ma").html((Math.ceil(usd * 61.99) + 1).toLocaleString("en-US"));
}).fail(()=> $(".price-est").css({ "display": "none" }));

const marginalize = ()=> $(".break").css("display", "block");

(()=> $(".alert.btn-close").on("click", (e)=> $(this).parent().fadeOut()))();