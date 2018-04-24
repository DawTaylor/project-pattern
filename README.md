# React project pattern proposal

## Table of contents

- [Folder structure](#folder-structure)
- [Dependencies](#dependencies)
- [How tos](#how-tos)
- [Bonus](#bonus)

## Folder Structure

Based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) principle.

```bash
├── project_root
├   ├── build
├   ├── public
├   ├── src
├   ├   ├── Components # Molecules and Organisms Eg. cards, lists, forms
├   ├   ├── Elements # Atoms Eg. buttons, inputs, labels, titles
├   ├   ├── Pages # Templates and Pages Eg. home, products
├   ├── app.js
├   ├── index.js
├   ├── store.js # [WIP] React Context Provider
├── .eslintignore
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
```

## Dependencies

### Production
- axios - HTTP requests library [Link](https://github.com/axios/axios)
- moment - Date manipulation library [Link](https://momentjs.com/)
- styled-components - Self contained styled components library [Link](https://www.styled-components.com/)
- stylus - Node based CSS pre-processor [Link](http://stylus-lang.com/)
- prop-types - PropTypes definition enforcement library [Link](https://github.com/facebook/prop-types)

### Development
- prettier - Auto formatting library [Link](https://github.com/prettier/prettier)
- eslint - JavaScript linter library [Link](https://eslint.org/)
- eslint-config-* - Eslint configs and plugins [Link](https://github.com/topics/eslint-config)
  - eslint-config-airbnb
  - esling-config-prettier
  - eslint-plugin-prettier
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react

## Bonus
Eslint with prettier plugin config stolen from [WesBos](https://github.com/wesbos)'s [dotfiles](https://github.com/wesbos/dotfiles).  
This avoids conflicts between Eslint and Prettier triyng to format the same code.  
This way Eslin would do its stuff and then call prettier to auto format the code.

```sh
npm run lint
```