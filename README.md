# PostCSS :Export

[PostCSS] plugin to transpile :export into :root.
This is useful when you need to share CSS variables with JS without a middle man JSON file.
**Please note this plugin requires style-loader and css-loader.**

## Install
```
npm install postcss-export --save-dev
```

```javascript
import CSSExport from 'postcss-export';

{ 
    'loader': 'postcss-loader', // (see: https://www.npmjs.com/package/postcss-loader)
    'options': {
        'plugins': [
            CSSExport()
        ]
    }
}
```

## Usage

Define variables in a dedicated CSS file.
```pcss
:export {
    --padding: 10px;
    --color: #fff;
    --align: center;
}

```

Import CSS into JS using style-loader and css-loader as a object.
```javascript
import variables from '!!style-loader!css-loader!@vars/colors';

const padding = variables['--padding'];
const color = variables['--color'];
const align = variables['--align'];

```

Plugin transpiles :export into :root for further var POSTCSS processing within other CSS files.
```css
.some-selector {
    color: var(--color);
    padding: var(--padding);
    text-align: var(--center);
}
```
