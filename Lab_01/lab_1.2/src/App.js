import React from "react";
import UserContext from './context/UserContext';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <>
      <UserProvider />
    </>
  );
}

export default App;