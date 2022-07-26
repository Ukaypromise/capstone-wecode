// Navigation
const hambugerMenu = document.querySelector(".hambuger");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");

// Toggle the menu
hambugerMenu.addEventListener("click", () => {
  hambugerMenu.classList.toggle("active");

  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hambugerMenu.classList.remove("active");

    navMenu.classList.remove("active");
  });
});

const speakers = [
  {
    id: 1,
    img: "../images/speakers/speaker1.png",
    name: "Abubakar Siddiq Ango",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliiusto. Cumque repellat delectus earum aliquid",
  },
  {
    id: 2,
    img: "../images/speakers/speaker2.png",
    name: "Simi Oluwatomi",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliiusto. Cumque repellat delectus earum aliquid",
  },
  {
    id: 3,
    img: "../images/speakers/speaker3.png",
    name: "Abdul Hakim",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliiusto. Cumque repellat delectus earum aliquid",
  },
  {
    id: 4,
    img: "../images/speakers/speaker4.png",
    name: "Hayatu Abubakar",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliiusto. Cumque repellat delectus earum aliquid",
  },
  {
    id: 5,
    img: "../images/speakers/speaker5.png",
    name: "Auwal MS",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliiusto. Cumque repellat delectus earum aliquid",
  },
  {
    id: 6,
    img: "../images/speakers/speaker6.png",
    name: "Authentic One",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faciliiusto. Cumque repellat delectus earum aliquid",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const displaySpeakers = speakers.map((speaker) => {
    return `
    <div id=${speaker.id} >
      <div class="speaker-container">
            <img
              src="${speaker.img}"
              class="speaker-img"
              alt="speaker"
            />
            <div class="speaker-content">
              <h4>${speaker.name}</h4>
              <em>${speaker.bio}</em>
              <p>
                ${speaker.about}
              </p>
            </div>
        </div>
    </div>
    `;
  });
  document.getElementById("wrapper").innerHTML = displaySpeakers.join("");
});

// See More
const seeMore = document.querySelector(".see-more");
const seeMoreContent = document.querySelector(".wrapper");
console.log(seeMoreContent);

seeMore.addEventListener("click", () => {
  if (seeMoreContent.style.display == "block") {
    seeMoreContent.style.display = "none";
  } else {
    seeMoreContent.style.display = "block";
  }
});
