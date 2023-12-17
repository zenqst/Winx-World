let heroes = [
	[
		'Блум',
		'Фея',
		'Лидер клуба Винкс, главная героиня мультсериала «Клуб Винкс: Школа Волшебниц», фея Огня Дракона и принцесса планеты Домино.',
		'bloom.png'
	],
	[
		'Скай',
		'Специалист',
		'Принц Эраклиона, сын короля Эрендора и королевы Самары. Лучший специалист Красного Фонтана. Скай — парень Блум. Был помолвлен с Диаспро, но расторг помолвку ради феи огня дракона.',
		'sky.png'
	],
	[
		'Мария',
		'Практикум',
		'Лучшая наставница во всём мире, которая вообще супер крутая и лучше некуда вообще',
		'img_indev.svg'
	]
];

let heroesContainer = document.getElementById('heroesContainer');

displayHeroes();

function displayHeroes() {
	let heroesContainer = document.getElementById('heroesContainer');
	heroesContainer.innerHTML = '';

	for (let i = 0; i < heroes.length; i++) {
		let heroDiv = document.createElement('div');
		heroDiv.className = 'hero-card';

		let heroNames = heroes[i][0];
		let heroOrganizations = heroes[i][1];
		let heroDescription = heroes[i][2];
		let heroImgs = heroes[i][3];

		heroDiv.innerHTML = `<img src="images/${heroImgs}" class="hero-card__image" alt="Картинка персонажа" /><div class='hero-card__text'> <div class='hero-card__text-two'> <h2 class='hero-card__title'>${heroNames}</h2><p class='hero-card__organization'>${heroOrganizations}</p> </div> <p class='hero-card__description'>${heroDescription}</p> </div>`;
		heroesContainer.appendChild(heroDiv);
	}
}

function openModal() {
	let dialog = document.getElementById('addCharacterModal');
	dialog.showModal();
	document.body.style.overflow = 'hidden';
	addCharacterModal.classList.add('show');
}

function closeModal() {
	let dialog = document.getElementById('addCharacterModal');
	dialog.close();
	document.body.style.overflow = '';
	addCharacterModal.classList.remove('show');
}

function errorMessage() {
	let error = document.getElementById('errorMessage');
	error.classList.add('show');
}

function errorMessageHide() {
	let error = document.getElementById('errorMessage');
	error.classList.remove('show');
}

function addHero() {
	let nameInput = document.getElementById('heroName');
	let organizationInput = document.getElementById('heroOrganization');
	let descriptionInput = document.getElementById('heroDescription');

	if (nameInput.value && descriptionInput.value) {
		heroes.push([nameInput.value, organizationInput.value, descriptionInput.value, 'img_indev.svg']);
		displayHeroes();
		nameInput.value = '';
		organizationInput.value = '';
		descriptionInput.value = '';

		errorMessageHide();
		closeModal();
	} else {
		errorMessage();
	}
}

document.getElementById('addButton').addEventListener('click', addHero);
document.getElementById('openModalButton').addEventListener('click', openModal);
document.getElementById('closeModalButton').addEventListener('click', closeModal);
