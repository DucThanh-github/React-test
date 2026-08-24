import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { starterTasks } from '../data/tasks'
import type { Task, TaskInput, TaskStatus } from '../types/task'

type ReduxState = { tasks: Task[] }

const initialState: ReduxState = { tasks: starterTasks }

const reduxTaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskInput>) => {
      state.tasks.unshift({ ...action.payload, id: `redux-${Date.now()}`, createdAt: new Date().toISOString() })
    },
    updateTask: (state, action: PayloadAction<{ id: string; input: TaskInput }>) => {
      const task = state.tasks.find((item) => item.id === action.payload.id)
      if (task) Object.assign(task, action.payload.input)
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    setStatus: (state, action: PayloadAction<{ id: string; status: TaskStatus }>) => {
      const task = state.tasks.find((item) => item.id === action.payload.id)
      if (task) task.status = action.payload.status
    },
  },
})

export const { addTask, updateTask, deleteTask, setStatus } = reduxTaskSlice.actions
export const reduxStore = configureStore({ reducer: { tasks: reduxTaskSlice.reducer } })
export type ReduxRootState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
