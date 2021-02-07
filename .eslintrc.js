module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['react-hooks'],
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    // 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    // 'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // ...
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
