///////////////////////////////////////////////////////////////////
// The Init function is called when bric is first selected       //
// Use it to make changes to the initial state of the sidebar UI //
///////////////////////////////////////////////////////////////////

let targetObj;
let overlayLink;

let prev_face;
let prev_hover;
let prev_active;
// Calls
// let targetObj;
// window.webkit.messageHandlers.debug.postMessage('Hello World!');
// window.webkit.messageHandlers.sync.postMessage("changes"); // Sync Changes


// var overlayText;
// var targetContainer;


function init(bricVersion){
	targetObj = $('.multiImg');

	overlayLink = $('.overlay-link');

	prev_face = $('.pre_face');
	prev_hover = $('.pre_hover');
	prev_active = $('.pre_active');

    SetLinkOptionState();
	window.webkit.messageHandlers.sync.postMessage("changes");
	
}


// set normal img
function setImgPath(img, imgRes){
	if (imgRes == 1) {
            targetObj.attr('src', img);
            let tmpImg = getFileExportName(img);
            targetObj.attr('sface', tmpImg);
            targetObj.attr('shover', tmpImg.substring(0, tmpImg.lastIndexOf('.'))+'_hover'+tmpImg.substring(tmpImg.lastIndexOf('.')));
            targetObj.attr('sactive', tmpImg.substring(0, tmpImg.lastIndexOf('.'))+'_active'+tmpImg.substring(tmpImg.lastIndexOf('.')));
            $('.tmpImg_hover').attr('src', img);
            $('.tmpImg_active').attr('src', img);
            prev_face.attr('src', img);

            window.webkit.messageHandlers.sync.postMessage("changes");
            let tmp = document.getElementById('showing');
            window.webkit.messageHandlers.debug.postMessage("prev_face.offsetWidth " + targetObj.offsetWidth);
	}
	if (imgRes == 2) {
            targetObj.attr('shover', getFileExportName(img));
            $('.tmpImg_hover').attr('src', img);
            prev_hover.attr('src', img);
            window.webkit.messageHandlers.sync.postMessage("changes");
	}
	if (imgRes == 3) {
            targetObj.attr('sactive', getFileExportName(img));
            $('.tmpImg_active').attr('src', img);
            prev_active.attr('src', img);
            window.webkit.messageHandlers.sync.postMessage("changes");
	}
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

function getFileExportName(imgPath){
    var fileName = 'img/'+imgPath.split('/').pop();

    if(imgPath.substring(0,4) == 'http'){
        fileName = imgPath;
    }
    return fileName;
}

function setAltValue(V){
	targetObj.attr('alt',V);
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
}

// Set Link Type
function setLinkType(linkType, targetAttr){
	// Disable Both Options
	overlayLink.attr("href","#").removeAttr("data-blocs-page"); // Refresh Link Options
	window.webkit.messageHandlers.setUIState.postMessage('{"attr":"overlay-link","enable":"false"}');
	window.webkit.messageHandlers.setUIState.postMessage('{"attr":"overlay-url","enable":"false"}');
	window.webkit.messageHandlers.setUIVal.postMessage('{"attr":"overlay-link","value":"0","sync":"true"}');
	window.webkit.messageHandlers.setUIVal.postMessage('{"attr":"overlay-url","value":"","sync":"true"}');

	var targetAttr = 'overlay-link';

	if (linkType == 0) { // Page Link
		overlayLink.attr("data-blocs-page","1"); // Refresh Button Options
	}
	else if (linkType == 1) { // URL
		targetAttr = 'overlay-url';
	}
	window.webkit.messageHandlers.setUIState.postMessage('{"attr":"'+targetAttr+'","enable":"true"}');
}
// Set Page
function setPage(pageID, PageName, targetAttr){
	overlayLink.attr("href","#").attr("data-blocs-page",pageID); // Set Link ID (attribute must be data-page)
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
}


// Set URL
function setURL(pageURL, targetAttr){
	overlayLink.attr("href",pageURL).removeAttr("data-blocs-page"); // Set Button URL
	window.webkit.messageHandlers.sync.postMessage("changes"); // sync Changes
}
//init settings UI Form Blocs
function SetLinkOptionState(){
	window.webkit.messageHandlers.setUIState.postMessage('{"attr":"overlay-link","enable":"false"}');
	window.webkit.messageHandlers.setUIState.postMessage('{"attr":"overlay-url","enable":"false"}');

	if(overlayBtn.hasAttr('data-blocs-page')) { // Enable Page Dropdown
		window.webkit.messageHandlers.setUIState.postMessage('{"attr":"overlay-link","enable":"true"}');
	}
	else { // Enable URL Field
		window.webkit.messageHandlers.setUIState.postMessage('{"attr":"overlay-url","enable":"true"}');
	}
}
// set aligment
function setAlig(Alig){
	switch (Alig){
		case "0":{
			targetObj.attr('align', 'left');
			window.webkit.messageHandlers.sync.postMessage("changes");
			break;
		}
		case "1":{
			targetObj.attr('align', 'middle');
			window.webkit.messageHandlers.sync.postMessage("changes");
			break;
		}
		case "2":{
			targetObj.attr('align', 'right');
			window.webkit.messageHandlers.sync.postMessage("changes");
			break;
		}
	}
}

function setVAlig(Alig){
	switch (Alig){
		case "0":{
			targetObj.attr('align', 'top');
			window.webkit.messageHandlers.sync.postMessage("changes");
			break;
		}
		case "1":{
			targetObj.attr('align', 'middle');
			window.webkit.messageHandlers.sync.postMessage("changes");
			break;
		}
		case "2":{
			targetObj.attr('align', 'bottom');
			window.webkit.messageHandlers.sync.postMessage("changes");
			break;
		}
	}
}
$.fn.hasAttr = function(name){  
   return this.attr(name) !== undefined;
};


function testt(v){
	window.webkit.messageHandlers.debug.postMessage("v "+v);
}
