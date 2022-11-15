// var val = confirm("Ce site souhaite afficher des notifications, voulez-vous continuer?");

var tot         = document.getElementById('tot');
var btnp        = document.getElementsByClassName('btnp');
var btnm        = document.getElementsByClassName('btnm');
var counter     = document.getElementsByClassName('counter');
var prix_unit   = document.getElementsByClassName('prix_unit');
var like        = document.getElementsByClassName("fa-solid fa-heart");
var del         = document.getElementsByClassName('fa-solid fa-trash');
var add         = document.getElementsByClassName('fa-solid fa-cart-plus');
var disp        = document.getElementsByClassName('disp');
var item        = document.querySelector('#item');
// counter incrementation
for (let ele of btnp) {
ele.addEventListener('click',function inc() {
    ele.previousElementSibling.innerText ++;
    // wa ella counter.innerText ++
    tot_p();

})
}
// counter decrementation

for (let elem of btnm) {

    elem.addEventListener('click',function inc() {
        if(elem.nextElementSibling.innerText >0){
        elem.nextElementSibling.innerText --;
        // wa ella counter.innerText ++
        tot_p();

}
})
    }
// total price

    function tot_p() {
        let sum=0;
        for( let i=0; i<prix_unit.length;i++){
            sum += prix_unit[i].innerText * counter[i].innerText;
            tot.innerText=sum;
        }
    }

// like

for (let i = 0; i < like.length; i++) {
    let clicked = false;
like[i].addEventListener('click',function liked() {
    like[i].style.color= 'red';
    clicked = !clicked;
    if(clicked===true){
        like[i].style.color= 'black';
    }
})
}

// delete

for (let i = 0; i < del.length; i++) {
del[i].addEventListener('click',function del_content(event) {
    let del_bot= event.target;
    del_bot.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();   
    tot_p();
})
}

// add to card

for (let i = 0; i < disp.length; i++) {
    let clicked = true;    
add[i].addEventListener('click',function () {
    
    add[i].style.color= 'green';
    disp[i].innerText=counter[i].innerText;
    clicked = !clicked;
    sum += disp[i].innerText;
    item = sum;
    if (clicked ===false){
        add[i].style.color= 'rgb(33,37,41)';
        disp[i].innerText=0;
    }})
}


