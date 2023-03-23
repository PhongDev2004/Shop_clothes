const loginForm = document.getElementById('order-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn hành động gửi biểu mẫu mặc định

    // Nhận giá trị biểu mẫu
    const fullName = document.getElementById('full-name').value;
    const idCard = document.getElementById('id-card').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const shirt = document.getElementById('shirt').value;
    const birthdate = document.getElementById('birthdate').value;
    const size = document.getElementById('size').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Làm điều gì đó với các giá trị biểu mẫu (ví dụ: gửi dữ liệu đến máy chủ)
    console.log(fullName, idCard, email, gender, phoneNumber, shirt, birthdate, size, paymentMethod);

    // Reset form
    loginForm.reset();
});