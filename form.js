
function comisionCB(MG){//COMISION SIN DOS DECIMALES
    if(MG<=1000){
        return 0;
    } else if(MG<=10000){
        MG = MG*0.005;
        return (Math.round(MG*1000))/1000;
    } else{
        MG = MG*0.015;
        MG = (Math.round(MG*1000))/1000;
        return MG;
    }
}

function comision(MG){//COMISION DOS DECIMALES REDONDEO
    if(MG<=1000){
        return 0;
    } else if(MG<=10000){
        MG = MG*0.005;
        return (Math.round(MG*100))/100;
    } else{
        MG = MG*0.015;
        return (Math.round(MG*100))/100;
    }
}

function itf(MG){//ITF DOS DECIMALES
    let itf;
    itf = (parseInt(MG/1000))*0.05;
    itf =parseInt(itf*100);
    return itf;
}

function redondeo(MG, valor, MT){// REDONDEO DEPENDIENDO DE LOS DECIMALES CON VALOR
    let comi2 ;
    let itf2;
    
    if(valor == 100){
        comi2 = comision(MG);
        itf2 = itf(MG);
        let vari1 = (parseInt((MG + comi2 + itf2)*valor)-parseInt(MG + comi2 + itf2)*valor)/valor;
        vari1 = (vari1*10)-parseInt(vari1*10);
        vari1 = vari1/10;
    
        return vari1;

    } else{
        comi2 = comisionCB(MG);
        itf2 = itf(MG);
        let vari1 = (parseInt((MT + comi2 + itf2)*valor)-parseInt(MT + comi2 + itf2)*valor)/valor;
        vari1 = (vari1*10)-parseInt(vari1*10);
        vari1 = vari1/10;
    
        return vari1;
    }
    
    
    
}

function calculadoraBN(MG){ // CALCULO CORRECTO DE GIROS
    let comisionBN = comision(MG);
    let itfBN = itf(MG);
    let redondeoBN = redondeo(MG, 100);

    let montoTotalBN = parseInt((MG+comisionBN+itfBN-redondeoBN)*100)/100;

    document.getElementById("giroBn").innerHTML=MG;
    document.getElementById("ComisionBN").innerHTML=comisionBN;
    document.getElementById("ItfBN").innerHTML=itfBN;
    document.getElementById("RedondeoBN").innerHTML=redondeoBN;
    document.getElementById("MontoTotalBN").innerHTML=montoTotalBN;
/*
    document.getElementById("giroBn").value = MG;
    document.getElementById("ComisionBN").value = comisionBN;
    document.getElementById("ItfBN").value = itfBN;
    document.getElementById("RedondeoBN").value = redondeoBN;
    document.getElementById("MontoTotalBN").value = montoTotalBN;*/

    return montoTotalBN;

}

function calculadoraCoreBank(MG){ // CALCULO DEL COREBANK
    
    let MontoTotalBn = MG;
    console.log(MontoTotalBn);

    let comisionCoreB;
    let itfCB2;
    let redondeoCB;
    let montoTotalCB = MG;
    let montoGiroCB;
        
    itfCB2 = itf(montoTotalCB);
    montoTotalCB = montoTotalCB-itfCB2;
    comisionCoreB = comisionCB(montoTotalCB);
    redondeoCB = redondeo(montoTotalCB, 1000, MontoTotalBn);
    montoGiroCB = montoTotalCB-comisionCoreB + redondeoCB;
    montoGiroCB = Math.round(montoGiroCB*10)/10;

    console.log(montoTotalCB);
    console.log(comisionCoreB);
    console.log(redondeoCB);
    console.log(montoGiroCB);
    


    let monTotal = calculadoraBN(montoGiroCB);

   // document.getElementById("MontoTotalBN").value = montoTotalBN;
    document.getElementById("MontoRecibo").value = MontoTotalBn-monTotal;
    //console.log(comision(29555.300));
    //console.log(itf(29555.300));

    /*
    itfCB2=itf(montoTotalCB);
    montoTotalCB = montoTotalCB-itfCB2;
    comisionCoreB = comisionCB(montoTotalCB);
    redondeoCB = redondeo(montoTotalCB, 1000, MontoTotalBn);
    montoGiroCB = montoTotalCB-comisionCoreB + redondeoCB;
    montoGiroCB = Math.round(montoGiroCB*10)/10;

*/
      

}


function MontoGiro(){

    let montos = parseFloat(document.getElementById("Monto").value);

    if(montos<=1000){
        document.getElementById("mensaje").innerHTML="No necesita usar la calculadora";
    }else {        
        calculadoraCoreBank(montos);

    }

}


//console.log(comision(29555.300));
//console.log(itf(29555.300));
//console.log(redondeo(29555.300));
//console.log(parseInt((29555.30+comision(29555.300)+itf(29555.300)-redondeo(29555.300))*100)/100);


