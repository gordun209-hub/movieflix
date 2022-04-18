module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'gray-lightest': '#f9f8fa',
        'gray-lighter': '#e5e5e6',
        'gray-light': '#d1d1d2',
        gray: '#bebec0',
        'gray-dark': '#979798',
        'gray-darker': '#6f6f70',
        'gray-darkest': '#49484a',
        black: '#212122',

        'brand-light': '#ded7fd',
        brand: '#6366f1',
        'brand-dark': '#363471',

        'cta-light': '#ffe9d7',
        cta: '#f1a763',
        'cta-dark': '#725133',

        'info-light': '#dbf0ff',
        info: '#4cc6fd',
        'info-dark': '#2f5e76',

        'warning-light': '#fef0d6',
        warning: '#eec35c',
        'warning-dark': '#705d30',

        'success-light': '#dbf5db',
        success: '#61d472',
        'success-dark': '#34643a',

        'danger-light': '#ffd4d6',
        danger: '#ee4167',
        'danger-dark': '#712834'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
