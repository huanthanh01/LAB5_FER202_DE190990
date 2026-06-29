# Ứng dụng Lab 5 (QuizApp & Menu)

Đây là một ứng dụng Web Single Page Application (SPA) được xây dựng bằng ReactJS, Vite và React Bootstrap. Ứng dụng cung cấp giao diện người dùng hiện đại, hỗ trợ chuyển đổi giao diện Sáng/Tối (Dark/Light mode) và tương tác với một backend giả lập (json-server) để lưu trữ dữ liệu.

## Các chức năng chính

- **Điều hướng (Routing):** Sử dụng `react-router-dom` để chuyển hướng giữa các trang (Home, News, About, Contact, Quiz) mượt mà không cần tải lại trang.
- **Giao diện đáp ứng (Responsive UI):** Sử dụng `react-bootstrap` để thiết kế giao diện đẹp mắt, thân thiện và tương thích trên nhiều kích thước màn hình thiết bị.
- **Chế độ Sáng/Tối (Theme Toggle):** Người dùng có thể chuyển đổi linh hoạt giữa giao diện Sáng và Tối. Lựa chọn này được lưu vào `localStorage` của trình duyệt để giữ nguyên trạng thái cho những lần truy cập sau.
- **Biểu mẫu Liên hệ (Contact Form):** Cho phép người dùng điền thông tin (Họ tên, Email, Lời nhắn) và gửi dữ liệu về hệ thống.

## Cấu trúc Hệ thống & Luồng hoạt động

Hệ thống hoạt động dựa trên mô hình Client - Server đơn giản, bao gồm 2 thành phần chạy song song:

### 1. Frontend (React + Vite)
- Chạy trên cổng mặc định của Vite (thường là `http://localhost:5173`).
- Đảm nhận việc hiển thị giao diện, quản lý trạng thái (state) và xử lý các sự kiện tương tác của người dùng.
- **Luồng xử lý Theme:** Khi người dùng nhấn nút chuyển đổi Theme trên thanh Navigation, hàm `toggleTheme` sẽ thay đổi state `theme`. Hook `useEffect` sẽ bắt sự thay đổi này, cập nhật thuộc tính `data-theme` trên thẻ `<html>` và lưu cấu hình vào `localStorage`. Các biến CSS (Custom Properties) trong `index.css` sẽ tự động áp dụng màu sắc tương ứng với Theme hiện tại.

### 2. Backend Giả lập (JSON Server)
- Chạy độc lập trên cổng `3001` (`http://localhost:3001`).
- Quản lý và cung cấp dữ liệu thông qua file `db.json`. Nó tạo ra các API RESTful tự động để Frontend có thể giao tiếp.
- **Luồng hoạt động chức năng gửi Liên hệ (Contact):**
  1. Người dùng nhập thông tin vào biểu mẫu trên trang Contact (`/contact`).
  2. Khi nhấn "Send Message", sự kiện `submit` kích hoạt hàm `handleSubmit`.
  3. Hàm `handleSubmit` sử dụng `fetch` API để gửi một HTTP POST request chứa dữ liệu JSON (thông tin người dùng vừa nhập) tới endpoint `http://localhost:3001/contacts`.
  4. `json-server` nhận yêu cầu, tự động sinh ra một `id` mới và thêm bản ghi đó vào mảng `contacts` bên trong file `db.json`.
  5. Khi dữ liệu được lưu thành công, server trả về mã phản hồi HTTP 201. Frontend bắt được phản hồi này, hiển thị thông báo gửi thành công (Alert màu xanh) cho người dùng và tự động làm sạch các ô nhập liệu.

## Hướng dẫn cài đặt và khởi chạy ứng dụng

### Yêu cầu hệ thống
- Máy tính đã được cài đặt **Node.js**.

### Cài đặt thư viện
Mở terminal (Command Prompt / PowerShell / Terminal) tại thư mục gốc của dự án (`Lab5`) và chạy lệnh sau để tải về các thư viện cần thiết:
```bash
npm install
```

### Khởi chạy hệ thống
Để toàn bộ các tính năng của ứng dụng hoạt động chính xác (bao gồm cả chức năng gửi Contact), bạn cần khởi động cả Backend và Frontend cùng lúc. Bạn cần mở **2 cửa sổ Terminal** riêng biệt:

**Terminal 1: Khởi động JSON Server (Backend)**
```bash
npm run server
```
*(Lệnh này sẽ khởi chạy server ở cổng 3001 và theo dõi các thay đổi trên file `db.json`)*

**Terminal 2: Khởi động React App (Frontend)**
```bash
npm run dev
```
*(Lệnh này sẽ khởi động Vite dev server. Sau khi chạy, hãy truy cập vào đường link được hiển thị trên terminal (ví dụ: `http://localhost:5173`) để trải nghiệm ứng dụng)*
