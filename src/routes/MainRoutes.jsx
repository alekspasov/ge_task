import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from "./ProtectedRoute";
import RandomJoke from "../views/jokes/RandomJoke";
import JokeCategories from "../views/jokes/JokeCategories";
import Mixology from "../views/mixology/Mixology";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element:<ProtectedRoute><MainLayout /></ProtectedRoute>,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'jokes/random/:category?',
      element: (
          <ProtectedRoute>
            <RandomJoke />
          </ProtectedRoute>
      )
    },
    {
      path: 'jokes/categories',
      element: (
          <ProtectedRoute>
            <JokeCategories />
          </ProtectedRoute>
      )
    },
    {
      path: 'jokes/:category?',
      element: (
          <ProtectedRoute>
            <RandomJoke />
          </ProtectedRoute>
      )
    },
    {
      path: 'cocktails',
      element: (
          <ProtectedRoute>
            <Mixology />
          </ProtectedRoute>
      )
    },
  ]
};

export default MainRoutes;
