const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  searchInputEl.value = "";

});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
});

window.addEventListener('scroll', _.throttle(() => {
  
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2,{
      x: 0,
    });

  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2,{
      x: 100,
    });
  }
}, 300))
// _.throttle(함수, 시간`)



const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((fadeEl, index)=>{
  gsap.to(fadeEl, 1,{
    delay: (index + 1) * .7,
    opacity: 1,
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 몇 개를 보여줄지
  spaceBetween: 10, // 사이 간격
  centeredSlides: true, //
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true,
  },
  navigation:{
   prevEl: '.promotion .swiper-prev',
   nextEl: '.promotion .swiper-next' ,
  },

});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }

})


// 보이거나 안 보이거나 하는 영역은 css로 처리하는 것이 바람직함
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',() => {
  isHidePromotion = !isHidePromotion; // not 
  if (isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
})
function random(min, max){
  return parseFloat((Math.random() *(max-min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOuteaseInOut,
      delay: random(0, delay),
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //0과 1사이의 지점. 하단 80%
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear()