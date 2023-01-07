changeSong = document.getElementById("confirmChange")

changeSong.addEventListener("click", testFunct)

function testFunct()
{
	chrome.tabs.getCurrent(gotTab);
	
	let inp = document.getElementById("userInput").text
	function gotTab(tab)
	{
		let info = 
		{
			txt: "hello" 
		}
		console.log(info);
		chrome.tabs.sendMessage(tab.id, info);
	}
	
}