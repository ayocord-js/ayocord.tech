module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#E2DFDF", 
            a: {
              color: "#6584FF", 
              "&:hover": {
                color: "#4464E3", 
              },
            },
            h1: {
              color: "#E2DFDF",
              fontSize: "2.25rem", 
              "@screen sm": {
                fontSize: "1.5rem", 
              },
              "@screen md": {
                fontSize: "2rem", // Размер для планшетов
              },
            },
            h2: {
              color: "#E2DFDF",
              fontSize: "2rem", 
              "@screen sm": {
                fontSize: "1.25rem",
              },
              "@screen md": {
                fontSize: "1.75rem", // Размер для планшетов
              },
            },
            strong: {
              color: "#E2DFDF",
            },
            h3: {
              color: "#E2DFDF",
              fontSize: "1.75rem", 
              "@screen sm": {
                fontSize: "1.125rem",
              },
              "@screen md": {
                fontSize: "1.5rem", // Размер для планшетов
              },
            },
            blockquote: {
              color: "#E2DFDF",
              borderLeftColor: "#ccc",
              fontSize: "1.25rem", 
              "@screen sm": {
                fontSize: "1rem", 
              },
              "@screen md": {
                fontSize: "1.125rem", // Размер для планшетов
              },
            },
            code: {
              color: "#d63384", 
              backgroundColor: "#0F172A", 
              padding: "0.2em 0.4em",
              borderRadius: "4px",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
