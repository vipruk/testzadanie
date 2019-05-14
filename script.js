var sel = document.getElementById('teg');
var lab1 = document.getElementById('label1');
var lab2 = document.getElementById('label2');
var lab3 = document.getElementById('label3');
sel.onchange=function() {
    if (sel.value=='a'){
        lab1.innerHTML='Текст ссылки:';
        lab2.innerHTML='Адрес ссылки:';
        lab3.innerHTML='Текст ссылки:';
    }
    else if (sel.value=='strong')
    {
        lab1.innerHTML='Текст блока:';
        lab2.innerHTML='ID:';
        lab3.innerHTML='Style';

    }
    else if (sel.value=='h1')
    {
        lab1.innerHTML='Текст блока:';
        lab2.innerHTML='ID:';
        lab3.innerHTML='Class';

    }
};
var  but= document.getElementById('butt');
var box1 = document.getElementById('input1');
var box2 = document.getElementById('input2');
var box3 = document.getElementById('input3');
var rezult = document.getElementById('rezults');
but.onclick = function() {
    if (box1.value=='' || box2.value=='' || box3.value==''){
        alert('Заполните все поля' );
    }
    else
    {
        if (sel.value=='a') {
           var teg="<div><a href='"+box1.value+"' class='"+box3.value+"'>"+box1.value+"</a></div>";
            rezult.innerHTML+=teg;
        }
        else if (sel.value=='strong')
        {
            var teg="<div><strong id='"+box1.value+"' style='"+box3.value+"'>"+box1.value+"</strong></div>";
            rezult.innerHTML+=teg;
        }
        else if (sel.value=='h1')
        {
            var teg="<div><h1 id='"+box1.value+"' class='"+box3.value+"'>"+box1.value+"</h1></div>";
            rezult.innerHTML+=teg;
        }

    }

};



