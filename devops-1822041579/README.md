# devops-1822041579

Bài tập cá nhân: triển khai website tự động với GitHub Actions.

## Chạy trên GitHub
1. Tạo repository Public tên `devops-1822041579`.
2. Đưa các file trong thư mục này lên nhánh `main`.
3. Vào **Settings → Pages**, chọn **Source: GitHub Actions**.
4. Mở tab **Actions** để theo dõi pipeline.
5. Website sau khi deploy có dạng: `https://<username>.github.io/devops-1822041579/`.

## Thực nghiệm pipeline thất bại
- Tạm thời xóa thẻ `<title>...</title>` trong `index.html`, commit và push. Job `check` sẽ thất bại ở bước kiểm tra title và job `deploy` bị bỏ qua do `needs: check`.
- Khôi phục thẻ title, đổi nội dung thành `Phiên bản 2.0`, commit và push để pipeline chạy thành công.
