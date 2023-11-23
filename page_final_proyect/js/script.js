function del_cookies(){
    var cookiesDiv = document.querySelector(".cookie_container");
    console.log("eliminando cookies");
    if(cookiesDiv){
        cookiesDiv.remove()
    }
}   console.log("cookies eliminadas");

function car_empty() {
    alert('Your car is empty!');
}

function changeImg() {
    var imageDiv1 = document.querySelector('.image_div1');
    imageDiv1.src = './img/assets/succulents-2.jpg'; 
}

function resetImg() {
    var imageDiv1 = document.querySelector('.image_div1');
    imageDiv1.src = './img/assets/succulents-1.jpg'; 
}
