const accordionItems = document.querySelectorAll('.accordion-item');
const box = document.querySelector('.box');

accordionItems.forEach(function(question){
	console.log(question);
	const btn = question.querySelector('.acc-header')
	btn.addEventListener('click', function(){
		accordionItems.forEach(function(item){
			if(item !== question)
				item.classList.remove('show-text');	
		})
		question.classList.toggle('show-text');
	})
})



