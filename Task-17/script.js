const reels = [
  {
    username: "krishna_bhakti",
    dp: "https://m.media-amazon.com/images/I/61wJRtYWe0L.jpg",
    reels: "./Reels/video2.mp4",
    isFollow: true,
    isLike: false,
    shareCount: 12,
    likeCount: 220,
    commentCount: 34,
    reelstitle: "krishna prem",
  },
  {
    username: "devotee_priya",
    dp: "https://m.media-amazon.com/images/I/713LGWGuBpL._AC_UF894,1000_QL80_.jpg",
    reels: "./Reels/video3.mp4",
    isFollow: false,
    isLike: true,
    shareCount: 5,
    likeCount: 310,
    commentCount: 28,
    reelstitle: "In devotion to Maa Kali",
  },
  {
    username: "shakti_seeker",
    dp: "https://live.staticflickr.com/65535/53601356381_3baa91be68_b.jpg",
    reels: "./Reels/video4.mp4",
    isFollow: true,
    isLike: true,
    shareCount: 20,
    likeCount: 540,
    commentCount: 67,
    reelstitle: "Maa Kali protect us all",
  },
  {
    username: "bhakti_vibes",
    dp: "https://i.pinimg.com/736x/41/0d/03/410d03022f2265103a15dea39aa97373.jpg",
    reels: "./Reels/video5.mp4",
    isFollow: false,
    isLike: false,
    shareCount: 3,
    likeCount: 150,
    commentCount: 12,
    reelstitle: "Divine grace of Maa Kali",
  },
  {
    username: "tantric_spirit",
    dp: "https://is.zobj.net/image-server/v1/images?r=5pzFN6bmrEzjwcC7ypzGkm2Ei0-oZi2XEliuamapLRR8hY2f8YAUVn8ryUuUogzrydwQnCVznchSZl75dp-pa0xno3zGToutVTW_Y4vtQN6pvBwjXIi7ne5oUaBMfNWV_rX6By3URmxchouBHeXrxOnOTUpAJXuOc0KrHC2fp0cfICyXSoOcbSV3zvzF7jPX7060JXJ35DntwqdFL83hnXvshHwGWT2A8NUegQ",
    reels: "./Reels/video6.mp4",
    isFollow: true,
    isLike: false,
    shareCount: 8,
    likeCount: 210,
    commentCount: 19,
    reelstitle: "Maa Kali guide my path",
  },
  {
    username: "kali_Shakti",
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT87J4Q3HSnxD_KiVwetHWB6tgX9kkoDsRgQ&s",
    reels: "./Reels/video7.mp4",
    isFollow: true,
    isLike: true,
    shareCount: 11,
    likeCount: 470,
    commentCount: 55,
    reelstitle: "Blessings flow from Maa Kali",
  },
  {
    username: "soul_of_shakti",
    dp: "https://5.imimg.com/data5/SELLER/Default/2022/4/JR/XU/VE/54177453/white-marble-iskone-radha-krishna-statue-500x500.jpeg",
    reels: "./Reels/video8.mp4",
    isFollow: false,
    isLike: true,
    shareCount: 9,
    likeCount: 390,
    commentCount: 44,
    reelstitle: "Pure love of Maa Kali",
  },
  {
    username: "divine_energy",
    dp: "https://i.pinimg.com/736x/e3/13/98/e31398bb4661059e4274c7bdacd0d3eb.jpg",
    reels: "./Reels/video9.mp4",
    isFollow: true,
    isLike: false,
    shareCount: 6,
    likeCount: 250,
    commentCount: 22,
    reelstitle: "Maa Kali is my strength",
  },
  {
    username: "kalimaa_blessings",
    dp: "https://preview.redd.it/shi-premanand-ji-maharaj-4k-uhd-v0-6q7gu9whujdf1.jpg?width=1080&crop=smart&auto=webp&s=fc25e59a5ca69b22c4900b87be0c748c2d74cece",
    reels: "./Reels/video10.mp4",
    isFollow: false,
    isLike: true,
    shareCount: 14,
    likeCount: 520,
    commentCount: 63,
    reelstitle: "Walking under Maa Kali grace",
  },
  {
    username: "devotional_heart",
    dp: "https://oxyrootshandicraft.com/cdn/shop/files/ORP-0972-Beautifully-Premanand-Ji-Maharaj-Statue-1.jpg?v=1752732995",
    reels: "./Reels/video11.mp4",
    isFollow: true,
    isLike: false,
    shareCount: 4,
    likeCount: 180,
    commentCount: 16,
    reelstitle: "Maa Kali holds my heart",
  },
];

var sum = "";

reels.forEach(function (elem) {
  sum =
    sum +
    `<div class="reel">
                    <video autoplay muted loop src="${elem.reels}"></video>

                    <div class="bottom">
                    <div class="profile">
                        <div class="dp">
                            <img src="${elem.dp}" alt="image">
                        </div>
                        <h4>${elem.username}</h4 id="name">
                        <button>Follow</button>
                    </div>
                    <h4 id="title">${elem.reelstitle}</h4>
                    </div>

                    <div class="icons">
                    <div class="likes">
                        <i class="ri-heart-fill"></i>
                        <h5>${elem.likeCount}</h5>
                    </div>

                    <div class="comments">
                        <i class="ri-chat-1-fill"></i>
                        <h5>${elem.commentCount}</h5>
                    </div>

                    <div class="shares">
                        <i class="ri-share-forward-line"></i>
                        <h5>${elem.shareCount}</h5>
                    </div>

                    <div class="manu">
                        <i class="ri-more-2-fill"></i>
                    </div>
                    </div>
                </div>`;
});

let allreels = document.querySelector(".all-reels");

allreels.innerHTML = sum;
