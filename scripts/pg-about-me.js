TagCloud(".sphere", [
    "Arduino", "Espressif", "AVR PIC", "Adafruit",
    "C#", "Java", "PHP", "C", "C++", "Swing",
    "HTML", "CSS", "Bootstrap", "jQuery", "SQL", "JavaScript", "ElectronJS",
    "Visual Studio", "InteliJ", "Android Studio", "NetBeans", "XAMPP"
], {
    radius: 130,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

$("#certificate").on("change", ()=> $("#certificate-iframe").attr("src", $("#certificate option:selected").data("path")));