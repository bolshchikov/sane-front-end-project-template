import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/Root';
import { Main } from './components/Main';
import { AuthProvider } from './auth/Provider';
import { Protected } from './auth/Protected';
import { Internal } from './components/Internal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'protected',
        children: [
          {
            index: true,
            element: <Protected component={Internal} />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
