@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(var(--rotate));
  }
  50% {
    transform: translate(var(--dx), var(--dy)) rotate(calc(var(--rotate) + 180deg));
  }
}

.animate-particle {
  animation: float 3s ease-in-out infinite;
}/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'text-spark': 'text-spark 3.5s ease-out infinite',
        'launch': 'launch 3.5s ease-out infinite',
      },
      keyframes: {
        'text-spark': {
          '0%': {
            transform: 'scale(0) translate(0, 0) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '40%': {
            transform: 'scale(1) translate(var(--dx), var(--dy)) rotate(var(--rotate))',
            opacity: '1',
          },
          '70%': {
            transform: 'scale(1) translate(var(--dx), var(--dy)) rotate(var(--rotate))',
            opacity: '0.7',
          },
          '100%': {
            transform: 'scale(0.5) translate(calc(var(--dx) * 2), calc(var(--dy) * 2)) rotate(var(--rotate))',
            opacity: '0',
          }
        },
        launch: {
          '0%': {
            transform: 'translateY(100vh)',
            opacity: '1',
          },
          '40%': {
            transform: 'translateY(var(--launch-height))',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(var(--launch-height))',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(var(--launch-height))',
            opacity: '0',
          }
        }
      }
    },
  },
  plugins: [],
}

