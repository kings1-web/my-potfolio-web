
/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000957',
        secondary: '#FFEB00',
      },
    },
  },
 plugins:[
      function({addUtilities,theme}){
        const newUtilities = {
          '.stroke-text':{
            '-webkit-text-stroke-width':'1.4px',
            '-webkit-text-fill-color':'transparent',
            '-webkit-text-stroke-color':theme('colors.secondary'),
          },
          '.text-stroke-primary':{
            '-webkit-text-stroke-color':theme('colors.primary'),
          },
          '.text-stroke-secondary':{
            '-webkit-text-stroke-color':theme('colors.secondary'),
          }
        };
        addUtilities(newUtilities,['responsive','dark']);
      }
    ],
};


