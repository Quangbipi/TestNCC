const toggleBtn = document.getElementById("toggle-sidebar");
const slidebar = document.querySelector('.slidebar');
console.log('abcde')
toggleBtn.addEventListener('click', function () {
    console.log('show')
    slidebar.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    // Kiểm tra xem sự kiện click có diễn ra trên slidebar hay không
    if (!slidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
      // Nếu không, ẩn slidebar bằng cách gỡ bỏ lớp 'show'
      slidebar.classList.remove('show');
    }
  });