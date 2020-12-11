function ncc_clickbind() {

}

function ncc_afterLoad() {
	console.log('1workspace!')
}

function ncc_onResize() {
	console.log('2workspace!')
}


document.addEventListener('DOMContentLoaded', ncc_afterLoad);
window.addEventListener('resize', ncc_onResize);
