const storageKey = 'react-lab-tasks'

export function loadTasks<T>(fallback: T): T {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return fallback
  }

  try {
    const saved = window.localStorage.getItem(storageKey)
    return saved ? (JSON.parse(saved) as T) : fallback
  } catch {
    return fallback
  }
}

export function saveTasks<T>(tasks: T) {
  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(tasks))
    } catch {
      // Bỏ qua lỗi ghi storage trong môi trường bị giới hạn hoặc test headless
    }
  }
}

