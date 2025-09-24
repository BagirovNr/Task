const openToggle = document.querySelector('#toggle_menu_open')
const closeToggle = document.querySelector('#toggle_menu_close')
const navContainer = document.querySelector('#nav_container')
const cardsContainer = document.getElementById('cards_container')

openToggle.addEventListener('click', () => {
	openToggle.style.display = 'none'
	closeToggle.classList.remove('toggle')
	navContainer.style.display = 'block'
	document.body.style.overflow = 'hidden'
})

closeToggle.addEventListener('click', () => {
	closeToggle.classList.add('toggle')
	openToggle.style.display = 'block'
	navContainer.style.display = 'none'
	document.body.style.overflow = ''
})

// Данные
const products = [
	{
		img: '/image/recomendItems/iron.svg',
		title: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
	},
	{
		img: '/image/recomendItems/beltElevator.svg',
		title: 'Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
	},
	{
		img: '/image/recomendItems/steelRope8x19.svg',
		title: 'Стальной канат для лифта GRS 8X19S-NFC 1570',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
	},
	{
		img: '/image/recomendItems/steelRope9x21.svg',
		title: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
	},
]

// Функция создания карточки
function createCard({ img, title, count, detailBtn }) {
	return `
    <div class="card_container">
      <img src="${img}" alt="${title}">
      <div class="card_items">
        <h5>${title}</h5>
        <div class="count_container">
      <img class="greenVector" src="./image/greenVector.svg" alt="Error">
        <p>${count}</p>
        </div>
        <div class="primary_btn all_btn">
          <button onclick="alert('Вы выбрали: ${title}')">${detailBtn}</button>
        </div>
      </div>
    </div>
  `
}
cardsContainer.innerHTML = products.map(createCard).join('')
