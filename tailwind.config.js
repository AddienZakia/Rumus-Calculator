module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "500px",
      },
      colors: {
        base: "#ecf0f3",
        biruMuda: "#55C2E1",
        hitamTransparent: "rgba(0,0,0,0.5)",
        darkBase: "#243443",
      },
      boxShadow: {
        neumorphism:
          "3px 3px 10px rgba(55, 84, 170, 0.1), -3px -3px 10px #fff;",
        neumorphismHover:
          "inset 2px 2px 10px rgba(55, 84, 170, 0.1), inset -2px -2px 10px #fff;",
        darkNeumorphism:
          "3px 3px 10px rgba(0,0,0, 0.3), -3px -3px 10px rgba(96, 116, 134, 0.5);",
        darkNeumorphismHover:
          "inset 2px 2px 10px rgba(0,0,0, 0.3),inset -2px -2px 10px rgba(96, 116, 134, 0.5);",
      },
      height: {
        per90: "93%",
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
    extend: {
      boxShadow: ["dark"],
      scrollbar: ["dark"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
