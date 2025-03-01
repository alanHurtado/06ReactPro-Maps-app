import React from 'react';
import ReactDOM from 'react-dom/client';

import { MapsApp } from './MapsApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

