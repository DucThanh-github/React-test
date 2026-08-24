import { useState } from 'react'
import type { TaskInput } from '../types/task'

const emptyTask: TaskInput = { title: '', description: '', status: 'todo', priority: 'medium' }

export default function TaskForm({ initialValue = emptyTask, submitLabel, onSubmit }: { initialValue?: TaskInput; submitLabel: string; onSubmit: (input: TaskInput) => void }) {
  const [form, setForm] = useState(initialValue)
  const [error, setError] = useState('')
  const update = (field: keyof TaskInput, value: string) => setForm((current) => ({ ...current, [field]: value }))
  const submit = (event: React.FormEvent) => { event.preventDefault(); if (!form.title.trim()) { setError('Hãy đặt tên cho task trước khi lưu.'); return }; onSubmit({ ...form, title: form.title.trim() }) }
  return <form className="task-form" onSubmit={submit}>
    <label>Tên task<input value={form.title} onChange={(event) => update('title', event.target.value)} placeholder="Ví dụ: Học useEffect" autoFocus /></label>
    <label>Mô tả<textarea value={form.description} onChange={(event) => update('description', event.target.value)} placeholder="Bạn muốn hoàn thành điều gì?" rows={5} /></label>
    <div className="form-grid"><label>Trạng thái<select value={form.status} onChange={(event) => update('status', event.target.value)}><option value="todo">Cần làm</option><option value="in-progress">Đang làm</option><option value="done">Hoàn thành</option></select></label><label>Độ ưu tiên<select value={form.priority} onChange={(event) => update('priority', event.target.value)}><option value="low">Thấp</option><option value="medium">Vừa</option><option value="high">Cao</option></select></label></div>
    {error && <p className="form-error">{error}</p>}<button className="button primary" type="submit">{submitLabel}</button>
  </form>
}
