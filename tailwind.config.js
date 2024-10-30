/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'bg-linear-pink-1':
            'linear-gradient(to right, #EFD7EF 8%, #F5F9FC 39%, #F8EAE1 66%, #EAF8F9 91%)',
        'bg-linear-pink-2':
            'linear-gradient(to right, #EFD7EF 8%, #F5F9FC 43%, #F8EAE1 64%, #EAF8F9 87%)',

        'bg-linear-purple-pink-split': 'linear-gradient(to right, #683292 50%, #F83D8E 50%)',
      },
      colors: {
        'clr-black': '#0F0200',
        'clr-purple': '#683292',
        'clr-pink': '#F83D8E',
        'clr-grey': '#646464',
      },
      fontFamily: {
        berkshire: ['Berkshire Swash', 'cursive'],
        sans: ['Archivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

