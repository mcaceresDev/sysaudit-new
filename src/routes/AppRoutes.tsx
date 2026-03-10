import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProjectMainPage from '../features/Projects/pages/ProjectMainPage'
import ProjectDetailsPage from '../features/Projects/pages/ProjectDetailsPage'
import MainLayout from '../layouts/MainLayout'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}

        <Route
          element={
            //  <ProtectedRoute>
              <MainLayout />
            //  </ProtectedRoute>
          }
        >
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/projects" element={<ProjectMainPage />} />
          <Route path="/projects/1" element={<ProjectDetailsPage />} />
          {/* <Route
            path="/projects/:projectId/services"
            element={<ServicesPage />}
          />
          <Route
            path="/services/:serviceId/endpoints"
            element={<EndpointsPage />}
          />
          <Route
            path="/endpoints/:endpointId/test"
            element={<TestPage />}
          />
          <Route path="/roles" element={<RolesPage />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
