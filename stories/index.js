import React from 'react'
import { storiesOf, action, addDecorator } from '@kadira/storybook'
import {muiTheme} from 'storybook-addon-material-ui'
import App from '../src/Components/App'

const reqThemes = require.context('../src/.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
  themesList.push(reqThemes(filename));
});
addDecorator(muiTheme(themesList))

storiesOf('Application', module)
.add('default View', ()=>
 <App />
)

// storiesOf('Button', module)

// .add('with text', () => (
//     <button onClick={action('clicked')}>Hello Button</button>
//   ))
//   .add('with some emoji', () => (
//     <button onClick={action('clicked')}>😀 😎 👍 💯</button>
//   ))
