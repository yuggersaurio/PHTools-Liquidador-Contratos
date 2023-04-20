<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=}, initial-scale=1.0">
    <title>Document</title>

    <?php require('requests/cdn.php'); ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="js/listar.js"></script>
     
</head>

<body class="bg-dark d-flex justify-content-center aligh-items-center" style="height: 100vh">
    <div class="container rounded col-xl-9 col-lg-12 mt-5">           
            <?php require('navbar.php'); ?>
        
                <script>           
                </script>

        <h2 class="w-100 text-center mb-4">Lista usuarios</h2>
        <table class="table table-dark table-striped table-hover"> 
        <thead class="table-dark">
            <tr>
                <th>Contrato</th>
                <th>Factura</th>
                <th>Documento</th>
                <th>Portal</th>
                <th style="text-align:center">Valor</th>
                <th>Pago</th>
                <th style="text-align:center">Nombre e identificación</th>
                                 
           </tr>
        </thead>
        <tbody id="table_data"></tbody>
        </table>

    </div>
   
    <?php echo '<script>', 'mostrarfacturas();', '</script>';?>

    
</body>
</html>