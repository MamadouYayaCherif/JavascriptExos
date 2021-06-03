if(navigator.userAgent.match(/Mac OS X/i))
{
    document.getElementById('DeviceName').innerHTML = 'this is  a Mac device'
}

if(navigator.userAgent.match(/iPhone/i))
{
    document.getElementById('DeviceName').innerHTML = 'this is  An Iphone device'
}

if(navigator.userAgent.match(/iPad/i))
{
    document.getElementById('DeviceName').innerHTML = 'this is  An Ipad device'
}



if(screen.width <= 699)
{
    document.getElementById('DeviceName').innerHTML = 'this is  A  mobile device'    
}else
{
	document.getElementById('DeviceName').innerHTML = 'this is not  A  mobile device' 
    /*window.location.href ='js/form.html'*/
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
var images =["images/img1.jpg","images/hote5.jpg"
,"images/voltaH.jpg","images/volta2.jpg"
,"images/hotel4.jpg","images/thos.jpg"
,"images/hotelA1.jpg","images/hotelA2.jpg"]
function myPicture(index) {
    title(index)
    document.getElementById('images').src= images[index]
    
}

function title(index) {
    if (index ==0 || index ==1)
    {
         document.getElementById('title').innerHTML ='ACCRA HOTEL'
    }
    if (index ==2 || index ==3)
    {
         document.getElementById('title').innerHTML ='TAMALA HOTEL'
    }
    if (index ==4 || index ==5)
    {
         document.getElementById('title').innerHTML ='KUMASI HOTEL'
    }
    if (index ==6 || index ==7)
    {
         document.getElementById('title').innerHTML ='CAPE COAST HOTEL'
    }
}

function bookRoum(params) {
    myPicture(params)
}

var btn = document.getElementById('SubmiteBtn');
btn.addEventListener('click', ()=>{
    checkDays()
})

function checkDays() {
    var inDate = new Date(document.getElementById('chechIn').value) ;
    var outData = new Date(document.getElementById('chechout').value);
    var days = 1000 *60 * 60 * 24;
    var diff = outData - inDate;
    var NbDays = Math.floor(diff/days)
    document.getElementById('Night').value = `${NbDays} Night(s)`
    calculAnount(NbDays)
}

function calculAnount(params) {
    var roumCate = document.getElementById('roumCate').value ;
    if(roumCate.localeCompare("Standard-200 GHS") == 0)
    {
        document.getElementById('Amount').value = `${params * 200} GHS `; 
        document.getElementById('Unite').innerHTML = 'The Unite Price is 200 GHS';
    }
    if(roumCate.localeCompare("Double-350 GHS") == 0)
    {
        document.getElementById('Amount').value =` ${params * 350} GHS` ;
        document.getElementById('Unite').innerHTML = 'The Unite Price is 350 GHS';
    }
    if(roumCate.localeCompare("Executive-600 GHS") ==0)
    {
        document.getElementById('Amount').value =` ${params * 600} GHS` ;
        document.getElementById('Unite').innerHTML = 'The Unite Price is 600 GHS';
    }
    

}