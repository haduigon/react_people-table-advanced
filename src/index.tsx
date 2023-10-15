import { createRoot } from 'react-dom/client';
// import { HashRouter as Router } from 'react-router-dom';
import { Root } from './Root';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

// import { App } from './App';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <Root />,
  );
