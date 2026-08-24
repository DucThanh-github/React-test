import { create } from 'zustand'
import { starterTasks } from '../data/tasks'
import { loadTasks, saveTasks } from '../lib/storage'
import type { Task, TaskInput, TaskStatus } from '../types/task'

type TaskState = {
  tasks: Task[]
  addTask: (input: TaskInput) => string
  updateTask: (id: string, input: TaskInput) => void
  deleteTask: (id: string) => void
  setStatus: (id: string, status: TaskStatus) => void
  resetTasks: () => void
}

export const useZustandTaskStore = create<TaskState>((set) => ({
  tasks: loadTasks(starterTasks),
  addTask: (input) => {
    const id = `task-${Date.now()}`
    set((state) => {
      const tasks = [{ ...input, id, createdAt: new Date().toISOString() }, ...state.tasks]
      saveTasks(tasks)
      return { tasks }
    })
    return id
  },
  updateTask: (id, input) => set((state) => {
    const tasks = state.tasks.map((task) => task.id === id ? { ...task, ...input } : task)
    saveTasks(tasks)
    return { tasks }
  }),
  deleteTask: (id) => set((state) => {
    const tasks = state.tasks.filter((task) => task.id !== id)
    saveTasks(tasks)
    return { tasks }
  }),
  setStatus: (id, status) => set((state) => {
    const tasks = state.tasks.map((task) => task.id === id ? { ...task, status } : task)
    saveTasks(tasks)
    return { tasks }
  }),
  resetTasks: () => {
    saveTasks(starterTasks)
    set({ tasks: starterTasks })
  },
}))
