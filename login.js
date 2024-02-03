function checkPage() {
	let url = window.location;
	let m = url.toString().match(/.*\/(.+?)\./);
	let newUrl = m[1] + '.html';
  	localStorage.setItem('page', newUrl);
}