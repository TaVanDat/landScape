document.addEventListener("DOMContentLoaded",()=>{
    let CardItem = document.querySelectorAll('.cardItem');
    let Landscape = document.querySelectorAll('.cardItem h2');
    let selectLandscape = document.querySelector('.selectLandscape');
    
    for(let index =0; index<CardItem.length;index++){
        CardItem[index].onclick=()=>{
            // alert("Selected Landscape: "+ Landscape[index].innerHTML);
            selectLandscape.innerHTML = "Selected Landscape: "+ Landscape[index].innerHTML;
        }
    }

     
});