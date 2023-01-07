console.log("youtube loaded")

muteButton = document.getElementsByClassName("ytp-mute-button ytp-button")[0];

muteButton.addEventListener("click", () => {
	console.log("mute toggled");
});

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(req, sender, sendResponse)
{
	if(req.action == "speed")
	{
		document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = parseFloat(req.speed);
		console.log("success")
	}
	if(req.action == "start" || req.action == "stop")
	{
		muteButton.click();
	}
}