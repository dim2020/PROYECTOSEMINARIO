<?php
    class access {
        public function oraOpen() {
            $oraConnect = oci_connect('ARTEAGA_RC' , 'admin', 'localhost/orcl', 'AL32UTF8');
            if(!$oraConnect) {
                $alertError = oci_error();
                print $alertError['code'];
                print $alertError['message'];
            } else {
                //echo "Conexion Exitosa";
            }
            return $oraConnect;
        }
        public function oraClose($oraConnect){
            @oci_close($oraConnect);
        }
    }
?>