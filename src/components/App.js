import React,{ useState } from 'react';
import AppRouter from 'components/AppRouter';
import { authService } from 'fbase';

console.log(authService.currentUser)
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
