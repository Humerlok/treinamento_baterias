
// botões do indice
function rolaPara(indiceid) { 
    let element = document.getElementById(indiceid); 
    element.scrollIntoView({ behavior: 'smooth' }); 
}

// botões do drone
function dlv1(){
    let txtDLV1 = document.getElementById('dlv1'); 
    txtDLV1.style.display = 'block';
    let txtDLV2 = document.getElementById('dlv2');
    txtDLV2.style.display = 'none';
}

function dlv2(){
    let txtDLV2 = document.getElementById('dlv2'); 
    txtDLV2.style.display = 'block';
    let txtDLV1 = document.getElementById('dlv1'); 
    txtDLV1.style.display = 'none';
    
}


