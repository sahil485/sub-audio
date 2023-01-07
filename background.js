console.log("background running");

chrome.browserAction.onClicked.addListener((tab) => {
	let info = {
		txt: "hello" 
	}
	console.log(info);
	chrome.tabs.sendMessage(tab.id, info);
});

console.log("after");