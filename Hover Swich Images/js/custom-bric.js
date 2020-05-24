///////////////////////////////////////////////////////////////////
// The Init function is called when bric is first selected       //
// Use it to make changes to the initial state of the sidebar UI //
///////////////////////////////////////////////////////////////////


// Calls

// window.webkit.messageHandlers.debug.postMessage('Hello World!');
// window.webkit.messageHandlers.sync.postMessage("changes"); // Sync Changes

function init(bricVersion)
{
	window.webkit.messageHandlers.debug.postMessage("my Current Bric Version = "+bricVersion);
	targetObj = $('.multiImg');
}

// set normal img
function setNormalImg(normalImg){
	targetObj.attr('src', normalImg);
	targetObj.attr('sface', normalImg);
	setImgWidth('100%');
	setImgHeight('100%');
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
} 

// set hovet img
function setHoverImg(hoverImg){
	targetObj.attr('shover', hoverImg);
	$('#tmpImg').attr('src', hoverImg);
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
} 

// Set Image Width
function setImgWidth(V) {
	targetObj.attr('width',V);
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
}

// Set Image Height
function setImgHeight(V) {
	targetObj.attr('height',V);
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
}




