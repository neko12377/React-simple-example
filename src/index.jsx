import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ExampleApp from './examples/exampleA.jsx'

function App() {
  const [content] = useState('Hello')
  return (
    <ExampleApp
      // 要往下傳的state, 會以props的形式被exampleA.jsx裡面的
      content={content}
    />
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement,
);