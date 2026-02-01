let totalRequest = 0;
let successRequest = 0;
let refuseRequest = 0;
let awaitingRequest = 0;
let personRead;
let bookCode;
let nameBook;
let waitDay;
let priorityLevel;
while (true) {
    let question = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)").toLowerCase();
    if (question === "không") {
        break;
    }
    if (question === "có") {
        personRead = prompt("Nhập tên bạn đọc:");
        bookCode = prompt("Nhập mã sách muốn đặt trước:");
        nameBook = prompt("Nhập tên sách:");
        while (true) {
            waitDay = Number(prompt("Số ngày dự kiến chờ (người dùng ước lượng, số nguyên ≥ 1)"));
            if (waitDay >= 1) {
                break;
            } else {
                alert("Số ngày không hợp lệ, vui lòng nhập lại !!!");
            }
        }
        while (true) {
            priorityLevel = Number(prompt("Nhập mức ưu tiên: 1.(Sinh viên bình thường) 2.(Giảng viên/Nghiên cứu sinh) 3.(Nhân viên thư viện / Đặc cách)"));

            if (priorityLevel === 1 || priorityLevel === 2 || priorityLevel === 3) {
                break;
            } else {
                alert("Mức độ ưu tiên không hợp lệ, vui lòng nhập lại !!!");
            }
        }

        if (waitDay > 45) {
            console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
            refuseRequest++;
        } else if (priorityLevel === 3) {
            console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
            successRequest++;
        } else if (priorityLevel === 2 && waitDay <= 30) {
            console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
            successRequest++;
        } else if (priorityLevel === 1 && waitDay <= 21) {
            console.log("Đặt trước thành công");
            successRequest++;
        } else {
            console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
            awaitingRequest++;
        }
        totalRequest++;
    } else {
        alert("Câu trả lời không hợp lệ, vui lòng nhập có hoặc không !!!");
    }
}
console.log("Tổng số yêu cầu đã xử lý:", totalRequest);
console.log("Số yêu cầu đặt trước thành công:", successRequest);
console.log("Số yêu cầu bị từ chối:", refuseRequest);
console.log("Số yêu cầu chờ xét duyệt:", awaitingRequest);