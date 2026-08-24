import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">R</span><div><strong>React Lab</strong><small>task manager</small></div></div>
        <nav className="main-nav" aria-label="Điều hướng chính">
          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>◈ <span>Workspace</span></NavLink>
          <NavLink to="/lab/stores" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>⌘ <span>Store lab</span></NavLink>
        </nav>
        <div className="sidebar-note"><span className="eyebrow">ĐANG HỌC</span><p>Component → Router → Store</p><div className="progress-track"><span /></div><small>3 chủ đề đã mở khóa</small></div>
      </aside>
      <main className="main-content"><Outlet /></main>
    </div>
  )
}
