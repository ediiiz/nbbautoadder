javascript:(async() => {
	id = 660085;
	await fetch("https://www.notebooksbilliger.de/warenkorb/action/shopping_cart_refresh/refcampaign_id/f69dffa4a1fb2f35f9efae6cf4504e0a", {
		"credentials": "include",
		"headers": {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8",
			"Accept-Language": "de,en-US;q=0.7,en;q=0.3",
			"Content-Type": "application/x-www-form-urlencoded",
			"Upgrade-Insecure-Requests": "1",
			"Pragma": "no-cache",
			"Cache-Control": "no-cache"
		},
		"referrer": "https://www.notebooksbilliger.de/warenkorb",
		"body": "quantity%5B" + id + "%5D=1&press_enter=0",
		"method": "POST",
		"mode": "cors"
	});
	window.location.href = 'https://www.notebooksbilliger.de/kasse/anmelden%27;%7D';})