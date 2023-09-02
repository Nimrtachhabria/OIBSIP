const result=document.getElementById('result')
const convert=document.getElementById('convert')
const t_input=document.getElementById('t_input')
const sel=document.getElementById('sel')
convert.addEventListener('click',() =>{
    if(sel.value=== 'celcius'){
    result.innerHTML=parseFloat(t_input.value)*9/5+32
}
else{
    result.innerHTML=((parseFloat(t_input.value)-32)*5)/9 
}
console.log(sel.value)}
)