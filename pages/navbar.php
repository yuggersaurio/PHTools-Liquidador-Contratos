</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PHTools</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a data-bs-toggle="modal" href ="#staticBackdrop" class="nav-link" >Generar medios de pago</a>
        </li>
        
        </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Contrato" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>


<!-- Modal para links y cupones manuales -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Genenerar medios de pago</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <div class="input-group mb-3">
        
         
           </div>
           <div class="input-group mb-3">
           <input placeholder = "Numero de contrato" type="text" class="form-control" id="frmContrato" aria-describedby="basic-addon3" value="9999">
           </div>

           <div class="input-group mb-3">
           <input placeholder = "Identificación" type="text" class="form-control" id="frmId" aria-describedby="basic-addon3">
           </div>

           <div class="input-group mb-3">
           <input placeholder = "Nombre" type="text" class="form-control" id="frmNombre" aria-describedby="basic-addon3">
           </div>

           <div class="input-group mb-3">
           <input placeholder = "Apellido" type="text" class="form-control" id="frmApellido" aria-describedby="basic-addon3">
           </div>

           <div class="input-group mb-3">
           <input placeholder = "Correo electronico" type="text" class="form-control" id="frmCorreo" aria-describedby="basic-addon3">
           </div>

           <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon1">Fecha limite</span>
           <input type="date" class="form-control" id="frmFecha" aria-describedby="basic-addon3">
           </div>

           <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon1">$</span>
           <input placeholder = "Valor a pagar" type="text" class="form-control" id="frmValor" aria-describedby="basic-addon3">
           </div>



           <div class="input-group mb-3">
           <input placeholder = "Concepto del pago" type="text" class="form-control" id="frmConcepto" aria-describedby="basic-addon3">
           </div>

           <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon3">link de pago:</span>
            <input class="form-control" onClick="this.select();getlink()" type="text" id="frmLink" readonly placeholder="Esperando datos" >
              <span class="input-group-text">PSE</span>
                </div>


           
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" onClick="mediosPago(1)">Generar link de pago</button>
      <button type="button" class="btn btn-success" onClick="mediosPago(2)">Generar cupón de pago</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>