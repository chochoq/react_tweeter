import React,{ useState } from 'react';
import AppRouter from 'components/AppRouter';
import { authService } from 'fbase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
