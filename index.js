const notif = new Audio("alert.mp3")

function pray() {
	 alert("Prayer Timer Set!")
	 console.log("set")
	const prayInterval = setTimeout(() => {
	  notif.play()
      alert("Time to Pray")
	}, 1200000)
}


function meditate() {
	 window.alert("Meditation Timer is Set!")
	const medIterval = setTimeout(() => {
		notif.play()
        alert("Time to meditate!")
	},1800000 )
}



