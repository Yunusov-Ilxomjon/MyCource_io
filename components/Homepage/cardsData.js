// Card ma'lumotlari
const cardsData = [
  {
    image: "../../picture/course/card1.png",
    title: "UI Design for beginners",
    authorImage: "../../picture/course/contact.png",
    authorName: "Kitani Studio",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",

  },
  {
    image: "../../picture/course/card2.png",
    title: "VUE Javascript course",
    authorImage: "../../picture/course/contact.png",
    authorName: "Design World",
    starsImage: "../../picture/course/stars.png",
    rating: "(3.4K)",
    price: "$29.50",
    oldPrice: "$39.99",

  },
  {
    image: "../../picture/course/card3.png",
    title: "Mobile DEV React Native",
    authorImage: "../../picture/course/contact.png",
    authorName: "CreativeLab",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.1K)",
    price: "$19.99",
    oldPrice: "$25.00",

  },
  {
    image: "../../picture/course/card4.png",
    title: "Website Dev Zero to Hero",
    authorImage: "../../picture/course/contact.png",
    authorName: "UX Studio",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.7K)",
    price: "$21.75",
    oldPrice: "$30.00",

  }
];

// Containerga murojaat
const container = document.getElementById("cardsContainer");

// Har bir obyekt uchun card hosil qilamiz
cardsData.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("cards");

  div.innerHTML = `
  
    <img class="cards-img" src="${card.image}" alt="${card.title}">
    <h2 class="title-h2">${card.title}</h2>

    <div class="cards-contact">
      <img width="18px" height="18px" src="${card.authorImage}" alt="">
      <a href="#">${card.authorName}</a>
    </div>

    <div class="cards-stars">
      <img class="cards-stars-logo" src="${card.starsImage}" alt="">
      <h3 class="title-h3">${card.rating}</h3>
    </div>

    <h1 class="title-h1">${card.price} <span>${card.oldPrice}</span></h1>
  `;

  container.appendChild(div);
});

