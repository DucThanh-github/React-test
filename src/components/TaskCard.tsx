import { Link } from 'react-router-dom'
import type { Task } from '../types/task'

const statusLabels = { todo: 'Cần làm', 'in-progress': 'Đang làm', done: 'Hoàn thành' }
const priorityLabels = { low: 'Thấp', medium: 'Vừa', high: 'Cao' }

export default function TaskCard({ task, onStatusChange }: { task: Task; onStatusChange: (status: Task['status']) => void }) {
  return <article className="task-card">
    <div className="task-card-top"><span className={`priority priority-${task.priority}`}>{priorityLabels[task.priority]}</span><span className="task-date">{new Date(task.createdAt).toLocaleDateString('vi-VN')}</span></div>
    <Link to={`/tasks/${task.id}`} className="task-title">{task.title}</Link>
    <p className="task-description">{task.description}</p>
    <div className="task-card-footer"><label className="status-control"><span className={`status-dot status-${task.status}`} /><select value={task.status} onChange={(event) => onStatusChange(event.target.value as Task['status'])} aria-label={`Trạng thái ${task.title}`}><option value="todo">{statusLabels.todo}</option><option value="in-progress">{statusLabels['in-progress']}</option><option value="done">{statusLabels.done}</option></select></label><Link className="text-link" to={`/tasks/${task.id}`}>Mở task →</Link></div>
  </article>
}
