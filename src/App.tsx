import React from 'react';
import { CssBaseline } from '@mui/material';

import NovaGpt from './components/NovaGpt';
import './App.css';

const App: React.FC<{}> = () => (
  <>
    <CssBaseline />
    <NovaGpt />
  </>
);

export default App;
