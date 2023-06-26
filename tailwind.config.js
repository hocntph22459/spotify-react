/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#767676",
          "200": "#191919",
          "300": "#161616",
          "400": "#101010",
          "500": "rgba(255, 255, 255, 0.6)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        white: "#fff",
        darkgray: {
          "100": "#b3b3b3",
          "200": "#a7a7a7",
        },
        darkslategray: "#2e2e2c",
        limegreen: "#1ed760",
        silver: "#bebebd",
      },
      fontFamily: {
        "gothic-a1": "'Gothic A1'",
      },
      borderRadius: {
        "8xl": "27px",
        "80xl": "99px",
        "7xs-2": "5.2px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "4xs": "9px",
      "2xs-3": "10.3px",
      lgi: "19px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
