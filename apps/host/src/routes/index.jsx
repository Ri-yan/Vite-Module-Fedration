import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Loading from '../components/Loading';
const Remote1App = lazy(() => import('remote1/App'));
const Remote2App = lazy(() => import('remote2/App'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/remote1/*" element={<Remote1App />} />
          <Route path="/remote2/*" element={<Remote2App />} />
        </Route>
      </Routes>
    </Suspense>
  );
}