TagCloud(".sphere", [
    "C#", ".NET Framework", "Java", "Kotlin", "Go",
    "TypeScript", "JavaScript", "Ballerina", "Python",
    "Jupyter Notebook", "Git", "GitHub", "GitHub Actions",
    "MarkDown", "Assembly", "PHP", "MySQL", "XAMPP", "C",
    "C++", "Doxygen", "LLVM", "Vercel", "NodeJS", "Nodemon",
    "Jest", "Parcel", "Vite", "Vue", "Babel", "Electron",
    "React", "PostCSS", "Tailwind", "Flowbite", "HeroIcons",
    "Firebase", "HTML5", "Pug", "CSS3", "SASS", "Bootstrap",
    "jQuery", "Phaser", "Tiled", "Arduino", "Espressif",
    "PlatformIO", "Adafruit", "AVR", "ATMel", "EasyEDA",
    "Visual Studio", "Visual Studio Code", "Android Studio",
    "IntelliJ", "NetBeans", "DevC++"
], {
    radius: 200,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

$("#certificate").on("change", ()=> $("#certificate-iframe").attr("src", $("#certificate option:selected").data("path")));