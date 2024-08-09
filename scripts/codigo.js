document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("boton").addEventListener('click',function(){
        console.log("Me presionaste");
        let txtentrada = document.getElementById("cajita").value;
        console.log(`tu cajita dice ${txtentrada}`);
        document.getElementById("txtsalida").value = txtentrada;
    });
});