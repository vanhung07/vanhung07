# Trang cá nhân — Portfolio sinh viên CNTT

Trang web cá nhân tĩnh (HTML/CSS/JS thuần, không cần framework), phong cách
tối giản lấy cảm hứng từ giao diện trình soạn thảo code: cột số dòng chạy dọc
trang, thanh trạng thái kiểu terminal, và các khối nội dung được gắn nhãn như
một spec sheet kỹ thuật.

## Cấu trúc file

```
├── index.html   # Nội dung trang
├── style.css    # Toàn bộ giao diện
├── script.js    # Hiệu ứng số dòng + hiệu ứng cuộn hiện dần
└── README.md
```

## 1. Tuỳ chỉnh nội dung

Mở `index.html` và sửa trực tiếp:

- **Tên, vai trò, mô tả** — trong phần `<section class="hero">`
- **Link liên hệ** (email, GitHub, LinkedIn, CV) — trong `.hero__links`
- **Công nghệ** — trong phần `STACK`, sửa các thẻ `<li>`
- **Dự án** — trong phần `BUILD LOG`, mỗi dự án là một khối `<article class="project">`
- **Học tập / kinh nghiệm** — trong phần `TIMELINE`
- Màu sắc, font chữ nằm gọn trong phần `:root` ở đầu file `style.css` nếu bạn muốn đổi tông màu

Nhớ thay `khang.nguyen@example.com` và `yourusername` bằng thông tin thật của bạn,
và thêm file CV vào thư mục rồi trỏ lại đường dẫn trong nút "cv.pdf".

## 2. Xem thử trên máy

Không cần cài gì thêm — chỉ cần mở `index.html` bằng trình duyệt.
Hoặc chạy một server tĩnh đơn giản:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## 3. Đưa lên GitHub Pages (miễn phí)

1. Tạo một repository mới trên GitHub, ví dụ đặt tên `portfolio`.
2. Đẩy 3 file (`index.html`, `style.css`, `script.js`) lên repo đó:
   ```bash
   git init
   git add .
   git commit -m "Trang cá nhân đầu tiên"
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```
3. Vào **Settings → Pages** trong repo.
4. Ở mục **Build and deployment**, chọn **Source: Deploy from a branch**,
   Branch chọn **main** và thư mục **/ (root)**, rồi bấm **Save**.
5. Sau khoảng 1–2 phút, trang sẽ chạy tại:
   `https://<username>.github.io/portfolio/`

   > Nếu muốn trang chạy ngay ở `https://<username>.github.io/` (không có
   > `/portfolio`), đặt tên repo đúng là `<username>.github.io`.

## Ghi chú

- Trang không dùng thư viện ngoài nào ngoài Google Fonts (Space Grotesk,
  Inter, JetBrains Mono) — tải qua CDN nên không cần cài đặt.
- Đã tôn trọng `prefers-reduced-motion` cho người dùng tắt hiệu ứng chuyển động.
- Responsive từ desktop xuống mobile; cột số dòng tự ẩn trên màn hình hẹp.
