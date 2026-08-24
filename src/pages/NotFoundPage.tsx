import { Link } from 'react-router-dom'
export default function NotFoundPage() { return <section className="empty-state"><span className="eyebrow">404</span><h1>Không tìm thấy trang</h1><p>Route này chưa được đăng ký trong router.</p><Link className="button primary" to="/tasks">Về workspace</Link></section> }
