// ---------trending cards---------//

// Card ma'lumotlari
const trendingCardsData = [
  {
    image: "../../picture/course/card1.png",
    title: "Design Fundamentals",
    authorName: "Kitani Studio",
    authorImage: "../../picture/course/contact.png",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",
    bestSell: true,
    discount: "20% OFF"
  },
  {
    image: "../../picture/course/card2.png",
    title: "Ionic - Build iOS, Android & Web...",
    authorName: "Design World",
    authorImage: "../../picture/course/contact.png",
    description: "Master UI/UX with real-case studies and professional projects.",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.7K)",
    price: "$30.10",
    oldPrice: "$45.00",
    bestSell: true,
    discount: "15% OFF"
  },
    {
    image: "../../picture/course/card3.png",
    title: "Bootcamp  Vue.js Web Framework",
    authorName: "Kitani Studio",
    authorImage: "../../picture/course/contact.png",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",
    bestSell: true,
    discount: "20% OFF"
  },
  {
    image: "../../picture/course/card4.png",
    title: "Bootcamp  Vue.js Web Framework",
    authorName: "Design World",
    authorImage: "../../picture/course/contact.png",
    description: "Master UI/UX with real-case studies and professional projects.",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.7K)",
    price: "$30.10",
    oldPrice: "$45.00",
    bestSell: true,
    discount: "15% OFF"
  },
  
    {
    image: "../../picture/course/card1.png",
    title: "Design Fundamentals",
    authorName: "Kitani Studio",
    authorImage: "../../picture/course/contact.png",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",
    bestSell: true,
    discount: "20% OFF"
  },
  {
    image: "../../picture/course/card2.png",
    title: "Ionic - Build iOS, Android & Web...",
    authorName: "Design World",
    authorImage: "../../picture/course/contact.png",
    description: "Master UI/UX with real-case studies and professional projects.",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.7K)",
    price: "$30.10",
    oldPrice: "$45.00",
    bestSell: true,
    discount: "15% OFF"
  },
    {
    image: "../../picture/course/card3.png",
    title: "Bootcamp  Vue.js Web Framework",
    authorName: "Kitani Studio",
    authorImage: "../../picture/course/contact.png",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",
    bestSell: true,
    discount: "20% OFF"
  },
  {
    image: "../../picture/course/card4.png",
    title: "Bootcamp  Vue.js Web Framework",
    authorName: "Design World",
    authorImage: "../../picture/course/contact.png",
    description: "Master UI/UX with real-case studies and professional projects.",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.7K)",
    price: "$30.10",
    oldPrice: "$45.00",
    bestSell: true,
    discount: "15% OFF"
  },
    {
    image: "../../picture/trending-course/trending-card5.png",
    title: "Design Fundamentals",
    authorName: "Kitani Studio",
    authorImage: "../../picture/course/contact.png",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",
    bestSell: true,
    discount: "20% OFF"
  },
  {
    image: "../../picture/trending-course/trending-card6.png",
    title: "Ionic - Build iOS, Android & Web...",
    authorName: "Design World",
    authorImage: "../../picture/course/contact.png",
    description: "Master UI/UX with real-case studies and professional projects.",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.7K)",
    price: "$30.10",
    oldPrice: "$45.00",
    bestSell: true,
    discount: "15% OFF"
  },
    {
    image: "../../picture/trending-course/trending-card7.png",
    title: "Bootcamp  Vue.js Web Framework",
    authorName: "Kitani Studio",
    authorImage: "../../picture/course/contact.png",
    description: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    starsImage: "../../picture/course/stars.png",
    rating: "(1.2K)",
    price: "$24.92",
    oldPrice: "$32.90",
    bestSell: true,
    discount: "20% OFF"
  },
  {
    image: "../../picture/trending-course/trending-card8.png",
    title: "Bootcamp  Vue.js Web Framework",
    authorName: "Design World",
    authorImage: "../../picture/course/contact.png",
    description: "Master UI/UX with real-case studies and professional projects.",
    starsImage: "../../picture/course/stars.png",
    rating: "(2.7K)",
    price: "$30.10",
    oldPrice: "$45.00",
    bestSell: true,
    discount: "15% OFF"
  }



];


const trendingContainer = document.getElementById("trendingCardsContainer");

trendingCardsData.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("trending-cards");

  div.innerHTML = `
    <div class="sell">
        ${card.bestSell ? `<div class="best-sell">Best seller</div>` : ""}
        <div class="persent-sell">${card.discount}</div>
    </div>

    <img class="trending-cards-img" src="${card.image}" alt="${card.title}">

    <h2 class="trending-title-h2">${card.title}</h2>

    <div class="trending-cards-contact">
        <img width="18px" height="18px" src="${card.authorImage}" alt="">
        <a href="#">${card.authorName}</a>
    </div>

    <p class="trending-title-p">${card.description}</p>

    <div class="trending-cards-stars">
        <img class="trending-cards-stars-logo" src="${card.starsImage}">
        <h3 class="trending-title-h3">${card.rating}</h3>
    </div>

    <h1 class="trending-title-h1">${card.price} 
        <span>${card.oldPrice}</span>
    </h1>
  `;

  trendingContainer.appendChild(div);
});


// ---------------//


