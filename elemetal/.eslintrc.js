module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier", "react", "react-hooks","simple-import-sort"],
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:jest/recommended",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:react/recommended"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": false,
        "printWidth": 120,
        "tabWidth": 2,
        "semi": false
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": [
      "error",
      {
        "skipUndeclared": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off"

  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  }
};