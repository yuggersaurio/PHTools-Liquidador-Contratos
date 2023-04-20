let primerNombre = '';




mostrarfacturas = ()=>{


  //Copiar datos a portapapeles

  getlink = (elemento) => {
    var $temp = $("<input>")
  $("body").append($temp);
  $temp.val($(elemento).text()).select();
  document.execCommand("copy");
  $temp.remove();
    }
  //---------
    
  
  mediosPago = (frmTipo) => {

    const fechafrmCupon = new Date();
    const fechafrmCuponCompleta = `${fechafrmCupon.getDate()}${fechafrmCupon.getMonth()}${fechafrmCupon.getFullYear()}`;
    const varfrmContrato = document.getElementById('frmContrato').value; 
    const varfrmId = document.getElementById('frmId').value; 
    const varfrmNombre = document.getElementById('frmNombre').value; 
    const varfrmApellido = document.getElementById('frmApellido').value; 
    const varfrmValor = document.getElementById('frmValor').value; 
    const varfrmConcepto = document.getElementById('frmConcepto').value; 
    const varfrmCorreo = document.getElementById('frmCorreo').value;
    const varfrmFecha = document.getElementById('frmFecha').value;
    var nuevaFecha = varfrmFecha.replace(/(-)/gm,"");

    if(frmTipo==1){
    //--- Link de pago manual 
    let frmLinkPago = `http://www.portalhouses.com/pages/usuarios/popup_pagos.php?valor=${varfrmValor}&contrato=${varfrmContrato}&nombreComprador=${varfrmNombre}&apellidoComprador=${varfrmApellido}&documentoComprador=${varfrmId}&correoinquilino=${varfrmCorreo}`
    document.getElementById('frmLink').setAttribute('value',frmLinkPago);
    
    }
    //--- Cupon de pago manual  
    if(frmTipo==2){
    let frmCupon = `http://www.portalhouses.com/pages/usuarios/cuponlaunchx.php?nombreComprador=${varfrmNombre} ${varfrmApellido}&valor=${varfrmValor}&fecha_cuponlimite=${nuevaFecha}&fecha_cupon=${nuevaFecha}&cto=${varfrmContrato}`
    window.open(frmCupon,'_blank')
  
    
    }
  }



//Calculo fecha actual/
const fechaActual = new Date();
let diasMora = '';
(fechaActual.getDate())>="6" ? diasMora = (fechaActual.getDate()-6) : "";

//-------------




fetch('http://localhost/phtools/pages/requests/listar.php')
.then(res=>res.json())
.then(facturas=>{
   
    
    let str='';
    let idCalculo = 0;

    

    facturas.map(item => {


     



      //Valor facturado
             valorFactura = Number(item.total);
        //----

       
      //formateo en pesos valores de factura
        
        let formatterPeso = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
             })
        let valorFacturaPesos = formatterPeso.format(valorFactura);   
                   
        //---------------------

        




EjecutarCalculo = (idCalculo,valorFactura,Interes,transferencia) => {
  

  var diasCalcularId = "diasCalcular"+idCalculo;
  const diaFactura = document.getElementById(diasCalcularId).value;  
  
  var calculoFactura = document.getElementsByClassName("totalFactura")[idCalculo];
  var calculoPrejuridico = document.getElementsByClassName("prejuridico")[idCalculo];
  var calculoIntereses = document.getElementsByClassName("intereses")[idCalculo];
  
    
    //Calculo prejuridico
    let prejuridico = 0;
    (diaFactura)>="15" ? prejuridico = ((valorFactura) * 15) / 100 : "";
    ///------------------

    //Calculo intereses
    let valorDiaIntereses = (((valorFactura) * Interes) / 100)/30;
    let totalIntereses = '';
    let diasFacturaReal = diaFactura - 5;
    (diaFactura>=6 ?  totalIntereses = valorDiaIntereses * diasFacturaReal:"");
    //-------------   

    //calculo el total
    let totalFactura = valorFactura + totalIntereses + prejuridico + transferencia;
    //-------------

    let prejuridicoPesos = formatterPeso.format(Math.round(prejuridico));
    let interesesPesos = formatterPeso.format(Math.round(totalIntereses));
    let totalFacturaPesos = formatterPeso.format(Math.round(totalFactura));

    calculoPrejuridico.innerHTML = `<b>Prejuridico: </b>${prejuridicoPesos}`
    calculoIntereses.innerHTML = `<b>Intereses: </b>${interesesPesos}`
    calculoFactura.innerHTML = `<b>Total a pagar: </b>${totalFacturaPesos}`;

  
   


    abrirURL = (tipoURL,PrimerNombre,SegundoNombre,PrimerApellido,SegundoApellido) => {

      //calcular fechas
      const fechaCupon = new Date();
            
      (fechaCupon.getDate() < 10) ? diaActual= "0" + fechaCupon.getDate() : diaActual = fechaCupon.getDate();
      (fechaCupon.getMonth() < 10) ?  mesActual = "0" + (fechaCupon.getMonth() + 1): "";
      anoActual = fechaCupon.getFullYear();
            
      fechaCuponArmadoEspecifico = `${diaFactura}-${mesActual}-${anoActual}`;
      //--------------------
      
    


      if(tipoURL=="1"){
      let urlEspecifico = `http://www.portalhouses.com/pages/usuarios/cuponlaunchx.php?nombreComprador=${PrimerNombre} ${PrimerApellido}&valor=${Math.round(totalFactura)}&fecha_cuponlimite=${fechaCuponArmadoEspecifico}&fecha_cupon=${anoActual}${mesActual}${diaFactura}&cto=${item.Contrato}`
      window.open(urlEspecifico,'_blank');
      }
      if(tipoURL=="2"){
      //Genero URL para link
      let urlLinkPago = `http://www.portalhouses.com/pages/usuarios/popup_pagos.php?valor=${Math.round(totalFactura)}&contrato=${item.Contrato}&nombreComprador=${PrimerNombre}&apellidoComprador=${PrimerApellido}&documentoComprador=${item.Tercero}&correoinquilino=sucorreo@correo.com`
      //-----
      
      //Lo imprimo en input  
      document.getElementById(`example${idCalculo}`).setAttribute('value',urlLinkPago);
      //
      
      
      //window.open(urlLinkPago,'_blank');
            
      
      }
      if(tipoURL==3){
       
      }
     
      
      
      }
      



}


  //separo la razon social
  let nombresito = [] =  item.razon.split(' ');
  //-------------------

//-----

 

        str += `
             
        <tr>

        


            <td>${item.Contrato}</a></td>
            <td>${item.Nrofactura}</td>
            <td align="center"><a href="https://edeb.tayronasoftwareapp.com/view/files/805010508/FAC-FAC-${item.Nrofactura}.PDF" target="_blank"><ion-icon name="cloud-download-outline"></ion-icon></a></td>
            <td align="center"><a href="https://edeb.tayronasoftwareapp.com/view/main.php?usr=${item.Tercero}&opc=main" target="_blank"><ion-icon name="person-circle"></ion-icon></a></td>
            <td align="center">${valorFacturaPesos}</td>
            <td>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dexampleModal${item.Contrato}" >
              Calcular
            </button>
            
            <!-- Modal -->
            <div class="modal fade" id="dexampleModal${item.Contrato}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">



                
                  <div class="modal-header text-dark">
                    
                  <h6 class="modal-title" id="${item.Contrato}">  CTO ${item.Contrato} - ${item.razon} </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                      </div>
                    <div class="modal-body text-dark">
                    <b>Valor facturado: </b> ${valorFacturaPesos}<br><br>
                                         
                  
                    <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">Total a pagar hasta el día:</span>
                    <input class="form-control" value="${fechaActual.getDate()}" class="form-control" list="datalistOptions" placeholder="Especifique día" id="diasCalcular${idCalculo}" type="number" min="6" max="30" maxlength="2">
                    <button type="button" class="btn btn-primary" onclick="EjecutarCalculo(${idCalculo},${valorFactura},${item.Interes},${item.transferencia})">Calcular</button><br>
                    </div>
                                       
                      <b>Interes: </b>${item.Interes}% <br><br>
                      <b>Transferencia: </b>$ ${item.transferencia}<br><br>
                      <div class="prejuridico"><b>Prejuridico: </b></div><br>
                      <div class="intereses"><b>Intereses: </b></div><br>
                      <div class="totalFactura" ><b>Total a pagar: </b></div><br>
                                                          
                              <div class="input-group mb-3">
                              <span class="input-group-text" id="basic-addon3">link de pago:</span>
                              <input class="form-control" onClick="this.select();getlink()" type="text" id="example${idCalculo}" readonly placeholder="Esperando datos">
                              <span class="input-group-text">PSE</span>
                              </div>

                              </div>
                  <div class="modal-footer text-dark">
                 
                  <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"  >
                  Más opciones
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    
                     <li><a href="javascript:abrirURL(1)" class="dropdown-item">Generar cupón hasta la fecha determinada</a></li>
                     <li><a href="javascript:abrirURL(2,'${nombresito[0]}','${nombresito[1]}','${nombresito[2]}','${nombresito[3]}')" class="dropdown-item">Generar link de pago hasta la fecha determinada</a></li>
                     <li><a href="https://edeb.tayronasoftwareapp.com/view/main.php?usr=${item.Tercero}&opc=main"  target="_blank"" class="dropdown-item">Ver información en el portal web</a></li>
                     
                     
                     
                  </ul>
                   </div>

                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    
                  </div>
                </div>
              </div>
            </div></td>
            <td align="center">${item.razon} - ID: ${item.Tercero}</td>
               
            
            
            </tr>      
        `
        idCalculo = idCalculo + 1; 
    });
    document.getElementById('table_data').innerHTML = str;
   

});



}




