import Layout from '../layout/Layout.tsx';
import { Outlet } from 'react-router-dom';
import AboutPage from '../../pages/About/AboutPage.tsx';
import ProjectsPage from '../../pages/Projects/ProjectsPage.tsx';
import ExperiencePage from '../../pages/Experience/ExperiencePage.tsx';

const routes = [
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
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
];

export default routes;
