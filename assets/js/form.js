function registraTransacao(e) {
    e.preventDefault();
        // console.log(e);
        var lista_mercadoriaRaw = localStorage.getItem('lista_mercadoria');
        if (lista_mercadoriaRaw != null){
            var lista_mercadoria = JSON.parse( lista_mercadoriaRaw);
        }else{
            var lista_mercadoria = [];
        }
        desenha_tab_transacao();

        // console.log(lista_mercadoria);
//---------------------------------------------------------
        lista_mercadoria.push({
            th_mercadoria: e.target.elements['mercadoria'].value,
            th_valor: e.target.elements['vlr'].value,
            th_positivo_negativo: (e.target.elements[0].value == 'true')
         })
//---------------------------------------------------------
        // console.log(e.target.elements[0].value); 
        //índice 0 (zero) do form.nova_transacao corresponde ao seletor_compra_Svenda
         //console.log(e);

        //  console.log(lista_mercadoria);
//--------------------------------------------------------------------
         localStorage.setItem('lista_mercadoria', JSON.stringify (lista_mercadoria));
         document.getElementById('inicio_cadastro').click();
        }
        
//------------------------------------------------------------------

// console.log(`oi sou o javascript`)

// const formata_moeda = /[^0-9]+/g
// function formata_valor (e){

// }
