import type { Task } from '../types/task'

export const starterTasks: Task[] = [
  {
    id: 'task-react-1',
    title: 'Ôn lại vòng đời render',
    description: 'Theo dõi state thay đổi như thế nào qua một component nhỏ.',
    status: 'in-progress',
    priority: 'high',
    createdAt: '2026-08-20T08:00:00.000Z',
  },
  {
    id: 'task-react-2',
    title: 'Tạo route chi tiết task',
    description: 'Thực hành Link, useParams và route động với React Router.',
    status: 'todo',
    priority: 'medium',
    createdAt: '2026-08-21T09:30:00.000Z',
  },
  {
    id: 'task-react-3',
    title: 'So sánh hai store',
    description: 'Viết cùng một action bằng Zustand và Redux Toolkit.',
    status: 'done',
    priority: 'low',
    createdAt: '2026-08-22T13:15:00.000Z',
  },
]
