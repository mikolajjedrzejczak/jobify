import { createBrowserRouter } from 'react-router-dom';

import { RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import JobOffers from './views/JobOffers/JobOffers';
import JobOffer from './views/JobOffer/JobOffer';
import Layout from './Layout/Layout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/job-offers',
          element: <JobOffers />,
        },
        {
          path: '/job-offers/:id',
          element: <JobOffer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
