import * as React from 'react';

const App = () => {
  const [test, setTest] = useState('testing')
  return (
    <h1 onClick={() => setTest('success')}>{test}</h1>
  );
};
export default App;