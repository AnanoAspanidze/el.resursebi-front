const dots = document.querySelectorAll('.dot-select span');
const reset = document.getElementById('resetBtn');
const check = document.getElementById('completedGame');

// მონიშვნა
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', evt => {
		init();
		evt.target.classList.add('selected');
	});
}

// შემოწმება სისწორეზე
check.addEventListener('click', evt => {
	for (let i = 0; i < dots.length; i++) {
		if (dots[i].classList.contains('selected') && dots[i].dataset.check === 'true') {
			dots[i].classList.remove('selected');
			dots[i].classList.add('success');
			window.location.href = './N-1366-136-success.html';
		} else if (dots[i].classList.contains('selected')) {
			dots[i].classList.remove('selected');
			dots[i].classList.add('error');
		}
	}
	evt.target.setAttribute('disabled', true);
});

reset.addEventListener('click', () => {
	check.removeAttribute('disabled');
	init();
});

// გასუფთავება
function init() {
	dots.forEach(elm => {
		elm.classList.remove('selected');
		elm.classList.remove('error');
	});
}