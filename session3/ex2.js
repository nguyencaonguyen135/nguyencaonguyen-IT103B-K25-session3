// Hỏi thủ thư: "Hôm nay có bao nhiêu lượt trả sách?" (số nguyên dương)
// Sử dụng vòng lặp để nhập thông tin từng lượt trả sách:
// Tên người trả
// Tên sách
// Số ngày đã mượn thực tế (người dùng nhập số nguyên từ 1 trở lên)
// Với mỗi lượt trả, chương trình cần:
// Kiểm tra số ngày đã mượn có hợp lệ không (phải là số nguyên ≥ 1) → Nếu không hợp lệ → yêu cầu nhập lại cho đến khi đúng
// Sau khi có số ngày hợp lệ, kiểm tra tình trạng:
// Nếu số ngày ≤ 14 → "Trả đúng hạn"
// Nếu số ngày = 15 đến 21 → "Trả muộn nhẹ" + "Phạt nhắc nhở"
// Nếu số ngày > 21 → "Quá hạn nghiêm trọng" + "Cần ghi biên bản phạt"
// Sau khi nhập xong tất cả lượt trả, in ra thống kê:
// Tổng số lượt trả sách
// Số lượt trả muộn (≥ 15 ngày)
let soLuotTra = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách?"));

while (isNaN(soLuotTra) || soLuotTra <= 0) {
    soLuotTra = parseInt(prompt("Vui lòng nhập số nguyên dương! Hôm nay có bao nhiêu lượt trả sách?"));
}
let luotTraMuon = 0;

for (let i = 1; i <= soLuotTra; i++) {
    console.log(`\n========== LƯỢT TRẢ THỨ ${i} ==========`);
    
    let tenNguoiTra = prompt(`Lượt ${i}: Nhập tên người trả:`);
    let tenSach = prompt(`Lượt ${i}: Nhập tên sách:`);
    let soNgayDaMuon = parseInt(prompt(`Lượt ${i}: Nhập số ngày đã mượn (từ 1 trở lên):`));

    while (isNaN(soNgayDaMuon) || soNgayDaMuon < 1) {
        soNgayDaMuon = parseInt(prompt("Số ngày đã mượn phải là số nguyên từ 1 trở lên! Vui lòng nhập lại:"));
    }

    console.log(`Người trả: ${tenNguoiTra}`);
    console.log(`Tên sách: ${tenSach}`);
    console.log(`Số ngày đã mượn: ${soNgayDaMuon} ngày`);
    
    if (soNgayDaMuon <= 14) {
        console.log("Trả đúng hạn");
    } else if (soNgayDaMuon >= 15 && soNgayDaMuon <= 21) {
        console.log("Trả muộn nhẹ");
        console.log("Phạt nhắc nhở");
        luotTraMuon++;
    } else {
        console.log("Quá hạn nghiêm trọng");
        console.log("Cần ghi biên bản phạt");
        luotTraMuon++;
    }
}
console.log(`\nTổng số lượt trả sách: ${soLuotTra}`);
console.log(`Số lượt trả muộn (≥ 15 ngày): ${luotTraMuon}`);