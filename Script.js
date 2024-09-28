
const listImage = document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const length = imgs.length
let current = 0

const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')

    } else {
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 3000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000)
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if (current == 0) {
        current = length - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    } else {
        current --
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000)
})

// Lấy danh sách các ảnh trong slide show
const images = document.querySelectorAll('.slide-show1 .list-images img');
// Lấy danh sách các chỉ mục của các ảnh
const indexItems = document.querySelectorAll('.slide-show1 .index-items');

let currentIndex = 0;
const intervalTime = 3000; // Thời gian chuyển đổi giữa các slide (5 giây trong ví dụ này)

function nextSlide() {
    // Ẩn tất cả các ảnh
    images.forEach(image => {
        image.style.display = 'none';
    });
    // Loại bỏ lớp active từ tất cả các chỉ mục
    indexItems.forEach(item => {
        item.classList.remove('active1');
    });

    // Hiển thị ảnh tiếp theo
    images[currentIndex].style.display = 'block';
    // Thêm lớp active cho chỉ mục tương ứng
    indexItems[currentIndex].classList.add('active1');
}

function startSlideShow() {
    setInterval(() => {
        // Tăng chỉ số hiện tại hoặc quay lại slide đầu nếu đã ở slide cuối cùng
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        nextSlide();
    }, intervalTime); // Bắt đầu chạy slide tự động
}

// Sự kiện khi nhấn nút chuyển slide sang trái
document.querySelector('.btn-left1').addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    nextSlide();
});

// Sự kiện khi nhấn nút chuyển slide sang phải
document.querySelector('.btn-right1').addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    nextSlide();
});

// Gọi hàm để bắt đầu chạy slide show khi trang được tải
startSlideShow();
