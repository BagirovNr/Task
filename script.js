const cardsContainer = document.querySelector('.cards_container')
const toggleBtn = document.querySelector('.toggle-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileLinks = document.querySelector('.mobile-nav-links')

function openMenu() {
	mobileLinks.classList.add('open')
	document.body.style.overflow = 'hidden'
	toggleBtn.classList.add('toggle')
	closeBtn.classList.remove('toggle')
}

function closeMenu() {
	mobileLinks.classList.remove('open')
	document.body.style.overflow = 'auto'
	toggleBtn.classList.remove('toggle')
	closeBtn.classList.add('toggle')
}

toggleBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
closeBtn?.addEventListener('click', closeMenu)

const products = [
	{
		img: '/image/recomendItems/iron.svg',
		title: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
		greenCheck: '/image/greenVector.svg',
	},
	{
		img: '/image/recomendItems/beltElevator.svg',
		title: 'Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
		greenCheck: '/image/greenVector.svg',
	},
	{
		img: '/image/recomendItems/steelRope8x19.svg',
		title: 'Стальной канат для лифта GRS 8X19S-NFC 1570',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
		greenCheck: '/image/greenVector.svg',
	},
	{
		img: '/image/recomendItems/steelRope9x21.svg',
		title: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570',
		count: 'В наличии 50 м.',
		detailBtn: 'Подробнее',
		greenCheck: '/image/greenVector.svg',
	},
]

function createCard({ img, title, count, detailBtn, greenCheck }) {
	return `
      <div class="main_items">
				<div class="main_img"><img src="${img}" alt="Error"></div>
					<div class="main_item_info">
						<div><h3>${title}</h3></div>
						<div class="main_count">
							<img src="${greenCheck}" alt="Error">
							<p>${count}</p>
						</div>
						<div onClick="alert('${title}')" class="primary_btn"><button>${detailBtn}</button></div>
				</div>
			</div>
  `
}
cardsContainer.innerHTML = products.map(createCard).join('')
