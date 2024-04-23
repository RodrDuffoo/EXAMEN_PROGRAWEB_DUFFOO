let celsius=0;
function temperatura(){
    let temperatura = document.getElementById("temperatura").value;
    celsius=(parseInt(temperatura)-32)*5/9
    window.alert("La temperatura calculada es "+celsius+"C°")
}