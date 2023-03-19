
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