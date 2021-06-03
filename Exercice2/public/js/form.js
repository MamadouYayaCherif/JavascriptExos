
const TabCode = ['00221', '00521', '00781', '00191', '28321', '08301', '98320', '03271','07491'];
const TabPrice = [2, 3, 1, 3, 2, 2, 3, 1,4];
const TabName = ['Coca_Cola', 'SARSAPARILIA', 'OSIS', 'VITA_MALT', 'FANTA_ORANGE', 'FANTA_FRAIZ', 'K_JUS', 'FANTA_TORONJA','APPLE_JUS'];


function insert(num)
{
  
    {
        document.form.txtView.value = document.form.txtView.value + num ;
    }
    
}

function clear()
{
    document.form.txtView.value = document.form.txtView.value - num;
}

function searchPric(code) {
    for (let index = 0; index < TabCode.length; index++) {
                if(code == TabCode[index]) 
                {
                    return TabPrice[index]   
                }    
    }
}

function searcIndex(code) {
    for (let index = 0; index < TabCode.length; index++) {
                if(code == TabCode[index]) 
                {
                    return index 
                }    
    }
    return -1
}


function submitValue()
{
    code =document.getElementById("code").innerText .toString();
    quantite =document.getElementById("qte").innerText .toString();
    price = document.getElementById("price").innerText .toString();
    inputValue =document.form.txtView.value;
    var cod = searcIndex(inputValue)
    if(cod == -1 && code =="Code")
    {
        alert(' !!! This code does not exit\n kindly selecte or tapez the right code ')
    }
    if(code == "Code" && cod != -1)
    {
        document.getElementById("code").innerText = inputValue;  
        alert(` the code product ${inputValue} has been selected \n kindly Give the Quantite`)  
        document.getElementById("qte").innerText = '0';
     
    }
    if(code != "Code" && quantite=='0')
    {
        document.getElementById("qte").innerText = inputValue;    
        alert(` The product Quantite  ${inputValue} is received \n kindly Give the amoung of money`) 
        document.getElementById("price").innerText = '0'; 
    }

    if(quantite !='0' && price =='0')
    {
        document.getElementById("price").innerText = inputValue;   
        var priceGive = parseFloat(inputValue) ;
            var price = parseFloat(searchPric(document.getElementById("code").innerText)) ;
            var money = price * quantite;
            if(priceGive >= money)
            {
                if(priceGive >= money)
                {
                    document.getElementById("balance").innerText = priceGive - (price * quantite);
                }else
                {
                    document.getElementById("balance").innerText = 0;
                }
                document.getElementById("price").innerText = priceGive;
                /*  div------ */
                var ii =searcIndex(document.getElementById("code").innerText)
                myPicture(ii)
                myPicture2(ii)
                document.getElementById('title').innerHTML = TabName[ii];
                document.getElementById('unitPrice').value = price;
                document.getElementById('qt').value = quantite;
                document.getElementById('recu').value = priceGive;
                document.getElementById('bal').value =  document.getElementById("balance").innerText;

            }else
            {
                alert(` ${priceGive}  GHS is not enough \n You need at least ${price * quantite} GHS `)
                document.getElementById("price").innerText ='0'
            }
    }

              
        clean()
   
}

function clean()
{
    document.form.txtView.value =""
}

function produitSelected(num) {
    
    alert(` the code product ${num} has been selected \n Give the price`)  
    document.getElementById("code").innerText = num;
    document.getElementById("qte").innerText = '0';
    document.getElementById("price").innerText = '0';
    document.getElementById("balance").innerText = '0';
}


function CleValue() {
    var output = document.form.txtView.value.toString();
    if(output)
    {
        output = output.substr(0, output.length -1)
        document.form.txtView.value = output; 
    }
}


/* ------------------------------------------------------------------------------------------------ */
const openModelButtoms= document.querySelectorAll('[data-modal-target]')
const closeModelButtoms= document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
openModelButtoms.forEach(buttons => {
    buttons.addEventListener('click', ()=>{
     const model = document.querySelector(buttons.dataset.modalTarget)
     openModal(model)
    })
})

closeModelButtoms.forEach(buttons => {
    buttons.addEventListener('click', ()=>{
     const model = buttons.closest('.modal2')
     closeModal(model)
    })
})
overlay.addEventListener('click', ()=>{
     const modal = document.querySelectorAll('.modal2.active')
     modal.forEach(mod =>{
         closeModal(mod)
     })
})



function openModal(model) {
    if(model == null) return
    model.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(model) {
    if(model == null) return
    model.classList.remove('active')
    overlay.classList.remove('active')
}

/* images */
var images =["public/images/coca.jpg","public/images/sarsa.jpg"
,"public/images/oisis.jpg","public/images/vitamalt.jpg"
,"public/images/fanta2.jpg","public/images/fanta1.jpg"
,"public/images/k.jpg","public/images/fanta3.jpg",
"public/images/pomme.jpg"]
function myPicture(index) {
    document.getElementById('images').src= images[index]
    
}

function myPicture2(index) {
    document.getElementById('pictur').src= images[index]
    
}

