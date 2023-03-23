
//const text = document.getElementById('text-area').value;
function gerarpdf(){
    const text = document.getElementById('text-area').value;
    console.log(text)
    //installar o jsPDF
    const doc = new jsPDF();
    //html que vai estar no PDF
    doc.fromHTML(text);
    //gerar o PDF
    doc.save('Text.pdf'); 
} 

const negrito = document.getElementById('negrito');
const maiusculo = document.getElementById('maiusculo');
const minusculo = document.getElementById('minusculo');
const direita = document.getElementById('direita');
const esquerda = document.getElementById('esquerda');
const centro = document.getElementById('centro');
const auternado = document.getElementById('auternado');

negrito.addEventListener('click', ()=>{
    document.getElementById('text-area').style.fontWeight = 'bold';
  })

  maiusculo.addEventListener('click', ()=>{
    document.getElementById('text-area').style.textTransform = 'uppercase' ;
  })

  minusculo.addEventListener('click', ()=>{
    document.getElementById('text-area').style.textTransform = 'lowercase' ;
  })

  direita.addEventListener('click', ()=>{
    document.getElementById('text-area').style.textAlign = "right";
  })

  esquerda.addEventListener('click', ()=>{
    document.getElementById('text-area').style.textAlign = "left";
  })

  centro.addEventListener('click', ()=>{
    document.getElementById('text-area').style.textAlign = "center";
  })


  auternado.addEventListener('click', ()=>{
    document.getElementById('text-area').style.textTransform = 'capitalize' ;
  })

  
  
