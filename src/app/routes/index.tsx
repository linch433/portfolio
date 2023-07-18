import Layout from '../layout/Layout.tsx';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AboutPage from '@/pages/About/AboutPage.tsx';
import ProjectsPage from '@/pages/Projects/ProjectsPage.tsx';
import ExperiencePage from '@/pages/Experience/ExperiencePage.tsx';
import ErrorPage from '@/pages/Error/ErrorPage.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AboutPage />,
      },
      {
        path: 'experience',
        element: <ExperiencePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
]);

export default routes;
