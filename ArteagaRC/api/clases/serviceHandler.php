<?php
require_once 'serviceArteagaRC.php';

$referencia = new serviceArteagaRC();

if (isset($_POST['method']) != null){
        switch ($_POST['method']) {

                case 'registrar_proveedor':
                        $result = $referencia->registrar_proveedor($_POST['NOMBRE'], $_POST['DIRECCION'], $_POST['TELEFONO'], $_POST['CORREOE'], $_POST['HORARIOATENCION'] );
                break;
                case 'actualizar_proveedor':
                        $result = $referencia->actualizar_proveedor($_POST['ID'], $_POST['NOMBRE'], $_POST['DIRECCION'], $_POST['TELEFONO'], $_POST['CORREOE'], $_POST['HORARIOATENCION'] );
                break;
                case 'consulta_proveedor':
                        $result = $referencia->consulta_proveedor();
                break;
                
                
                case 'registrar_producto':
                        $result = $referencia->registrar_producto($_POST['NOMBRE_PRODUCTO'], $_POST['IDPROVEEDOR']);
                break;

                case 'consulta_listado_proveedores':
                        $result = $referencia->consulta_listado_proveedores();
                break;

                case 'consulta_listado_productos':
                        $result = $referencia->consulta_listado_productos();
                break;

                case 'consultar_producto':
                        $result = $referencia->consultar_producto();
                break;

                case 'actualizar_producto':
                        $result = $referencia->actualizar_producto($_POST['ID'], $_POST['NOMBRE_PRODUCTO'], $_POST['IDPROVEEDOR']);
                break;

                
                case 'consultar_existencia':
                        $result = $referencia->consultar_existencia();
                break;
                case 'ingresar_productos_actualizar':
                        $result = $referencia->ingresar_productos_actualizar($_POST['IDPRODUCTO'], $_POST['IDPROVEEDOR'], $_POST['CANTIDAD']);
                break;
                case 'ingresar_productos_nuevo':
                        $result = $referencia->ingresar_productos_nuevo($_POST['IDPRODUCTO'], $_POST['IDPROVEEDOR'], $_POST['CANTIDAD']);
                break;
                case 'egreso_productos_actualizar':
                        $result = $referencia->egreso_productos_actualizar($_POST['IDPRODUCTO'], $_POST['IDPROVEEDOR'], $_POST['CANTIDAD']);
                break;
                case 'consultar_existencia_reporte':
                        $result = $referencia->consultar_existencia_reporte();
                break;
                default:
                        echo 'No Existe esa Funcion';
        }
} else {
        echo 'no trae nada';
}

echo json_encode($result);
?>
