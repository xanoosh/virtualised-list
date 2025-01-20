import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react';

import './index.css';
import App from './App.tsx';
import Loader from './components/Loader.tsx';

const HomePage = React.lazy(() => import('./pages/HomePage.tsx'));
const VirtualisedListPage = React.lazy(
  () => import('./pages/VirtualizedListPage.tsx')
);
const LazyLoadPage = React.lazy(() => import('./pages/LazyLoadPage.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error text="error" />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loader />}>
            <HomePage />
          </React.Suspense>
        ),
        // errorElement: <Error text="error" />,
      },
      {
        path: 'virtualised-list',
        element: (
          <React.Suspense fallback={<Loader />}>
            <VirtualisedListPage />
          </React.Suspense>
        ),
        // errorElement: <Error text="error" />,
      },
      {
        path: 'lazy-load',
        element: (
          <React.Suspense fallback={<Loader />}>
            <LazyLoadPage />
          </React.Suspense>
        ),
        // errorElement: <Error text="error" />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
