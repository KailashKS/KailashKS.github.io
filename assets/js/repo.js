window.onload = async function getRepos() {
	const title1 = document.getElementById("title-1");
	const langused1 = document.getElementById("language-used-1")
	const url = "https://api.github.com/users/KailashKS/repos"
	const response = await fetch(url)

	const result = await response.json()
	// console.log(result)




	result.forEach(function1)
	async function function1(currentVal) {
		const repos = ["ArcticEcologySimulation", "crud_employee", "Pokemon_TCG", "eShop_App", "SoCure", "Playtime"]
		if( repos.includes(currentVal.name) ){
			title1.innerHTML = currentVal.name
			const lang_url = ("https://api.github.com/repos/KailashKS/" + currentVal.name + "/languages")
			const response1 = await fetch(lang_url)
			const result1 = await response1.json()
			for(var key in result1){
				
				langused1.innerHTML += '<span class="badge bg-light m-1 text-dark">' + key + '</span>'
			}
		}
	}
}