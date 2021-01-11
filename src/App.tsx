import React, { FunctionComponent } from 'react';
import LinguiProvider from './LinguiProvider';
import DashboardPage from './pages/dahsboard';
import './App.css';

const App: FunctionComponent = () => {
  return (
    <LinguiProvider>
      <DashboardPage/>
    </LinguiProvider>
  );
};

export default App;
