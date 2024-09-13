module.exports = {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Disable no-explicit-any rule
      'react/no-unescaped-entities': 'off', // Disable unescaped entities check
      '@typescript-eslint/no-unused-vars': 'off', // Disable unused variables check
    },
    parserOptions: {
        ecmaVersion: 2020, // or 2015+ for ES6
        sourceType: 'module', // Allows for the use of imports
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
            jsx: true, // Enable parsing of JSX
          },
          plugins: ['react'],
      },
      extends: ['next', 'next/core-web-vitals'],
  };

  
