import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProjectMainPage from '../features/Projects/pages/ProjectMainPage'
import ProjectDetailsPage from '../features/Projects/pages/ProjectDetailsPage'
import ServicePage from '../features/Services/pages/ServicePage'
import MainLayout from '../layouts/MainLayout'
import ServiceEndpointsPage from '../features/Services/pages/ServiceEndpoints'

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
          <Route path="/service/1" element={<ServicePage />} />
          <Route path="/service-endpoints/1" element={<ServiceEndpointsPage />} />
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
