function printTime(){
    let time = new Date();

	let hours, mins, secs;
	hours = time.getHours();
	mins = time.getMinutes();
	secs = time.getSeconds();

	let hour = hours.toString();
	if(hour.length < 2){
	    hour="0" + hour;
	}

	let min = mins.toString();
	if(min.length < 2){
		min = "0" + min;
	}

	let sec = secs.toString();
	if(sec.length < 2){
		sec = "0" + sec;
	}
	document.getElementById("texttime").textContent = hour + " : " + min + " : " + sec;
}
setInterval(printTime, 1000);