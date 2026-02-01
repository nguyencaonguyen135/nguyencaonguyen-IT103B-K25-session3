let soLuotMuon = parseInt(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

while (isNaN(soLuotMuon) || soLuotMuon <= 0) {
    soLuotMuon = parseInt(prompt("Vui lòng nhập số nguyên dương! Hôm nay có bao nhiêu lượt mượn sách?"));
}

let luotMuonThanhCong = 0;
let luotVuotQuyDinh = 0;

for (let i = 1; i <= soLuotMuon; i++) {
    console.log(`\n======= LƯỢT MƯỢN THỨ ${i} =======`);
    
    let tenNguoiMuon = prompt(`Lượt ${i}: Nhập tên người mượn:`);
    let tenSach = prompt(`Lượt ${i}: Nhập tên sách:`);
    let soNgayMuon = parseInt(prompt(`Lượt ${i}: Nhập số ngày mượn (1-30):`));

    while (isNaN(soNgayMuon) || soNgayMuon < 1 || soNgayMuon > 30) {
        soNgayMuon = parseInt(prompt("Số ngày mượn phải từ 1 đến 30! Vui lòng nhập lại:"));
    }
    
    console.log(`Người mượn: ${tenNguoiMuon}`);
    console.log(`Tên sách: ${tenSach}`);
    console.log(`Số ngày mượn: ${soNgayMuon} ngày`);
    
    if (soNgayMuon > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
        luotVuotQuyDinh++;
    } else {
        console.log("Mượn thành công");
        luotMuonThanhCong++;
    }
}
console.log(`Tổng số lượt mượn: ${soLuotMuon}`);
console.log(`Số lượt mượn thành công: ${luotMuonThanhCong}`);
console.log(`Số lượt vượt quy định: ${luotVuotQuyDinh}`);
