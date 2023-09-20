// ==================================== Post Slides ========================================

let row = document.querySelector('.row-slide')

let post_slides = [
  {
    img: './assest/img/p8.jpg',
    p: 'Queen'
  },
  {
    img: './assest/img/p2.jpg',
    p: 'Rush_hill'
  },
  {
    img: './assest/img/p3.jpg',
    p: 'Serah'
  },
  {
    img: './assest/img/p4.jpg',
    p: 'Next_shy'
  },
  {
    img: './assest/img/p5.jpg',
    p: 'Ruth'
  },
  {
    img: './assest/img/p6.jpg',
    p: 'Angel'
  },
  {
    img: './assest/img/p7.jpg',
    p: 'Adam'
  },
  {
    img: './assest/img/p1.jpg',
    p: 'Ronaldo'
  },
  {
    img: './assest/img/p9.jpg',
    p: 'Lura'
  },
  {
    img: './assest/img/p10.jpg',
    p: 'Helen'
  },
  {
    img: './assest/img/p11.jpg',
    p: 'Queen'
  },
  {
    img: './assest/img/p12.jpg',
    p: 'Blessing'
  },
  {
    img: './assest/img/p13.jpg',
    p: 'Recheal'
  },
]

post_slides.forEach(pics => {
  row.innerHTML += `
  <a href="">
  <div class="profile-icon">
  <div>
    <img src="${pics.img}" alt="">
  </div>
  <p>${pics.p}</p>
  </div>
  </a>
  `
})

// ========================================= Follow ===============================================

let right = document.querySelector('.followers');

let to_follow = [
  {
    img: './assest/img/p13.jpg',
    h4: 'Chocolaty Queen',
    p: 'Queen_Choco'
  },
  {
    img: './assest/img/p12.jpg',
    h4: 'Jelly Cuddles',
    p: 'Cuddles_Jy'
  },
  {
    img: './assest/img/p11.jpg',
    h4: 'Kara',
    p: 'Kara_Smile'
  },
  {
    img: './assest/img/p10.jpg',
    h4: 'Candycane Missy',
    p: 'Missy_Candy'
  },
  {
    img: './assest/img/p9.jpg',
    h4: 'Pretty Lil Princess',
    p: 'Lil_Pretty'
  }
]


to_follow.forEach(image => {
  right.innerHTML += `
  <div class="user_info">
  <a href="#">
    <div class="img_cover">
      <div class="img">
        <img src="${image.img}" alt="">
      </div>
      <div>
        <a href="#">
          <h4>${image.h4}</h4>
        </a>
        <p class="gray">${image.p}</p>
      </div>
    </div>
  </a>
  <div>
    <a href="#" class="switch">Follow</a>
  </div>
</div>
  `
})


// ============================================= Dashboard ============================================

let dashboard = document.querySelector('.dashboard');

