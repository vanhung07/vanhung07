// ============================================================
// 1) Gutter: sinh số dòng kiểu trình soạn thảo code, phủ hết
//    chiều cao trang, cập nhật lại khi cửa sổ resize.
// ============================================================
function buildGutter() {
  const gutter = document.getElementById('gutter');
  if (!gutter) return;

  gutter.innerHTML = '';
  const pageHeight = document.body.scrollHeight;
  const lineGap = 22; // khoảng cách giữa các số dòng (px)
  const count = Math.ceil(pageHeight / lineGap);

  const frag = document.createDocumentFragment();
  for (let i = 1; i <= count; i++) {
    const span = document.createElement('span');
    span.style.top = `${i * lineGap}px`;
    span.textContent = String(i).padStart(3, '0');
    frag.appendChild(span);
  }
  gutter.appendChild(frag);
}

buildGutter();
window.addEventListener('resize', debounce(buildGutter, 200));
window.addEventListener('load', buildGutter);

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// ============================================================
// 2) Reveal on scroll: các section mờ dần + trượt lên khi
//    xuất hiện trong khung nhìn.
// ============================================================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Trình duyệt không hỗ trợ IntersectionObserver: hiện luôn
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
