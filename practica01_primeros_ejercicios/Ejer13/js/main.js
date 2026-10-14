const mostrar = document.getElementById("mostrar");

principal();

/************************ FUNCTIONS *****************************/
function principal(){
    let veces1 = 0;
    let veces2 = 0;
    let veces3 = 0;
    let veces4 = 0;
    let veces5 = 0;
    let veces6 = 0;

    let texto = "";

    let sumas = [];

    for(let i = 0; i < 36000; i++){
        let dado1 = Math.floor((Math.random() * 6) + 1);
        let dado2 = Math.floor((Math.random() * 6) + 1);

        switch (dado1) {
            case 1: veces1++;
                break;
            case 2: veces2++;
                break;
            case 3: veces3++;
                break;
            case 4: veces4++;
                break;
            case 5: veces5++;
                break;
            case 6: veces6++;
                break;
        }

        switch (dado2) {
            case 1: veces1++;
                break;
            case 2: veces2++;
                break;
            case 3: veces3++;
                break;
            case 4: veces4++;
                break;
            case 5: veces5++;
                break;
            case 6: veces6++;
                break;
        }

        sumas.push((dado1 + dado2));

        texto += dado1+" y "+dado2+" con suma: "+sumas[i]+"<br>";

       
    }

    texto += "Veces que ha salido 1: "+veces1+"<br>"+
                "Veces que ha salido 2: "+veces2+"<br>"+
                "Veces que ha salido 3: "+veces3+"<br>"+
                "Veces que ha salido 4: "+veces4+"<br>"+
                "Veces que ha salido 5: "+veces5+"<br>"+
                "Veces que ha salido 6: "+veces6;

    mostrar.innerHTML = texto;

}