const alert = new Audio("alert.mp3")

function pray() {
	const prayInterval = setTimeout(() => {
	  alert.play()
      alert("Time to Pray")
	}, 1200000)
}


function meditate() {
	const medIterval = setTimeout(() => {
		alert.play()
        alert("Time to meditate!")
	},900000 )
}



