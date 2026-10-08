const findDeviceById = (devices, targetId) => {
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === targetId) {
      return devices[i];
    }
  }
  return null;
};

// Hàm cập nhật trạng thái thiết bị an toàn
const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  // Cập nhật tên nếu có truyền vào
  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  // Sửa lỗi Falsy: Kiểm tra khác undefined để nhận giá trị false
  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  // Sửa lỗi Falsy: Kiểm tra khác undefined để nhận giá trị 0
  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

// Dữ liệu mẫu kiểm thử
const smartDevices = [
  { id: "AC_01", name: "Điều hòa phòng khách", isActive: true, powerWatts: 1800 },
  { id: "LAMP_01", name: "Đèn ngủ", isActive: true, powerWatts: 25 }
];

// Test case 1: Tắt điều hòa (isActive: false)
updateDevice(smartDevices, "AC_01", { isActive: false });

// Test case 2: Hạ công suất đèn ngủ về 0W (powerWatts: 0)
updateDevice(smartDevices, "LAMP_01", { powerWatts: 0 });

console.log("Danh sách thiết bị sau cập nhật:");
console.log(smartDevices);