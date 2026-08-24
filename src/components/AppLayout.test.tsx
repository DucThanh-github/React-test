import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import AppLayout from './AppLayout'

describe('AppLayout', () => {
  it('renders navigation and nested content', () => {
    const router = createMemoryRouter([{ path: '/', element: <AppLayout />, children: [{ index: true, element: <p>Workspace content</p> }] }], { initialEntries: ['/'] })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('React Lab')).toBeInTheDocument()
    expect(screen.getByText('Workspace content')).toBeInTheDocument()
  })
})
