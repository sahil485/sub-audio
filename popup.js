var name = "";
var todo = "";
var first_time = true;
var value = "";
var play_spd = 1;

document.addEventListener("DOMContentLoaded", () => {
	
	var speedBtn = document.getElementById("changeSpeed");
	
	speedBtn.addEventListener("click", () => {
		if(!first_time)
		{
			var speed = document.getElementById("inputSpeed").value;
			play_spd = speed;
			todo = "speed";
			chrome.tabs.query({active: true, lastFocusedWindow: true}, message_tab);
			document.getElementById("s1" + "_").playbackRate = parseFloat(play_spd);
			document.getElementById("s2" + "_").playbackRate = parseFloat(play_spd);
			document.getElementById("s3" + "_").playbackRate = parseFloat(play_spd);
		}
	});
	
	var  songBtn = document.getElementById("confirmChange");
	
	songBtn.addEventListener("click", () => {
		
		if(first_time)
		{
			document.getElementById("s1").hidden = false;
			document.getElementById("s1" + "_").muted = true;
			document.getElementById("s1" + "_").play()
			
			document.getElementById("s2").hidden = false;
			document.getElementById("s2" + "_").muted = true;
			document.getElementById("s2" + "_").play()
			
			document.getElementById("s3").hidden = false;
			document.getElementById("s3" + "_").muted = true;
			document.getElementById("s3" + "_").play()
			
		}
		
		var ddM = document.getElementById("audioSelect");
		let new_value = ddM.value
		let new_name = ddM.options[ddM.selectedIndex].text;
		
		if(new_name === name)
		{
			//do nothing
		}
		
		else
		{
			document.getElementById("songChoice").innerText = "Playing " + new_name + "...";
			if(new_name === "Youtube" || name === "Youtube")
			{
				if(new_name === "Youtube")
				{
					todo = "start";
					if(!first_time)
					{
						document.getElementById(value + "_").muted = true;
					}
				}
				else
				{
					 todo = "stop";
					 console.log(new_value);
					 document.getElementById(new_value + "_").muted = false;
				}
				chrome.tabs.query({active: true, lastFocusedWindow: true}, message_tab);				
			}
			
			else
			{
				document.getElementById(value + "_").muted = true;
				document.getElementById(new_value + "_").muted = false;
			}
			
			name = new_name;
			value = new_value;
		}
		
		if(first_time) first_time = false;
		
	});
});

function message_tab(tabs)
{
	let yt_id = tabs[0].id;
	chrome.tabs.sendMessage(yt_id, {action : todo, speed : play_spd});
}


//document.addEventListener("click", () => {
//	var ddM = document.getElementById("audioSelect");
//	var name = ddM.options[ddM.selectedIndex].text;
//	document.getElementById("songChoice").innerText = "Playing " + name + "...";
//});

