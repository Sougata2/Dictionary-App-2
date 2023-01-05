document.querySelector(".search-btn").addEventListener('click', function(){
  document.querySelector('.spinner-container').classList.remove('hidden')
  document.querySelector('.word').classList.add('hidden')
  document.querySelector('.meaning-container').classList.add('hidden')
})
  const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f602f195dmshb4ce39bfe95e95ep1e2fd2jsnf97895daa3dd',
		'X-RapidAPI-Host': 'thesaurus-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(`https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus?word=${word}`, option)
	.then(response => response.json())
	.then(response => {
		console.log("Synonyms : ")
		const synonyms = response.synonyms
		for (let i = 0 ; i < synonyms.length; i++){
			console.log(synonyms[i])
		}
		console.log("Antonyms : ")
		const antonyms = response.antonyms
		for (let i = 0 ; i < antonyms.length; i++){
			console.log(antonyms[i])
		}
	})
	.catch(err => console.error(err));