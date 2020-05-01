import React from 'react';
function App() {
  const greeting = 'Hello from function component!';
  return <Headline value={greeting}/>;
}

function Headline(props) {
  
  return <h1>{props.value}</h1>;
}
export default App;