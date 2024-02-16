let h = document.querySelector('h1')
let d = document.querySelector('.container')
let ctxt = document.querySelector('.context')

// ? MOUSE EVENTS
// CLICK CONTEXTMENU DBLCLICK MOUSEMOVE MOUSEDOWN MOUSEUP MOUSEENTER MOUSELEAVE
d.addEventListener('mousemove', (e) => {
    document.querySelector('.ox').innerText = e.offsetX
    document.querySelector('.cx').innerText = e.clientX
    document.querySelector('.px').innerText = e.pageX
    document.querySelector('.lx').innerText = e.layerX
    document.querySelector('.sx').innerText = e.screenX
    document.querySelector('.oy').innerText = e.offsetY
    document.querySelector('.cy').innerText = e.clientY
    document.querySelector('.py').innerText = e.pageY
    document.querySelector('.ly').innerText = e.layerY
    document.querySelector('.sy').innerText = e.screenY

    if(e.offsetX > 300 && e.offsetY > 300){
        d.style.backgroundColor = 'red'
    }else if (e.offsetX < 300 && e.offsetY > 300) {
        d.style.backgroundColor = 'yellow'
    }else if (e.offsetX > 300 && e.offsetY < 300) {
        d.style.backgroundColor = 'green'
    }else {
        d.style.backgroundColor - 'black'
    }
})  

d.addEventListener('.contextmenu', (e) => {
    e.preventDefult()
    console.log(e);
    ctxt.style.top = e.clientY + 'px'
    ctxt.style.left = e.clientX + 'px'
    ctxt.style.display = 'block'
})




let a = document.querySelector('.test')

a.addEventListener('click', (e) => {
    
})  



