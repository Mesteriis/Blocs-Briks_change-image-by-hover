let collection = document.getElementsByClassName('multiImg');
Array.prototype.forEach.call(collection,function(elem){
    elem.addEventListener('mouseenter', function() {
        elem.src = elem.getAttribute('shover')
    })
    elem.addEventListener('mouseleave', function() {
        elem.src = elem.getAttribute('sface')
    })
})