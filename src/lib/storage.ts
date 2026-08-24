const storageKey = 'react-lab-tasks'

export function loadTasks<T>(fallback: T): T {
  if (typeof window === 'undefined') return fallback

  try {
    const saved = window.localStorage.getItem(storageKey)
    return saved ? (JSON.parse(saved) as T) : fallback
  } catch {
    return fallback
  }
}

export function saveTasks<T>(tasks: T) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, JSON.stringify(tasks))
  }
}
