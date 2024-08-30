const keyV = document.getElementById('keyValue')
const keyccode = document.getElementById('keyCodeValue')
const codeV = document.getElementById('codeValue')

window.addEventListener('keydown', (event)=>{
    keyV.value = event.key
    codeV.value = event.code
    keyccode.value = event.keyCode
})