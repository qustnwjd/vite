// main.ts: 이미지 갤러리 렌더링
import './style.css';

// 샘플 이미지 파일명 (public/images 폴더에 이미지를 추가하세요)
const images = [
  'https://www.donga.ac.kr/resources/_Img/Common/logo_w.png',
  'https://www.donga.ac.kr/resources/_Img/Common/logo_w.png'
];

const app = document.getElementById('app');

if (app) {
  const gallery = document.createElement('div');
  gallery.className = 'gallery';

  images.forEach((img) => {
    const imgElem = document.createElement('img');
    imgElem.src = `/images/${img}`;
    imgElem.alt = img;
    gallery.appendChild(imgElem);
  });

  const title = document.createElement('h1');
  title.textContent = '이미지 갤러리';
  title.style.textAlign = 'center';
  title.style.marginBottom = '24px';

  app.appendChild(title);
  app.appendChild(gallery);
}
