const andi = document.querySelector('#first')
const claire = document.querySelector('#second')
const sharleen = document.querySelector('#third')
const section = document.querySelector('#section')
const judgement = document.querySelector('#judgement')
const anditext = document.querySelector('#anditext')
const clairetext = document.querySelector('#clairetext')
const sharleentext = document.querySelector('#sharleentext')
const images = ["/Users/jonathan/development/100devs/week7/class14-materials/bachelor-code/2/imgs/andi.jpg", "/Users/jonathan/development/100devs/week7/class14-materials/bachelor-code/2/imgs/claire.jpg", "/Users/jonathan/development/100devs/week7/class14-materials/bachelor-code/2/imgs/sharleen.jpg"]

document.querySelector('#first').addEventListener('mouseover', changeImg)
document.querySelector('#second').addEventListener('mouseover', changeImg)
document.querySelector('#third').addEventListener('mouseover', changeImg)



function changeImg(e){
	let index = Array.prototype.indexOf.call(section.children, e.target)
	if (index == 2){
		judgement.innerText = "Correct"
		e.target.src = images[2]
		e.target.parentNode.children[0].children[1].src = images[0]
		e.target.parentNode.children[1].children[1].src = images[1]

	}
	else if (index < 2 && e.target.parentNode.children.length == 2){
		index = Array.prototype.indexOf.call(e.target.parentNode.parentNode.children, e.target.parentNode)
		if (index == 1){
			judgement.innerText = "You Thought"
			e.target.src = images[2]
			e.target.parentNode.parentNode.children[2].children[1].src = images[1]
			e.target.parentNode.parentNode.children[0].children[1].src = images[0]
			correctText(1);
		}
		else if (index == 0){
			judgement.innerText = "Nice Try!"
			e.target.src = images[2]
			e.target.parentNode.parentNode.children[1].children[1].src = images[1]
			e.target.parentNode.parentNode.children[2].children[1].src = images[0]
			correctText(2);
		}
		else{
			judgement.innerText = "Correct"
			e.target.src = images[2]
			e.target.parentNode.parentNode.children[0].children[1].src = images[0]
			e.target.parentNode.parentNode.children[1].children[1].src = images[1]
			correctText(0);
		}
	}
}
function correctText(configuration){
	if (configuration == 0){
		anditext.innerText = "Andi"
		clairetext.innerText = "Claire"
		sharleentext.innerText = "Sharleen"
	}else if (configuration == 1){
		anditext.innerText = "Andi"
		clairetext.innerText = "Sharleen"
		sharleentext.innerText = "Claire"
	}else {
		anditext.innerText = "Sharleen"
		clairetext.innerText = "Claire"
		sharleentext.innerText = "Andi"
	}
}
