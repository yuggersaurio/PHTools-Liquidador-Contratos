<?php

try {

    $conexion = new PDO("mysql:host=116.202.3.151;port=3306;dbname=","portalho","");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    //Consultamos la tabla de facturas
    $resutadoFacturas = $conexion->query('SELECT * FROM facturas_tayrona, parametros WHERE documento = "FAC" ORDER BY Contrato ASC') or die(print($conexion->errorInfo()));
    //
   
    
    
    // Creo arreglo de facturas

    $facturas = [];
    while($itemFacturas = $resutadoFacturas->fetch(PDO::FETCH_OBJ) ){
        
        $facturas[] = [
            'Nrofactura' => $itemFacturas->Nrofactura,
            'razon' => $itemFacturas->razon,
            'Tercero' => $itemFacturas->Tercero,
            'Contrato' => $itemFacturas->Contrato,
            'total' => $itemFacturas->total,
            'Estado' => $itemFacturas->Estado,
            'Interes' => $itemFacturas->interesMensual,
            'transferencia' => $itemFacturas->transferencia
            
        ];
    

    }
    //-----
    
    echo json_encode($facturas);
    

} catch(PDOException $error){
   
echo $error->getMessage();
die();

}
