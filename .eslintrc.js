module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },

  "extends": [
    "eslint:recommended",
    // 'react-app',
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "globals": {
    __PATH_PREFIX__: true,
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    semi: ["error", "always"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
  }
};