# React Lab · Task Manager

Một project nhỏ để học React bằng cách xây một task manager thật sự có thể sử dụng. Project dùng **React + TypeScript + Vite**, React Router, Zustand và Redux Toolkit.

## Chạy project

```bash
npm install
npm run dev
```

Các lệnh khác:

```bash
npm run test       # chạy test một lần
npm run test:watch # chạy test theo dõi
npm run build      # typecheck và build production
npm run lint       # kiểm tra Oxlint
```

## Lộ trình học

1. **Component và props**: đọc `src/components/TaskCard.tsx`, `StatCard.tsx` và `PageHeader.tsx`.
2. **State và controlled form**: đọc `src/components/TaskForm.tsx`.
3. **React Router**: đọc `src/app/router.tsx`, sau đó thử route động `tasks/:taskId`.
4. **Zustand**: xem `src/stores/zustandTaskStore.ts` và màn hình Workspace.
5. **Redux Toolkit**: xem slice trong `src/stores/reduxTaskStore.ts` và trang Store lab.
6. **Persistence**: xem `src/lib/storage.ts`, thử refresh trình duyệt sau khi tạo task.
7. **Test**: đọc hai file `*.test.ts` trong thư mục stores.

## Zustand và Redux Toolkit

| Tiêu chí | Zustand | Redux Toolkit |
| --- | --- | --- |
| Boilerplate | Ít, store là một hook | Nhiều cấu trúc hơn, rõ action/reducer |
| Cách dùng | Gọi selector và action trực tiếp | `dispatch(action)` và `useSelector` |
| Hợp với | App nhỏ, cần triển khai nhanh | App lớn, quy ước/debug middleware rõ |
| Ví dụ trong project | Workspace chính | Store lab và reducer tests |

Dữ liệu chỉ được lưu trong `localStorage` của trình duyệt. Đây là project học tập phía client, chưa có backend, đăng nhập hay đồng bộ nhiều thiết bị.

## Luồng CI/CD (GitHub Actions & Vercel)

Dự án đã được tích hợp luồng CI/CD tự động hóa:
- **CI**: Khi mở Pull Request hoặc push code, GitHub Actions sẽ tự động chạy `npm run lint` (Oxlint), `npm run test` (Vitest), và `npm run build` (TypeScript + Vite).
- **CD (Vercel)**:
  - **Pull Request**: Tự động build và deploy môi trường **Preview** cho mỗi PR.
  - **Branch main / master**: Tự động deploy lên môi trường **Production**.

### Thiết lập GitHub Secrets

Để kích hoạt luồng CD với Vercel qua GitHub Actions, cấu hình 3 biến tại **GitHub Repository > Settings > Secrets and variables > Actions**:

1. **`VERCEL_TOKEN`**: Tạo tại [Vercel Account Settings > Tokens](https://vercel.com/account/tokens).
2. **`VERCEL_ORG_ID`** & **`VERCEL_PROJECT_ID`**:
   - Chạy lệnh `npx vercel link` ở thư mục dự án cục bộ để liên kết với Vercel.
   - Lấy `orgId` và `projectId` từ file `.vercel/project.json` vừa được tạo (file này đã được đưa vào `.gitignore`).

