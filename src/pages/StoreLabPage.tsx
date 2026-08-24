import { Provider, useDispatch, useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import {
  addTask,
  reduxStore,
  type ReduxDispatch,
  type ReduxRootState,
} from "../stores/reduxTaskStore";
import { useZustandTaskStore } from "../stores/zustandTaskStore";

function ReduxPreview() {
  const dispatch = useDispatch<ReduxDispatch>();
  const tasks = useSelector((state: ReduxRootState) => state.tasks.tasks);
  return (
    <div className="store-preview redux-preview">
      <div className="store-label">
        <span className="store-dot redux-dot" /> Redux Toolkit
      </div>
      <strong>{tasks.length} tasks</strong>
      <p>State tập trung, action rõ ràng, reducer có cấu trúc.</p>
      <button
        className="button secondary"
        onClick={() =>
          dispatch(
            addTask({
              title: "Task từ Redux",
              description: "Được thêm bằng dispatch + reducer.",
              status: "todo",
              priority: "low",
            }),
          )
        }
      >
        dispatch(addTask)
      </button>
    </div>
  );
}
export default function StoreLabPage() {
  const zustandTasks = useZustandTaskStore((state) => state.tasks);
  const addZustandTask = useZustandTaskStore((state) => state.addTask);
  return (
    <div className="page-wrap">
      <PageHeader
        eyebrow="LAB / STATE MANAGEMENT"
        title="Hai cách giữ state."
        description="Cùng một bài toán, hai API. Hãy bấm nút và đọc code phía sau."
      />
      <div className="store-grid">
        <div className="store-preview zustand-preview">
          <div className="store-label">
            <span className="store-dot zustand-dot" /> Zustand
          </div>
          <strong>{zustandTasks.length} tasks</strong>
          <p>Store tối giản, component đọc và gọi action trực tiếp.</p>
          <button
            className="button secondary"
            onClick={() =>
              addZustandTask({
                title: "Task từ Zustand",
                description: "Được thêm bằng action của store.",
                status: "todo",
                priority: "low",
              })
            }
          >
            addTask()
          </button>
        </div>
        <Provider store={reduxStore}>
          <ReduxPreview />
        </Provider>
      </div>
      <section className="comparison">
        <h2>Chọn công cụ theo bài toán</h2>
        <div className="comparison-row">
          <span>Boilerplate</span>
          <strong>Thấp · Zustand</strong>
          <strong>Cao hơn · Redux Toolkit</strong>
        </div>
        <div className="comparison-row">
          <span>Debug / quy ước</span>
          <strong>Cần tự chọn</strong>
          <strong>Mạnh · Redux Toolkit</strong>
        </div>
        <div className="comparison-row">
          <span>Điểm nên học</span>
          <strong>Hook + selector</strong>
          <strong>Action + reducer</strong>
        </div>
      </section>
    </div>
  );
}
