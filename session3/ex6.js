// Chương trình ghi nhận và xử lý khiếu nại/phản hồi của bạn đọc tại thư viện

// Biến thống kê
let totalFeedback = 0;
let severeComplaint = 0;      // Mức 3
let mediumComplaint = 0;      // Mức 2
let minorComplaint = 0;       // Mức 1
let improvementSuggestion = 0;
let positiveFeedback = 0;

console.log("========================================");
console.log("  HỆ THỐNG GHI NHẬN PHẢN HỒI BẠN ĐỌC  ");
console.log("========================================");

// Vòng lặp chạy liên tục cho đến khi kết thúc ca
while (true) {
    // Hỏi có khiếu nại/phản hồi mới không
    let hasFeedback = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)").toLowerCase().trim();
    
    // Kiểm tra kết thúc ca
    if (hasFeedback === "không" || hasFeedback === "khong") {
        break; // Thoát vòng lặp, in báo cáo
    }
    
    // Nếu không phải "có" thì hỏi lại
    if (hasFeedback !== "có" && hasFeedback !== "co") {
        console.log("⚠️ Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    
    console.log("\n----- NHẬP THÔNG TIN PHẢN HỒI -----");
    
    // Nhập tên bạn đọc (không được để trống)
    let readerName = prompt("Tên bạn đọc:");
    while (!readerName || readerName.trim() === "") {
        readerName = prompt("Tên bạn đọc không được để trống! Vui lòng nhập lại:");
    }
    readerName = readerName.trim();
    
    // Nhập mã thẻ bạn đọc (có thể để trống)
    let cardId = prompt("Mã thẻ bạn đọc (có thể để trống):");
    cardId = cardId ? cardId.trim() : "Không có";
    
    // Nhập loại phản hồi
    let feedbackType = parseInt(prompt("Loại phản hồi:\n1 = Phàn nàn / Khiếu nại\n2 = Đề xuất cải thiện\n3 = Phản hồi tích cực / Khen ngợi\nNhập số (1-3):"));
    while (isNaN(feedbackType) || feedbackType < 1 || feedbackType > 3) {
        feedbackType = parseInt(prompt("Vui lòng nhập số từ 1 đến 3:"));
    }
    
    // Biến lưu mức độ nghiêm trọng (chỉ dùng cho khiếu nại)
    let severityLevel = 0;
    
    // Nếu là khiếu nại, hỏi mức độ nghiêm trọng
    if (feedbackType === 1) {
        severityLevel = parseInt(prompt("Mức độ nghiêm trọng:\n1 = Nhẹ (xử lý nhanh)\n2 = Trung bình\n3 = Nghiêm trọng (báo cáo lãnh đạo)\nNhập số (1-3):"));
        while (isNaN(severityLevel) || severityLevel < 1 || severityLevel > 3) {
            severityLevel = parseInt(prompt("Vui lòng nhập mức độ từ 1 đến 3:"));
        }
    }
    
    // Nhập nội dung ngắn gọn
    let content = prompt("Nội dung ngắn gọn (tham khảo):");
    
    // Tăng tổng số phản hồi
    totalFeedback++;
    
    // In thông tin phản hồi
    console.log(`\n📋 Phản hồi #${totalFeedback}`);
    console.log(`   Bạn đọc: ${readerName}`);
    console.log(`   Mã thẻ: ${cardId}`);
    
    // Xử lý và phân loại theo quy tắc
    if (feedbackType === 1 && severityLevel === 3) {
        // Khiếu nại nghiêm trọng
        severeComplaint++;
        console.log("   🔴 → Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    } else if (feedbackType === 1 && severityLevel === 2) {
        // Khiếu nại trung bình
        mediumComplaint++;
        console.log("   🟠 → Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    } else if (feedbackType === 1 && severityLevel === 1) {
        // Khiếu nại nhẹ
        minorComplaint++;
        console.log("   🟡 → Xử lý ngay tại quầy - Khiếu nại nhẹ");
    } else if (feedbackType === 2) {
        // Đề xuất cải thiện
        improvementSuggestion++;
        console.log("   💡 → Cảm ơn! Đề xuất đã được ghi nhận");
    } else if (feedbackType === 3) {
        // Phản hồi tích cực
        positiveFeedback++;
        console.log("   💚 → Cảm ơn bạn đã phản hồi tích cực!");
    }
    
    console.log("------------------------------------\n");
}

// In báo cáo tổng hợp khi kết thúc ca
console.log("\n========================================");
console.log("      BÁO CÁO TỔNG HỢP CUỐI CA        ");
console.log("========================================");
console.log(`📊 Tổng số phản hồi/khiếu nại đã xử lý: ${totalFeedback}`);
console.log("----------------------------------------");
console.log(`🔴 Số khiếu nại nghiêm trọng (mức 3): ${severeComplaint}`);
console.log(`🟠 Số khiếu nại trung bình (mức 2): ${mediumComplaint}`);
console.log(`🟡 Số khiếu nại nhẹ (mức 1): ${minorComplaint}`);
console.log(`💡 Số đề xuất cải thiện: ${improvementSuggestion}`);
console.log(`💚 Số phản hồi tích cực: ${positiveFeedback}`);
console.log("========================================");
console.log("        KẾT THÚC CA LÀM VIỆC          ");
console.log("========================================");
