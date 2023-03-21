TagCloud(".sphere", [
    "Arduino", "Espressif",
    "C#", "Java", "PHP",
    "HTML", "CSS", "Bootstrap",
    "jQuery", "SQL", "JavaScript",
    "C", "C++", "Swing",
    "Visual Studio", "InteliJ",
    "Android Studio", "NetBeans",
    "AVR PIC", "Adafruit",
    "XAMPP"
], {
    radius: 130,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

$("#certificate").on("change", ()=> {
    $("#certificate-iframe").attr("src", $("#certificate option:selected").data("path"));
});