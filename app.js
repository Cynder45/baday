var i= 0
var ketik = "Bad day, Open VSCode, Look at the code, Your day is getting worse"

function diketik(){
    if( i < ketik.length){
        document.getElementById('ketik').innerHTML += ketik.charAt(i)
        i++
        setTimeout(diketik, 100)
    }
}
diketik()