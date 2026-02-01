// Mỗi lần xử lý một yêu cầu gia hạn:

// Hỏi: "Có yêu cầu gia hạn mới không? (có/không)"
// Nếu "không" → kết thúc chương trình
// Nếu "có" → tiếp tục xử lý
// Nhập thông tin yêu cầu gia hạn:
// Tên bạn đọc
// Tên sách
// Số ngày đã mượn hiện tại (số nguyên ≥ 1)
// Số ngày muốn gia hạn thêm (số nguyên ≥ 1)
// Quy tắc kiểm tra & xử lý (thực hiện theo thứ tự ưu tiên):
// Điều kiện kiểm tra

// Kết quả xử lý

// Thông báo hiển thị

// Số ngày đã mượn + gia hạn > 60 ngày

// Không được phép gia hạn

// "Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa"

// Số ngày đã mượn > 45 ngày

// Không được gia hạn (quá hạn lâu)

// "Không được gia hạn: Đã mượn quá lâu (>45 ngày)"

// Các trường hợp còn lại (tổng ≤ 30 ngày)

// Gia hạn bình thường

// "Gia hạn thành công"


// Khi thủ thư chọn dừng (nhập "không"), in thống kê ca làm việc:
// Số lần gia hạn thành công
// Số lần gia hạn không thành công 
let extend = prompt("Có yêu cầu gia hạn mới không? (có/không):").toLowerCase();
let successfulExtensions = 0;
let failedExtensions = 0;

while (extend === "có" || extend === "co") {
    console.log("\n----- THÔNG TIN YÊU CẦU GIA HẠN -----");
    
    let readerName = prompt("Tên bạn đọc:");
    let bookName = prompt("Tên sách:");
    let daysBorrowed = parseInt(prompt("Số ngày đã mượn hiện tại (từ 1 trở lên):"));
    
    while (isNaN(daysBorrowed) || daysBorrowed < 1) {
        daysBorrowed = parseInt(prompt("Số ngày đã mượn phải là số nguyên từ 1 trở lên! Vui lòng nhập lại:"));
    }
    let daysExtension = parseInt(prompt("Số ngày muốn gia hạn thêm (từ 1 trở lên):"));
    while (isNaN(daysExtension) || daysExtension < 1) {
        daysExtension = parseInt(prompt("Số ngày muốn gia hạn phải là số nguyên từ 1 trở lên! Vui lòng nhập lại:"));
    }

    console.log("Tên bạn đọc: ", readerName);
    console.log("Tên sách: ", bookName);
    console.log("Số ngày đã mượn hiện tại: ", daysBorrowed);
    console.log("Số ngày muốn gia hạn thêm: ", daysExtension);

    let totalDays = daysBorrowed + daysExtension;

    if (totalDays > 60) {
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        failedExtensions++;
    } else if (daysBorrowed > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        failedExtensions++;
    } else {
        console.log("Gia hạn thành công");
        successfulExtensions++;
    }

    extend = prompt("Có yêu cầu gia hạn mới không? (có/không):").toLowerCase();
}

console.log(`\nSố lần gia hạn thành công: ${successfulExtensions}`);
console.log(`Số lần gia hạn không thành công: ${failedExtensions}`);