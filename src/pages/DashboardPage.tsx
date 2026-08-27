import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";
import { useZustandTaskStore } from "../stores/zustandTaskStore";
import type { TaskStatus } from "../types/task";

export default function DashboardPage() {
  const { tasks, setStatus, resetTasks } = useZustandTaskStore();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | TaskStatus>("all");
  const visibleTasks = useMemo(
    () =>
      tasks.filter(
        (task) =>
          (filter === "all" || task.status === filter) &&
          `${task.title} ${task.description}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [tasks, filter, query],
  );
  const completed = tasks.filter((task) => task.status === "done").length;
  const inProgress = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;
  return (
    <div className="page-wrap">
      <PageHeader
        eyebrow="WORKSPACE / ZUSTAND"
        title="Học bằng cách làm. test update"
        description="Một task manager nhỏ để bạn nhìn thấy React state chuyển động."
        action={{ label: "Task mới", to: "/tasks/new" }}
      />
      <div className="stats-grid">
        <StatCard label="Tổng task" value={tasks.length} tone="stat-blue" />
        <StatCard label="Đang làm" value={inProgress} tone="stat-yellow" />
        <StatCard label="Đã xong" value={completed} tone="stat-green" />
      </div>
      <section className="toolbar">
        <div className="search-box">
          <span>⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm trong task..."
            aria-label="Tìm task"
          />
        </div>
        <div className="filters" role="group" aria-label="Lọc task">
          {(["all", "todo", "in-progress", "done"] as const).map((item) => (
            <button
              key={item}
              className={filter === item ? "filter active" : "filter"}
              onClick={() => setFilter(item)}
            >
              {item === "all"
                ? "Tất cả"
                : item === "todo"
                  ? "Cần làm"
                  : item === "in-progress"
                    ? "Đang làm"
                    : "Đã xong"}
            </button>
          ))}
        </div>
        <button className="reset-button" onClick={resetTasks}>
          Reset mẫu
        </button>
      </section>
      {visibleTasks.length ? (
        <div className="task-grid">
          {visibleTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={(status) => setStatus(task.id, status)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-icon">○</span>
          <h2>Chưa có task phù hợp</h2>
          <p>Thử đổi bộ lọc hoặc tạo một mục tiêu mới.</p>
          <Link className="button secondary" to="/tasks/new">
            Tạo task đầu tiên
          </Link>
        </div>
      )}
    </div>
  );
}
