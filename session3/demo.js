let password = "";
let count = 0;
let isLogInSuccessfull;

do {
    password = prompt ("Vui lòng nhập mật khẩu ");
    if (password !== "admin123") {
        count++;

        if (count === 3) {
            console.log("Hệ thống bị khóa");
        }
    } else {
        alert ("Đăng nhập thành công");
        break;
    }
} while (password !== "admin123" && count < 3);

if (isLogInSuccessfull) {
    let choice;
    let quantity;
    let totalPrice = 0;

    do {
        choice = prompt ("Nhập lựa chọn: ");
        switch (choice) {
            case 1:
                quantity = prompt ("Vui lòng nhập số luợng sách");
                for (let i = 1; i <= quantity; i ++) {
                    let price = +prompt (`Nhập giá tiền của cuốn sách thứ ${1}`);

                    if (price <= 0 || isNaN ) {

                    }
                    totalPrice += price;
                }
                break;
            case 2:
                console.log("Lựa chọn 2");

                for (let i = 1; i <= 3 ; i++){   
                    for (let j = 1; j <= 5; j++) {
                        if (i === 2 && j === 3) {
                            console.log("Đang sửa chữa");
                            continue;
                        }
                        console.log(`Khu vực`);

                    }                  
                }
                break;
            case 3:
                console.log("Kết thúc chương trình");
                break;
            default:
                console.log("Nhập sai lựa chọn");
                break;
        }
    } while (choice != 3);
}