1. Phân tích nguyên nhân kỹ thuật

- Dòng lệnh gây lỗi: `if (updatedData.isActive)` và `if (updatedData.powerWatts)`.
- Nguyên nhân: Trong JavaScript, `false` và `0` là các giá trị Falsy. Khi truyền `isActive: false` (tắt thiết bị) hoặc `powerWatts: 0` (hạ công suất về 0W), các điều kiện `if` trên đều bị đánh giá thành `false`, khiến khối lệnh gán dữ liệu bị bỏ qua.
- Hệ quả: Thiết bị không thể tắt được và không thể đưa công suất về 0W, gây sai lệch trạng thái thực tế của hệ thống Smart Home.
- Khắc phục: Kiểm tra tính tồn tại của thuộc tính bằng điều kiện `!== undefined` thay vì ép kiểu Boolean qua `if (value)`.

2. Bảng Test Cases đối chứng

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
| --- | --- | --- | --- |
| Tắt thiết bị (isActive: false) | updatedData: { isActive: false } | isActive vẫn giữ nguyên là true (bị bỏ qua) | isActive được cập nhật thành false |
| Đưa công suất về 0W (powerWatts: 0) | updatedData: { powerWatts: 0 } | powerWatts giữ nguyên giá trị cũ (bị bỏ qua) | powerWatts được cập nhật thành 0 |