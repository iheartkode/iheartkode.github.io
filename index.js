const alert = new Audio("alert.mp3")

function pray() {
	 alert("Prayer Timer Set!")
	const prayInterval = setTimeout(() => {
	  alert.play()
      alert("Time to Pray")
	}, 1200000)
}


function meditate() {
	 alert("Meditation Timer is Set!")
	const medIterval = setTimeout(() => {
		alert.play()
        alert("Time to meditate!")
	},1800000 )
}



