html__content=document.querySelector("#html__content--holder");
css__content=document.querySelector("#css__content--holder");
js__content= document.querySelector("#js__content--holder");
html__content1=document.querySelector("#html__content--holder1");
css__content1=document.querySelector("#css__content--holder1");
js__content1= document.querySelector("#js__content--holder1");
html__code=document.querySelector("#html__code--content");
css__code=document.querySelector("#css__code--content");
js__code=document.querySelector("#js__code--content");


console.log(css__content);
console.log(js__content);


function html()
{
    html__content.classList.remove("hide");
    css__content.classList.add("hide");
    js__content.classList.add("hide");
}

function css()
{
    html__content.classList.add("hide");
    css__content.classList.remove("hide");
    js__content.classList.add("hide");
}

function js()
{
    html__content.classList.add("hide");
    css__content.classList.add("hide");
    js__content.classList.remove("hide");
}


function html1()
{
    html__content1.classList.remove("hide");
    css__content1.classList.add("hide");
    js__content1.classList.add("hide");
}

function css1()
{
    html__content1.classList.add("hide");
    css__content1.classList.remove("hide");
    js__content1.classList.add("hide");
}

function js1()
{
    html__content1.classList.add("hide");
    css__content1.classList.add("hide");
    js__content1.classList.remove("hide");
}


function htmlcode()
{
    html__code.classList.remove("hide");
    css__code.classList.add("hide");
    js__code.classList.add("hide");
}

function csscode()
{
    html__code.classList.add("hide");
    css__code.classList.remove("hide");
    js__code.classList.add("hide");
}

function jscode()
{
    html__code.classList.add("hide");
    css__code.classList.add("hide");
    js__code.classList.remove("hide");
}
