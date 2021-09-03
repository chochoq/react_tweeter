import React,{ useState, useEffect } from 'react';
import AppRouter from 'components/AppRouter';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // 저장되어있을 경우 자동로그인
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
}, []);
  
  return (
    <div className="App">
      {init ? <AppRouter isLoggedIn={isLoggedIn}/>: "init.....g..."}
    </div>
  );
}

export default App;
