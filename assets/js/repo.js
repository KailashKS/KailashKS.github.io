const btnRepos = document.getElementById("btnRepos")
const resultShow = document.getElementById("resultShow")
window.onload = async function getRepos() {
	const url = "https://api.github.com/users/KailashKS/repos"
	const response = await fetch(url)
	const result = await response.json()
	// console.log(result)
	result.forEach(function1)
	function function1(currentVal, index) {
		resultShow.innerHTML += currentVal.full_name.split("/")[1]
	}
}