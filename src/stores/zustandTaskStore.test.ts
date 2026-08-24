import { beforeEach, describe, expect, it } from 'vitest'
import { useZustandTaskStore } from './zustandTaskStore'

describe('zustandTaskStore', () => {
  beforeEach(() => useZustandTaskStore.getState().resetTasks())

  it('adds and updates a task', () => {
    const id = useZustandTaskStore.getState().addTask({ title: 'Learn selectors', description: '', status: 'todo', priority: 'medium' })
    useZustandTaskStore.getState().setStatus(id, 'in-progress')
    expect(useZustandTaskStore.getState().tasks.find((task) => task.id === id)?.status).toBe('in-progress')
  })
})
