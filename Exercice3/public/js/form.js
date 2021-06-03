var btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    Mutilication(document.getElementById('inputId').value)
})

function Mutilication(val) {
    var cpt =1;
    var out =document.getElementById('val');
    while (cpt<= 12) {
        /*console.log(val +" x "+cpt+ " =  "+ val* cpt)*/
        out.innerHTML =out.innerHTML + "<div> "+val +" * "+cpt +" = "+ val *cpt+"</div>";
        cpt++;
    }
}

function Mutilication2(val) {
 
    for (let index = 1; index <= val; index++) {
            var cpt =1;
            var out =document.getElementById('val');
            val2 = index;
            out.innerHTML =out.innerHTML + "<div>--------------- Mutiplication by ------------------------ "+ val2 +" </div>"
            while (cpt<= 12) {
                console.log(val2 +" x "+cpt+ " =  "+ val2* cpt)
                out.innerHTML =out.innerHTML + "<div> "+val2 +" * "+cpt +" = "+ cpt *val2+"</div>";
                cpt++;
            }
           
    }
    
}