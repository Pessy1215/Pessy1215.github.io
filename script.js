// 播放影片
const video = document.querySelector('video');
video.play();

// 當滾動時添加或刪除頁面頂部陰影
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 點擊頂部導航時平滑滾動到相應部分
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: 'smooth'
    });
  });
});