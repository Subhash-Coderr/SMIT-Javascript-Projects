let postContainer = document.querySelector("#post-container")
console.log(postContainer);



const stories = [
  {
    fullName: "Olivia Anderson",
    profilePic: "https://i.pravatar.cc/150?img=6",
    storyFile: "https://picsum.photos/400/700?random=6",
  },
  {
    fullName: "Ethan Miller",
    profilePic: "https://i.pravatar.cc/150?img=7",
    storyFile: "https://picsum.photos/400/700?random=7",
  },
  {
    fullName: "Isabella Garcia",
    profilePic: "https://i.pravatar.cc/150?img=8",
    storyFile: "https://picsum.photos/400/700?random=8",
  },
  {
    fullName: "James Wilson",
    profilePic: "https://i.pravatar.cc/150?img=9",
    storyFile: "https://picsum.photos/400/700?random=9",
  },
  {
    fullName: "Mia Thompson",
    profilePic: "https://i.pravatar.cc/150?img=10",
    storyFile: "https://picsum.photos/400/700?random=10",
  },
  {
    fullName: "Henry Lewis",
    profilePic: "https://i.pravatar.cc/150?img=15",
    storyFile: "https://picsum.photos/400/700?random=15",
  },
];

const posts = [
  {
    profilePic: "https://i.pravatar.cc/150?img=1",
    name: "Emma Johnson",
    date: "29 Jan, 2026 9:06 ",
    caption: `Nature breathes in slow rhythms we forget to notice.
    Light spills through leaves like quiet advice.
    Rivers practice patience, stones practice memory.
    Even the wind, restless as it is, knows when to soften.
    Out there, nothing rushes to be more than it already is—and somehow, everything fits.
`,
    imageUrl: "https://sb.ecobnb.net/app/uploads/sites/3/2021/03/foto-870x490-3.png",
    reactions: 32,
    comments: 3,
    shares: 2,

  },
  {
    profilePic: "https://i.pravatar.cc/150?img=1",
    name: "Emma Johnson",
    date: "29 Jan, 2026 9:06 ",
    caption: `A butterfly is a whisper with wings.
    It carries the memory of crawling and the courage of change.
    Painted by light, it drifts as if the air were kind enough to hold it.
    Brief, bright, unafraid..`,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUTlEk236RGY3CB7wb_WTaqWV-ogdoUN0TQ&s",
    reactions: 32,
    comments: 3,
    shares: 2,

  },
]


const storyContainer = document.getElementById("story-container");

const createStoryHTML = () => {
  for (let i = 0; i < stories.length; i++) {
    const story = stories[i];
    const storyHTML = ` <div class="story"
                            style="background-image: url(${story.storyFile});">

                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>

                            <div class="story-content">
                                <p>${story.fullName}</p>
                            </div>
                        </div>`;

    storyContainer.innerHTML += storyHTML;
  }
};

const createStoryHTMLThroughMap = () => {
  const returnedArr = stories.map((story, index) => {
    return ` <div class="story"
                            style="background-image: url(${story.storyFile});">
                            <div class="profile-pic">
                                <img src="${story.profilePic}"
                                    alt="">
                            </div>
                            <div class="story-content">
                                <p>${index + 1}: ${story.fullName}</p>
                            </div>
                        </div>`;
  });

  storyContainer.innerHTML = returnedArr.join("");
};
createStoryHTMLThroughMap();


const postHTML = (post) => {
  return `<div class="post">
                            <div class="post-header">
                                <div class="profile-content">
                                    <div class="profile-pic">
                                        <img src=${post.profilePic} alt="">
                                    </div>
                                    <div class="post-user-detail">
                                        <p id="name">${post.name}</p>
                                        <p>${post.date}</p>
                                    </div>
                                </div>
                                <div class="post-icons">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="post-caption">
                                <p>${post.caption}</p>
                            </div>
                            <div class="post-image">
                                <img src=${post.imageUrl} alt="">
                            </div>
                            <div class="post-reactions">
                                <div>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                    <i class="fa-regular fa-face-grin-beam-sweat"></i>
                                    <p>${post.reactions}</p>
                                </div>
                                <div>
                                    <p>${post.comments} comments</p>
                                    <p>${post.shares} share</p>
                                </div>
                            </div>
                            <div class="post-footer">
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i> Like
                                </div>
                                <div>
                                    <i class="fa-regular fa-comment"></i> Comment
                                </div>
                                <div>
                                    <i class="fa-regular fa-share-from-square"></i> Share
                                </div>
                            </div>
                        </div>`
}

const createPostHTMLThroughMap = () => {
  let postHTMLForContainer = posts.map((post) => {
    return `<div class="post">
                            <div class="post-header">
                                <div class="profile-content">
                                    <div class="profile-pic">
                                        <img src=${post.profilePic} alt="">
                                    </div>
                                    <div class="post-user-detail">
                                        <p id="name">${post.name}</p>
                                        <p>${post.date}</p>
                                    </div>
                                </div>
                                <div class="post-icons">
                                    <i class="fa-solid fa-ellipsis"></i>
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="post-caption">
                                <p>${post.caption}</p>
                            </div>
                            <div class="post-image">
                                <img src=${post.imageUrl} alt="">
                            </div>
                            <div class="post-reactions">
                                <div>
                                    <i class="fa-solid fa-thumbs-up"></i>
                                    <i class="fa-regular fa-face-grin-beam-sweat"></i>
                                    <p>${post.reactions}</p>
                                </div>
                                <div>
                                    <p>${post.comments} comments</p>
                                    <p>${post.shares} share</p>
                                </div>
                            </div>
                            <div class="post-footer">
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i> Like
                                </div>
                                <div>
                                    <i class="fa-regular fa-comment"></i> Comment
                                </div>
                                <div>
                                    <i class="fa-regular fa-share-from-square"></i> Share
                                </div>
                            </div>
                        </div>`
  })

  postContainer.innerHTML = postHTMLForContainer.join("")
}

createPostHTMLThroughMap()

const students = [
  {
    name: "",
    id: "",
    semesters: {
      1: {
        maths: 80,
        chem: 70,
        programming: 83,
      },
      2: {
        maths: 70,
        phy: 67,
        javascript: 83,
      },
    },
  },
];

const studentsCalculated = [
  {
    name: "",
    id: "",
    semesters: {
      1: {
        maths: 80,
        chem: 70,
        programming: 83,
      },
      2: {
        maths: 70,
        phy: 67,
        javascript: 83,
      },
    },
    semester1: "",
    obtainedMarks: "",
    percentage: "",
    grade: "",
  },
];
