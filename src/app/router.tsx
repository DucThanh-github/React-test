import { createBrowserRouter, Navigate } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import TaskFormPage from '../pages/TaskFormPage'
import TaskDetailPage from '../pages/TaskDetailPage'
import StoreLabPage from '../pages/StoreLabPage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/tasks" replace /> },
      { path: 'tasks', element: <DashboardPage /> },
      { path: 'tasks/new', element: <TaskFormPage /> },
      { path: 'tasks/:taskId', element: <TaskDetailPage /> },
      { path: 'lab/stores', element: <StoreLabPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
