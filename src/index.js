import React from 'react';

import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import AceEditor from 'react-ace'; 
import 'brace/mode/java';
import 'brace/theme/dracula';
 
function onChange(newValue) {
  console.log('change',newValue);
}
 
// Render editor
render(
  <AceEditor
    mode="javascript"
    theme="dracula"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
