let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((i)=>{
    i.addEventListener('click',(e)=>{        
        if(e.target.innerHTML==='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string=" ";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){

            string = string.substring(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target.innerHTML);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
});

function del() {
    var input = document.getElementsByName("Input")[0];
    input.value = input.value.substring(0, input.value.length - 1);
}
/*var str ='';
var buttons = document.getElementsByClassName('btn');
var array = Array.from(buttons);
array.forEach(onClick);
console.log(items);
function onClick(item){
    str=str+item;
    //console.log(array);
    //array.forEach();

    //console.log(buttons);
}/*
/*document.getElementsByClassName('btn')[1].addEventListener('click',(e)=>{
    console.log(e.target.innerHTML);
})*/