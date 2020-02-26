let string = "I am a supercool person!"
let arrayText = string.split('');
let s = '';
let i = 0;
function inject() {
    if (i == arrayText.length) {
        i = 0;
        document.getElementById('content').value = "";
        s = '';
    } else {
        s += arrayText[i];
        document.getElementById('content').value = s;
        i++;
    }
}


