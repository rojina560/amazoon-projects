const element = document.getElementById('demo');
const setIntervalId = setInterval(() => {
    const date = new Date();
    element.innerHTML = date.toLocaleTimeString()
    
}, 1000)
setIntervalId()
function clear() {
    clearInterval(setIntervalId)
}
clear()