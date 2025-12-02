const reels = [
  {
    isMuted: true,
    caption: "Daily workout motivation 💪",
    video: "./videos/4.mp4",
    userProfile: "./Images/2.jpg",
    username: "fitness_guru",
    likeCount: 890,
    isLiked: true,
    commentCount: 42,
    shareCount: 18,
    isFollowed: true
  },
  {
    isMuted: true,
    caption: "Enjoying the sunset vibes 🌅",
    video: "./videos/1.mp4",
    userProfile: "./Images/1.jpg",
    username: "sunset_lover",
    likeCount: 1200,
    isLiked: false,
    commentCount: 85,
    shareCount: 30,
    isFollowed: false
  },
  {
    isMuted: true,
    caption: "Trying a new recipe today 🍝",
    video: "./videos/3.mp4",
    userProfile: "./Images/3.jpg",
    username: "foodie_life",
    likeCount: 2300,
    isLiked: false,
    commentCount: 120,
    shareCount: 44,
    isFollowed: false
  }
];

var allReels = document.querySelector('.all-reels');

function addData() {
  let clutter = "";

  reels.forEach(function (elem, idx) {
    clutter += `
      <div class="reels">
        <div id="${idx}" class="muted">
          <h4>${elem.isMuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-fill"></i>'}</h4>
        </div>

        <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
<div class="big-like"><i class="ri-heart-3-fill"></i></div>
        <div class="bottom">
          <div class="user">
            <img src="${elem.userProfile}">
            <h3>${elem.username}</h3>
            <button id="${idx}" class="follow">${elem.isFollowed ? 'Following' : 'Follow'}</button>
          </div>

          <p>${elem.caption}</p>

          <div class="right">
            <div id="${idx}" class="o like-icon">
              <h4>${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>

            <div class="o comment-icon">
              <h4><i class="ri-chat-1-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>

            <div class="o share-icon">
              <h4><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>

            <div class="o more-icon">
              <h4><i class="ri-more-fill"></i></h4>
            </div>
          </div>
        </div>
      </div>`;
  });

  allReels.innerHTML = clutter;
}

addData();

allReels.addEventListener('click', function (dets) {

  let likeBtn = dets.target.closest(".like-icon");
  if (likeBtn) {
    let index = likeBtn.id;

    reels[index].isLiked = !reels[index].isLiked;
    reels[index].likeCount += reels[index].isLiked ? 1 : -1;

    addData();
    return;
  }

  let followBtn = dets.target.closest(".follow");
  if (followBtn) {
    let index = followBtn.id;

    reels[index].isFollowed = !reels[index].isFollowed;

    addData();
    return;
  }




  let muteBtn = dets.target.closest(".muted");
if (muteBtn) {
  let index = muteBtn.id;

  
  reels.forEach(function (r) {
    r.isMuted = true;
  });


  reels[index].isMuted = false;

  addData();
  return;
}

});

