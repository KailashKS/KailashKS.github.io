var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	var clipboard = new ClipboardJS('.copy');
	document.getElementById("copy-email").onclick = true;
	document.getElementById("copy-number").onclick = true

} else {
	var clipboard = new ClipboardJS('.copy');
	clipboard.on('success', function (e) {
	});

	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		var popover = new bootstrap.Popover(popoverTriggerEl)


		popoverTriggerEl.addEventListener('shown.bs.popover', function () {
			setTimeout(function () {
				popover.hide();
			}, 500);
		});

	});
}