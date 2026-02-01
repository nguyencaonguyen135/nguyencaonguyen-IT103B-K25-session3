let totalBook = 0;
let lostBook = 0;
let bookStock = 0;
let manyBook = 0;
let normalBook = 0;
let nameBook;
let bookCode;
let quantityBook;
let statusBook;

while (true) {
    let question = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").toLowerCase();
    if (question === "không") {
        break;
    }
    if (question === "có") {
        while (true) {
            bookCode = prompt("Nhập mã sách:");

            if (bookCode !== "") {
                break;
            } else {
                alert("Mã sách không được để trống !!!");
            }
        }
        nameBook = prompt("Nhập tên sách:");
        while (true) {
            quantityBook = Number(prompt("Nhập số lượng sách (>= 0):"));

            if (quantityBook >= 0) {
                break;
            } else {
                alert("Số lượng sách không hợp lệ, vui lòng nhập lại !!!");
            }
        }
        while (true) {
            statusBook = Number(prompt("Tình trạng sách: 1.(Bình thường) 2.(Mất)"));
            
            if (statusBook === 1 || statusBook === 2) {
                break;
            } else {
                alert("Tình trạng sách không hợp lệ, vui lòng nhập lại !!!");
            }
        }
        if (statusBook === 2) {
            console.log("Sách mất");
            lostBook++;
        } else if (statusBook === 1 && quantityBook === 0) {
            console.log("Sách hết (vẫn còn trong hệ thống)");
            bookStock++;
        } else if (statusBook === 1 && quantityBook >= 10) {
            console.log("Sách tồn kho nhiều");
            manyBook++;
        } else {
            console.log("Sách tồn kho bình thường");
            normalBook++;
        }
        totalBook++;
    } else {
        alert("Vui lòng nhập có hoặc không");
    }
}

console.log("Tổng số sách đã kiểm kê: ", totalBook, " cuốn");
console.log("Số sách mất: ", lostBook, " cuốn");
console.log("Số sách hết hàng: ", bookStock, " cuốn");