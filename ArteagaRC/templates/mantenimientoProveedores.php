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
                <h1>Mantenimiento de Proveedor</h1>
              </div>
            </center>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            
              <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click = "validar_pestania('P1')" style="/*max-height: 45px;margin-top: 15px;*/">Consultar proveedor</md-button>  
                   
          </div>
          <div class="col-md-6">
            
              <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click = "validar_pestania('P2')" style="/*max-height: 45px;margin-top: 15px;*/">Crear proveedor</md-button>    
                 
          </div>
        </div>
        <br>
        <!-- <div class="center" id="mainTitle" style="display:none; ">
          <h3 style=" margin: 0 10px; font-weight: 300;">Datos obtenidos el: {{thisTime}}</h3>
          <hr style="width:100%;"/>
        </div> -->




        <div ng-show="pest1" >
          <div id="botoneraModificar" class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-md-3">
                    <md-input-container class="md-block"   layout="column" required>
                      <label>Ingrese Nombre</label>
                      <input ng-model="sysForm.nombreProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                </div>
                <div class="col-md-3">
                     <md-input-container class="md-block"   layout="column">
                      <label>Ingrese Dirección</label>
                      <input ng-model="sysForm.direccionProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>    
                </div>
                <div class="col-md-3">
                     <md-input-container class="md-block"   layout="column" required>
                      <label>Ingrese Teléfono</label>
                      <input id="telefonoProveedor1" ng-model="sysForm.telefonoProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                </div>
                <div class="col-md-3">
                     <md-input-container class="md-block"   layout="column">
                      <label>Ingrese Correo Electrónico</label>
                      <input ng-model="sysForm.correoElectronicoProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                </div>
                  
              </div>
              <div class="row">
                <div class="col-md-4">
                     <md-input-container class="md-block"   layout="column">
                        <label>Ingrese Horario de atención</label>
                        <input ng-model="sysForm.horarioAtencionProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                      </md-input-container>
                    
                </div>
                <div class="col-md-4">
                       
                      
                </div>
                <div class="col-md-4">
                  <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click="actualizar_proveedor();" >Modificar</md-button>   
                </div>
              </div>
            </div>
          </div> 
        </div>




        <div class="row">  
          <br/>
            <div class="col-12">
           
                      <div ng-if="makeTable" class="wide generalStyle">
                        <table datatable="ng" dt-options="options" class="wide stripe hover row-border food-table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Nombre</th>
                              <th>Dirección</th>
                              <th>Teléfono</th>
                              <th>Correo electrónico</th>
                              <th>Horario de atención</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr ng-repeat="proveedor in proveedores|filter:search" class="items" ng-class="{'selected':proveedor.IDPROVEEDOR == selectedRow}"  ng-click=" setClickedRow(proveedor.IDPROVEEDOR);get_datos_proveedor(proveedor.IDPROVEEDOR)" >

                              <td>{{proveedor.IDPROVEEDOR}}</td>
                              <td>{{proveedor.NOMBRE}}</td>
                              <td>{{proveedor.DIRECCION}}</td>
                              <td>{{proveedor.TELEFONO}}</td>
                              <td>{{proveedor.CORREO_ELECTRONICO}}</td>
                              <td>{{proveedor.HORARIO_ATENCION}}</td>
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
          <div ng-show="pest2"  class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-md-3">
                    <md-input-container class="md-block"   layout="column" required>
                      <label>Ingrese Nombre</label>
                      <input ng-model="sysForm.nombreProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                </div>
                <div class="col-md-3">
                     <md-input-container class="md-block"   layout="column">
                      <label>Ingrese Dirección</label>
                      <input ng-model="sysForm.direccionProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                         
                </div>
                <div class="col-md-3">
                     <md-input-container class="md-block"   layout="column" required>
                      <label>Ingrese Teléfono</label>
                      <input id="telefonoProveedor2" ng-model="sysForm.telefonoProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                         
                </div>
                <div class="col-md-3">
                     <md-input-container class="md-block"   layout="column">
                      <label>Ingrese Correo Electrónico</label>
                      <input ng-model="sysForm.correoElectronicoProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                </div>
                <!-- <div class="col-md-2">
                     <md-input-container class="md-block"   layout="column">
                      <label>Ingrese Horario de atención</label>
                      <input ng-model="sysForm.horarioAtencionProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                </div>
 -->              </div>
            

            <div class="row">
              <div class="col-md-4">
                   <md-input-container class="md-block"   layout="column">
                      <label>Ingrese Horario de atención</label>
                      <input ng-model="sysForm.horarioAtencionProveedor" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                    </md-input-container>
                  
              </div>
              <div class="col-md-4">
                   
                  
              </div>
              <div class="col-md-4">
                   <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click="registrar_proveedor();" >Guardar</md-button>
                       
              </div>
              
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