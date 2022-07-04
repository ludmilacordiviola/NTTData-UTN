import React from 'react'
import ReactDOM from 'react-dom/client';
//import App from './App';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </React.StrictMode>
);

/*
<React.StrictMode>
    <App />
</React.StrictMode>
*/
