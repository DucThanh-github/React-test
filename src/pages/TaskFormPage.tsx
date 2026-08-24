import { Link, useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import TaskForm from '../components/TaskForm'
import { useZustandTaskStore } from '../stores/zustandTaskStore'
import type { TaskInput } from '../types/task'

export default function TaskFormPage() { const navigate = useNavigate(); const addTask = useZustandTaskStore((state) => state.addTask); const handleSubmit = (input: TaskInput) => navigate(`/tasks/${addTask(input)}`); return <div className="page-wrap narrow"><Link className="back-link" to="/tasks">← Workspace</Link><PageHeader eyebrow="WORKSPACE / CREATE" title="Thêm một mục tiêu." description="Controlled form là nơi props và state gặp nhau." /><TaskForm submitLabel="Tạo task" onSubmit={handleSubmit} /></div> }
