var lista_mercadoriaRaw = localStorage.getItem('lista_mercadoria');
if (lista_mercadoriaRaw != null){
    var lista_mercadoria = JSON.parse(lista_mercadoriaRaw);
}else{
    var lista_mercadoria = [];
}

function desenha_tab_transacao(){
    // console.log(document.querySelectorAll('table.tab_merc tbody .conteudo_dinamico'))
    conteudo_atual =[...document.querySelectorAll('table#tab_merc tbody .conteudo_dinamico')];
    conteudo_atual.forEach(element => {
         element.remove();
     });


    /*console.log(document.querySelector('table.tab_merc tbody').innerHTML)*/
    /*person é a 'chave' e tab_merc é a Array */
    /*for é um laço de repetição / looping*/

    for (person in lista_mercadoria) {
        // console.log (lista_mercadoria[person].th_mercadoria)
        document.querySelector('table.tab_merc tbody').innerHTML +=
            `<tr class="conteudo_dinamico" >
                <td style="width: 1%; text-align:center;border-bottom: 1px solid #979797;"> 
                ${(lista_mercadoria[person].th_positivo_negativo ? '<strong  style="color:blue; font-weight:bold"> + </strong>' : '<strong style="color:red; font-weight:bold"> - </strong>')}
                </td>
                <td style="width: 70% ; text-align:left;border-bottom: 1px solid #979797;">
                ${(lista_mercadoria[person].th_mercadoria)} 
                </td>   
                <td style="width: 29% ; text-align:right; border-bottom: 1px solid #979797;">
                ${lista_mercadoria[person].th_valor}
               
            `
        
    }
    

}

// lista_mercadoria.push({
//     th_mercadoria: e.target.elements['mercadoria'].value,
//     th_valor: e.target.elements['vlr'].value,
//     th_positivo_negativo: (e.target.elements[0].value == 'true')
//  })
//  localStorage.setItem('lista_mercadoria', JSON.stringify (lista_mercadoria));
//  document.getElementById('inicio_cadastro').click();
/*function apaga(p){
    lista_mercadoria.splice(p, 1);
     desenha_tab_transacao();
     localStorage.setItem('lista_mercadoria', JSON.stringify(lista_mercadoria))
}*/

function limpar_dados(){
    let confirmar = confirm("Deseja apagar TODOS os dados!?!?");
    if(confirmar){
        lista_mercadoria.splice([]);
        localStorage.setItem('lista_mercadoria', JSON.stringify(lista_mercadoria));
        desenha_tab_transacao();
    }
}
desenha_tab_transacao();