let people_post = [
  {
    user_img: './assest/img/p2.jpg',
    user_name: 'Hex_gen',
    user_views: '.12h',
    user_post: './assest/img/profile7.jpeg',
    comments1: './assest/img/p8.jpg',
    comments2: './assest/img/p3.jpg',
    comments3: './assest/img/p10.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p3.jpg',
    user_name: 'Trend_TV',
    user_views: '.30.m',
    user_post: './assest/img/profile1.jpeg',
    comments1: './assest/img/p5.jpg',
    comments2: './assest/img/p1.jpg',
    comments3: './assest/img/p9.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p13.jpg',
    user_name: 'I_Hope_You_See',
    user_views: '.6h',
    user_post: './assest/img/profile12.jpeg',
    comments1: './assest/img/p2.jpg',
    comments2: './assest/img/p6.jpg',
    comments3: './assest/img/p12.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p8.jpg',
    user_name: 'Code_all_day',
    user_views: '.3d',
    user_post: './assest/img/profile4.jpeg',
    comments1: './assest/img/p13.jpg',
    comments2: './assest/img/p10.jpg',
    comments3: './assest/img/p9.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p9.jpg',
    user_name: 'Love_beauty',
    user_views: '.8d',
    user_post: './assest/img/profile3.jpeg',
    comments1: './assest/img/p13.jpg',
    comments2: './assest/img/p4.jpg',
    comments3: './assest/img/p1.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p11.jpg',
    user_name: 'Only_You',
    user_views: '.18m',
    user_post: './assest/img/profile5.jpeg',
    comments1: './assest/img/p10.jpg',
    comments2: './assest/img/8.jpg',
    comments3: './assest/img/p12.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p5.jpg',
    user_name: 'Educate_now',
    user_views: '.20h',
    user_post: './assest/img/profile6.jpeg',
    comments1: './assest/img/p1.jpg',
    comments2: './assest/img/p10.jpg',
    comments3: './assest/img/p11.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p13.jpg',
    user_name: 'Flex_ability',
    user_views: '.2s',
    user_post: './assest/img/profile8.jpeg',
    comments1: './assest/img/p8.jpg',
    comments2: './assest/img/p2.jpg',
    comments3: './assest/img/p13.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p1.jpg',
    user_name: 'Wire_news',
    user_views: '.20m',
    user_post: './assest/img/profile9.jpeg',
    comments1: './assest/img/p7.jpg',
    comments2: './assest/img/p4.jpg',
    comments3: './assest/img/p9.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p10.jpg',
    user_name: 'Pay_small',
    user_views: '.59m',
    user_post: './assest/img/profile10.jpeg',
    comments1: './assest/img/p10.jpg',
    comments2: './assest/img/p9.jpg',
    comments3: './assest/img/p12.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  },
  {
    user_img: './assest/img/p6.jpg',
    user_name: 'Military_service',
    user_views: '.7d',
    user_post: './assest/img/profile11.jpeg',
    comments1: './assest/img/p11.jpg',
    comments2: './assest/img/p6.jpg',
    comments3: './assest/img/p4.jpg',
    user_likes: "365, 699, 33",
    comment1: 'This is so beautiful i love it so much.',
    views: "1, 654, 334",
    comment2: 'Wow keep it Up ❤️.',
    comment3: "That's my Student Keep it up boy 🔥🔥🔥🔥🔥🔥."
  }
]


people_post.forEach(post => {
  dashboard.innerHTML += `
        <div>
          <div class="user_control">
            <div>
              <a href="#">
              <img src="${post.user_img}" alt="">
              <h5>${post.user_name}</h5>
              <p>${post.user_views}</p>
              </a>
            </div>
            <a href="#" class="material-symbols-outlined">
              more_horiz
            </a>
          </div>
          <div class="content">
            <img src="${post.user_post}" alt="">
          </div>
          <div class="boost">
            <div>
            <a href="#">
              <span class="material-symbols-outlined">
                favorite
              </span>
              <i class="bi bi-chat"></i>
              <i class="bi bi-send"></i>
              </a>
            </div>
            <a href="#" class="material-symbols-outlined">
              bookmark
            </a>
          </div>
          <div class="identify">
            <div class="num_likes">
              <div>
                <img src="${post.comments1}" alt="">
                <img src="${post.comments2}" alt="" class="negative">
                <img src="${post.comments3}" alt="" class="negative2">
              </div>
              <p>${post.user_likes} likes</p>
            </div>
            <p><a href="#" class="change">Chisco_Emmanuel</a> ${post.comment1}</p>
            <p class="views">View all ${post.views} comments</p>
            <p><a href="#" class="change">OpenLabsGH</a> ${post.comment2}</p>
            <p><a href="#" class="change">Felix_Botwe</a> ${post.comment3}</p>
            <form action="#">
              <textarea name="" id="" cols="1" rows="1" placeholder="Add a comment..."></textarea>
              <span class="material-symbols-outlined">
                sentiment_satisfied
              </span>
            </form>

          </div>
          </div>

  `
})

// ======================================= All Toggler ===================================================

let toggler = document.querySelector('.last');
let more = document.querySelector('.more');
let expand = document.querySelector('.expand');
let follow = document.querySelector('.following')

toggler.addEventListener('click', () => {
  more.classList.toggle('more-active');
});

expand.addEventListener('click', () => {
  follow.classList.toggle('follow-active');
});

// =============================================== Light / Dark Mode ========================================

let mode = document.querySelectorAll('.switch_mode');
let body = document.querySelector('body')

mode.forEach(touch => {
  touch.addEventListener('click', () => {
    body.classList.toggle('body-active')
  })
})











