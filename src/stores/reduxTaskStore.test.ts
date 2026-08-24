import { describe, expect, it } from 'vitest'
import { addTask, deleteTask, reduxStore, setStatus } from './reduxTaskStore'

describe('reduxTaskStore', () => {
  it('adds a task through an action', () => {
    const before = reduxStore.getState().tasks.tasks.length
    reduxStore.dispatch(addTask({ title: 'Test action', description: '', status: 'todo', priority: 'low' }))
    expect(reduxStore.getState().tasks.tasks).toHaveLength(before + 1)
  })

  it('updates and deletes a task', () => {
    const task = reduxStore.getState().tasks.tasks[0]
    reduxStore.dispatch(setStatus({ id: task.id, status: 'done' }))
    expect(reduxStore.getState().tasks.tasks.find((item) => item.id === task.id)?.status).toBe('done')
    reduxStore.dispatch(deleteTask(task.id))
    expect(reduxStore.getState().tasks.tasks.some((item) => item.id === task.id)).toBe(false)
  })
})
