var i= 0
var ketik = "Bad day doesn't mean you have to be sad,Go open  your VSCode, Look at the code,Then your day is getting worse"

function diketik(){
    if( i < ketik.length){
        document.getElementById('ketik').innerHTML += ketik.charAt(i)
        i++
        setTimeout(diketik, 100)
    }
}
diketik()
