let math = Number(prompt("Nhập điểm môn toán:"));
let physics = Number(prompt("Nhập điểm môn lý"));
let chemistry = Number(prompt("Nhập điểm môn hóa"));
let diemTrungbinh = (math + physics + chemistry) / 3;
alert("Điểm trung bình 3 môn của bạn là" + diemTrungbinh.toFixed(1));