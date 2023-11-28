// Toán tử ++ và -- : Về bản chát thì hai toán tử này được sử dụng để tăng hoặc giảm giá trị cho trc
// tuy nhiên, cách sử dụng của chúng lại khác nhau

// let number = 10;
// Tiền tố
// Bước 1: Thực hiện việc cộng hoặc trừ giá trị của biến number: => number = 9
// Bước 2: Trả về kết quả vừa thực hiện của biến number: => number = 9
// let output = --number;
// console.log("Output ", output); => number = 9

// Hậu tố
// Bước 1: Tạo ra 1 bién coppy từ giá trị trước đó: numberCoppy = 10
// Bước 2: Thực hiện tính toán cho biến number: number = number + 1 => number = 11
// BƯớc 3: Trả về kết quả từ biến coppy
// let output = number++;
// console.log("Output ", output); => number = 10

// Bài toán: thực hiện phép tính sau:
// let output = number++ - --number;
// console.log("Output ", output);


// Vòng lặp for
// Cú pháp: for( giá trị khởi tạo; điều kiện chạy/dừng; tăng/giảm ) {}
// for (initialValue; condition; increase/decrease){}

// console.log ra dãy số từ 1-10
// for(let i = 1; i <= 10; i++) {
//     console.log("Lần lặp thứ: ", i);
// }

// Nguyên lí hoạt động
// Bước 1: Khi vòng lặp for được chạy, trong lần đầu tiên thì nó sẽ lấy giá trị khởi tạo (let i=1) để
// so sánh với điều kiện
// Bước 2: Nếu điều kiện thoả mãn (1<=1000) thì nhận giá trị là TRUE
// Bước 3: Lọt vào trong khối lệnh để xử lí logic
// Bước 4: Sau khi xử lý logic xong thì nó sẽ quay lại form để tăng giá trị lên 1 đơn vị và nó sẽ
// quay lại kiểm tra điều kiện (2 <= 1000)
// Bước 5: Nếu điều kiện ko thoả mãn (FALSE) thì vòng lặp sẽ kết thúc 
// => Vòng lặp for được sử dụng khi chúng ta biết trước được số lần lặp 

// Lặp qua các số từ 1-1000 và in ra các số chẵn và các số lẻ

// for(let i = 1; i <= 10000; i++) {
//     if (i % 2 === 0) {
//         console.log("Là số chẵn", i);
//     } else {
//         console.log("Là số lẻ", i);
//     }
// }

// Giảm dãy số từ 10 về 1 
// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Vòng lặp while ( không xác định trước được số lần lặp)
// Cú pháp: 
// while(condition) {
//     increase/decrease;
//     logic
// }

// let i = 1;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// Láy lựa chọn từ phía client
// Nếu như chọn 1 thì in ra thông báo là Nhập tên sản phẩm
// Nếu như chọn 2 thì in ra thông báo là In ra sản phẩm
// Nếu như chọn 3 thì in ra thông báo là Xuất hoá đơn
// Nếu như chọn 4 thì in ra thông báo là Nhập sai lựa chọn

// Bước 1: dùng hàng promt để lấy lựa chọn.
// Bước 2 thiêt lập vòng lặp while với số lần lặp hợp lý
// Bước 3: Sử dụng swtich-case để bắt lựa chọn

// let choose = 0;

// while ( choose !== 4) {
//     choose = +prompt ("Mời bạn nhập lựa chọn: ");
//     switch (choose) {
//         case 1:
//             console.log("Nhập tên sản phẩm");
//             break;
//         case 2:
//             console.log("In ra sản phẩm");
//             break;
//         case 3:
//             console.log("Xuất hoá đơn");
//             break;
//         case 4:
//             console.log("Thoát chương trình");
//             break;
//         default: console.log("Nhập sai lựa chọn");
//             break;
//     }
// }

// Vòng lặp do while: Nó sẽ chạy ít nhất 1 lần vào trong do rồi mới kiểm tra điều kiện.
// let choose = 0;
// do {
//     choose = parseInt(prompt("Mời bạn nhập lựa chọn: "));
//     switch (choose) {
//                 case 1:
//                     console.log("Nhập tên sản phẩm");
//                     break;
//                 case 2:
//                     console.log("In ra sản phẩm");
//                     break;
//                 case 3:
//                     console.log("Xuất hoá đơn");
//                     break;
//                 case 4:
//                     console.log("Thoát chương trình");
//                     break;
//                 default: console.log("Nhập sai lựa chọn");
//                     break;
//             }
//         } while (choose !== 4);

// for (let index = 0; index < 10; index++) {
//     if (index > 5){
//         break;
//     }
//     console.log(index);
// }

// for (let index = 0; index < 10; index++) {
//     if (index % 2 === 0){
//         continue;
//     }
//     console.log(index);
// }

// for (let i = 0; i < 10; i++) {
//     console.log("Bảng cửu chương", i);
//     for (let j = 1; j <= 10; j++) {
//        console.log(i + " + " + j + " = " +( i - j));
//     }
// }

// Template String. Cú pháp: ``
let age = 24;
let myName = "NHL"
console.log(`Tôi tên là: ${myName}, tôi ${age}  tuổi`)