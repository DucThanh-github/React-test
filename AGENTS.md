# AGENTS.md

## Project Overview

React Lab là ứng dụng Task Manager dùng để học React qua một sản phẩm nhỏ có thể sử dụng được.

- Stack: React 19, TypeScript, Vite
- Routing: React Router
- State management: Zustand và Redux Toolkit
- Testing: Vitest, Testing Library, jsdom
- Linting: Oxlint
- Persistence: `localStorage` phía client
- Ngôn ngữ giao diện và tài liệu: tiếng Việt
- Workspace root: `F:\api-test`

Đây là project học tập phía client. Không giả định có backend, authentication, database hoặc API thật nếu chưa được yêu cầu.

## Commands

```bash
npm install
npm run dev
npm run test
npm run test:watch
npm run build
npm run lint
```

Trước khi hoàn tất một thay đổi, ưu tiên chạy test phù hợp với phần đã sửa, sau đó chạy `npm run build`. Nếu command không chạy được, phải nêu rõ trong kết quả công việc.

## Architecture

- `src/app/router.tsx`: khai báo toàn bộ route.
- `src/components/`: component dùng chung, nhận dữ liệu và callback qua props.
- `src/pages/`: màn hình gắn với route.
- `src/stores/zustandTaskStore.ts`: store Zustand và flow Workspace mặc định.
- `src/stores/reduxTaskStore.ts`: slice/reducer Redux Toolkit dùng cho Store Lab và test.
- `src/types/`: type dùng chung, đặc biệt là domain `Task`.
- `src/data/`: dữ liệu mẫu ban đầu.
- `src/lib/storage.ts`: helper đọc/ghi `localStorage` có guard cho môi trường test/SSR.
- `src/test/`: test setup dùng chung.
- `src/index.css`: design system và responsive layout chính.

### State rules

- Không để Zustand và Redux Toolkit cùng điều khiển một màn hình.
- Workspace chính dùng Zustand.
- Trang `/lab/stores` dùng hai ví dụ độc lập để so sánh API.
- Mọi thay đổi task phải đi qua action/store, không mutate dữ liệu trực tiếp trong component.
- Khi thêm field cho `Task`, cập nhật type, dữ liệu mẫu, form và các test liên quan.
- Giữ persistence trong `src/lib/storage.ts`; không truy cập `window.localStorage` rải rác trong component.

### Routing rules

- Route mới phải được đăng ký trong `src/app/router.tsx`.
- Dùng `Link`/`NavLink` cho điều hướng nội bộ, không dùng thẻ `a` với path nội bộ.
- Route động phải xử lý trường hợp id không tồn tại.
- Giữ route fallback `*` để hiển thị trang 404.

## Coding Rules

- Dùng TypeScript strict-friendly; ưu tiên type rõ ràng và tránh `any`.
- Dùng tên biến và hàm mô tả đầy đủ, không dùng tên một ký tự.
- Giữ component nhỏ, dễ đọc; logic state dùng chung nên nằm trong store/helper.
- Không thêm abstraction chỉ để bao bọc một dòng code.
- Không thêm comment nếu code đã tự giải thích; comment chỉ dành cho logic khó hoặc quyết định không hiển nhiên.
- Giữ thay đổi tập trung vào yêu cầu, không refactor unrelated code.
- Giữ public API và cấu trúc thư mục hiện tại nếu không có lý do kỹ thuật rõ ràng.
- Dùng ASCII mặc định trong file; giữ tiếng Việt hiện có khi đó là nội dung giao diện/tài liệu.
- Không thêm dependency mới nếu API hiện tại hoặc thư viện đã cài đáp ứng được nhu cầu.

## UI Rules

- Giữ phong cách hiện tại: workspace yên tĩnh, màu xanh lá/mint, layout rõ ràng và ưu tiên khả năng scan.
- Responsive phải hoạt động ở desktop và mobile.
- Không để text tràn khỏi button, card hoặc layout.
- Form phải là controlled input và có validation tối thiểu cho title.
- Mọi trạng thái rỗng, route không tồn tại và task không tồn tại phải có UI rõ ràng.
- Không đưa logic học tập vào text dài trong UI; nội dung hướng dẫn chi tiết đặt trong `README.md`.

## Testing Rules

- Test hành vi người dùng và contract store/reducer, không test implementation detail vô nghĩa.
- Khi thêm action store, thêm ít nhất một test cho action đó.
- Khi sửa routing hoặc form CRUD, thêm hoặc cập nhật test route/hành vi tương ứng.
- Test phải độc lập; reset store hoặc dữ liệu dùng chung trước mỗi test khi cần.
- Không bỏ qua test failing. Nếu test hiện có fail do thay đổi hợp lệ, cập nhật test trong cùng thay đổi.

## Change Checklist

1. Xác định module sở hữu hành vi trước khi sửa.
2. Cập nhật type/domain trước nếu contract thay đổi.
3. Cập nhật store, component/page và route liên quan.
4. Thêm hoặc cập nhật test cho hành vi mới.
5. Chạy `npm run test`.
6. Chạy `npm run build`.
7. Chạy `npm run lint` nếu thay đổi code ứng dụng.
8. Kiểm tra mobile và các trạng thái empty/error nếu thay đổi UI.
9. Tóm tắt file đã sửa và command đã chạy trong kết quả cuối.

## Out of Scope By Default

Không tự ý thêm backend, API layer, authentication, database, deployment config, UI framework mới hoặc thay đổi thư viện state management nếu người dùng chưa yêu cầu.
