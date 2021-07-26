window.onload = async function getRepos() {
	const title1 = document.getElementById("title-1");
	const title2 = document.getElementById("title-2");
	const title3 = document.getElementById("title-3");
	const title4 = document.getElementById("title-4");
	const langused1 = document.getElementById("language-used-1")
	const langused2 = document.getElementById("language-used-2")
	const langused3 = document.getElementById("language-used-3")
	const langused4 = document.getElementById("language-used-4")
	const url = "https://api.github.com/users/KailashKS/repos"
	const response = await fetch(url)

	const result = await response.json()
	// console.log(result)




	result.forEach(function1)
	async function function1(currentVal) {
		const repos = ["ArcticEcologySimulation", "crud_employee", "eShop_App", "KailashKS.github.io"]
		if( repos.includes(currentVal.name) ){
			const lang_url = ("https://api.github.com/repos/KailashKS/" + currentVal.name + "/languages")
			const response1 = await fetch(lang_url)
			const result1 = await response1.json()
			for(var key in result1){
				if (currentVal.name == repos[0]){
					title1.innerHTML = currentVal.name
					langused1.innerHTML += '<span class="badge bg-light m-1 text-dark">' + key + '</span>'
				}
				else if (currentVal.name == repos[1]){
					title2.innerHTML = currentVal.name
					langused2.innerHTML += '<span class="badge bg-light m-1 text-dark">' + key + '</span>'
				}
				else if (currentVal.name == repos[2]){
					title3.innerHTML = currentVal.name
					langused3.innerHTML += '<span class="badge bg-light m-1 text-dark">' + key + '</span>'
				}
				else if (currentVal.name == repos[3]){
					title4.innerHTML = currentVal.name
					langused4.innerHTML += '<span class="badge bg-light m-1 text-dark">' + key + '</span>'
				}
				
			}
		}
	}
}