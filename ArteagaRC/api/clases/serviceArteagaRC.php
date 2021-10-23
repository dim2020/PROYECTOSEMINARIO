<?php
header('Content-Type: text/html; charset=ISO-8859-1');
set_time_limit(0);
include_once('../access.php');

class serviceArteagaRC extends access {

    function guardar_panel_control($sector, $param){

        $query = "
              INSERT INTO PANEL_CONTROL
              VALUES( $sector, $param, TO_DATE(TO_CHAR(SYSDATE,'DD/MM/YYYY HH24:MI:SS'),'DD/MM/YYYY HH24:MI:SS'))
           
      ";
    //  echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
        //Ends getMenuNode Function
    }

    

    function consulta_proveedor(){

        $query = "
              SELECT * FROM PROVEEDOR
              ORDER BY IDPROVEEDOR ASC
           
      ";
    //  echo $query;
        $data = array();

        try{
            $oraConnect = $this->oraOpen();
            $state = oci_parse($oraConnect, $query);
            oci_execute($state);

            while(($row = oci_fetch_assoc($state)) != false){
                $data[] = $row;
                unset($row);
            }
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($state);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($state);
        $this->oraClose($oraConnect);


        return $data;
        //Ends getMenuNode Function
    }
    function registrar_proveedor($nombre, $direcion, $telefono, $correoElectronico, $horarioAtencion){


        $query = "
          
          INSERT INTO PROVEEDOR 
          (NOMBRE, DIRECCION, TELEFONO, CORREO_ELECTRONICO, HORARIO_ATENCION)
          VALUES( 
                    '$nombre',
                    '$direcion',
                    '$telefono',
                    '$correoElectronico',
                    '$horarioAtencion'
                    
                )
        
  
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }

    function actualizar_proveedor($id, $nombre, $direcion, $telefono, $correoElectronico, $horarioAtencion){


        $query = "
          
          UPDATE PROVEEDOR SET 
          NOMBRE = '$nombre', 
          DIRECCION = '$direcion', 
          TELEFONO = '$telefono', 
          CORREO_ELECTRONICO = '$correoElectronico', 
          HORARIO_ATENCION = '$horarioAtencion' 
          WHERE
            IDPROVEEDOR = $id
                     
                    
                
        
  
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }

    function consulta_listado_proveedores(){

        $query = "
                SELECT 
                    IDPROVEEDOR,
                    NOMBRE
                FROM 
                    PROVEEDOR
                ORDER BY IDPROVEEDOR ASC
           
      ";
    //  echo $query;
        $data = array();

        try{
            $oraConnect = $this->oraOpen();
            $state = oci_parse($oraConnect, $query);
            oci_execute($state);

            while(($row = oci_fetch_assoc($state)) != false){
                $data[] = $row;
                unset($row);
            }
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($state);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($state);
        $this->oraClose($oraConnect);


        return $data;
        //Ends getMenuNode Function
    }

    function consulta_listado_productos(){

        $query = "
                SELECT 
                    IDPRODUCTO,
                    NOMBRE
                FROM 
                    PRODUCTO
                ORDER BY IDPRODUCTO ASC
           
      ";
    //  echo $query;
        $data = array();

        try{
            $oraConnect = $this->oraOpen();
            $state = oci_parse($oraConnect, $query);
            oci_execute($state);

            while(($row = oci_fetch_assoc($state)) != false){
                $data[] = $row;
                unset($row);
            }
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($state);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($state);
        $this->oraClose($oraConnect);


        return $data;
        //Ends getMenuNode Function
    }

    function registrar_producto($nombre, $idProveedor){


        $query = "
          
          INSERT INTO PRODUCTO 
          (NOMBRE, IDPROVEEDOR)
          VALUES( 
                    '$nombre',
                    $idProveedor
                    
                )
        
  
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }


    function actualizar_producto($id, $nombre, $idProveedor){


        $query = "
          
          UPDATE PRODUCTO SET 
          NOMBRE = '$nombre', 
          IDPROVEEDOR = $idProveedor
          WHERE
            IDPRODUCTO = $id
                     
                    
                
        
  
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }

    function consultar_producto(){

        $query = "
              SELECT IDPRODUCTO, prod.NOMBRE, prov.NOMBRE NOMBRE_PROVEEDOR, prod.IDPROVEEDOR FROM PRODUCTO prod
              INNER JOIN PROVEEDOR prov ON prod.IDPROVEEDOR = prov.IDPROVEEDOR
              ORDER BY IDPRODUCTO ASC
           
      ";
    //  echo $query;
        $data = array();

        try{
            $oraConnect = $this->oraOpen();
            $state = oci_parse($oraConnect, $query);
            oci_execute($state);

            while(($row = oci_fetch_assoc($state)) != false){
                $data[] = $row;
                unset($row);
            }
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($state);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($state);
        $this->oraClose($oraConnect);


        return $data;
        //Ends getMenuNode Function
    }

    function consultar_existencia(){

        $query = "
              SELECT * FROM EXISTENCIA
           
      ";
    //  echo $query;
        $data = array();

        try{
            $oraConnect = $this->oraOpen();
            $state = oci_parse($oraConnect, $query);
            oci_execute($state);

            while(($row = oci_fetch_assoc($state)) != false){
                $data[] = $row;
                unset($row);
            }
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($state);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($state);
        $this->oraClose($oraConnect);


        return $data;
        //Ends getMenuNode Function
    }

     function ingresar_productos_actualizar( $idProdcucto, $idProveedor, $cantidad){


        $query = "
          
          UPDATE EXISTENCIA SET 
          CANTIDAD = (SELECT ext.CANTIDAD from EXISTENCIA ext where ext.IDPRODUCTO = $idProdcucto    
            AND ext.IDPROVEEDOR = $idProveedor) + $cantidad
          WHERE
            IDPRODUCTO = $idProdcucto    
            AND IDPROVEEDOR = $idProveedor        
  
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }

    function ingresar_productos_nuevo($idProdcucto, $idProveedor, $cantidad){


        $query = "
          
          INSERT INTO EXISTENCIA (IDPRODUCTO, IDPROVEEDOR, CANTIDAD)
          VALUES ( $idProdcucto, $idProveedor, $cantidad)  
         
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }


    function egreso_productos_actualizar( $idProdcucto, $idProveedor, $cantidad){


        $query = "
          
          UPDATE EXISTENCIA SET 
          CANTIDAD = (SELECT ext.CANTIDAD from EXISTENCIA ext where ext.IDPRODUCTO = $idProdcucto    
            AND ext.IDPROVEEDOR = $idProveedor) - $cantidad
          WHERE
            IDPRODUCTO = $idProdcucto    
            AND IDPROVEEDOR = $idProveedor        
  
        ";
   
        //echo $query;
        try{
            $oraConnect = $this->oraOpen();
            
            $stid = oci_parse($oraConnect, $query);
            oci_execute($stid);
            oci_commit($oraConnect);
            oci_close($oraConnect);
            //Ends getMenuNode Function
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($stid);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($stid);
        $this->oraClose($oraConnect);
    

    }

    function consultar_existencia_reporte(){

        $query = "
              
                SELECT 
                    EXT.IDEXISTENCIA ID, 
                    PRD.NOMBRE PRODUCTO, 
                    PROV.NOMBRE PROVEEDOR, 
                    EXT.CANTIDAD CANTIDAD   
                FROM EXISTENCIA EXT
                INNER JOIN PRODUCTO PRD ON  EXT.IDPRODUCTO = PRD.IDPRODUCTO
                INNER JOIN PROVEEDOR PROV ON EXT.IDPROVEEDOR = PROV.IDPROVEEDOR

                           
      ";
    //  echo $query;
        $data = array();

        try{
            $oraConnect = $this->oraOpen();
            $state = oci_parse($oraConnect, $query);
            oci_execute($state);

            while(($row = oci_fetch_assoc($state)) != false){
                $data[] = $row;
                unset($row);
            }
        }catch (Exception $Error){
            echo 'Error: ', $Error->getMessage(), "\n";
            oci_free_statement($state);
            $this->oraClose($oraConnect);
        }
        oci_free_statement($state);
        $this->oraClose($oraConnect);


        return $data;
        //Ends getMenuNode Function
    }
}//serviceCatalogoSitios
?>
