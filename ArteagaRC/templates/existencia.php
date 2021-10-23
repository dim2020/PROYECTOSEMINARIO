<?php
include("menu.php")
?>
<style type="text/css">
  table.dataTable tbody tr.selected{
        background-color: #fcb3b3 !important;
      }
</style>
<div class="view" id="syslog" layout="column" style="padding: 0; position: relative;">
  <!-- INICIO DE ENCABEZADO -->

      <div class="container-fluid">
        
        <div class="row">
          <div class="col-12">
            <center>
              <div class="center tracking-in-expand-fwd-secundarios">
                <h1>Reporte de existencia</h1>
              </div>
            </center>
          </div>
        </div>
        
                <!-- <div class="center" id="mainTitle" style="display:none; ">
          <h3 style=" margin: 0 10px; font-weight: 300;">Datos obtenidos el: {{thisTime}}</h3>
          <hr style="width:100%;"/>
        </div> -->
 
           
            
         
      </div>
      <div class="row">
        
         <div class="col-12">
           
                      <div ng-if="makeTable" class="wide generalStyle">
                        <table datatable="ng" dt-options="options" class="wide stripe hover row-border food-table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Producto</th>
                              <th>Proveedor</th>
                              <th>Cantidad</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr ng-repeat="existencia in existencias|filter:search" class="items"   ng-click=" " >

                              <td>{{existencia.ID}}</td>
                              <td>{{existencia.PRODUCTO}}</td>
                              <td>{{existencia.PROVEEDOR}}</td>
                              <td>{{existencia.CANTIDAD}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="centerD center" ng-show="noData">
                        <h1 style="font-weight: 300;">Esta consulta no tiene datos.</h1>
                      </div>
            </div>
      </div>
         
    </div>
  
  <!-- FIN DE ENCABEZADO -->
  <br/>
  <div layout="row" layout-sm="column" layout-align="space-around" ng-show="working" class="centerD" style="height: 30%; margin-top: 1%; margin-bottom: 5%; ">
    <md-progress-circular md-mode="indeterminate"></md-progress-circular>
  </div>
 
  
  <!-- CREACION DE TABLA -->
 
</div>