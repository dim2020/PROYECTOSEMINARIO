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
                <h1>Control de Existencia Productos</h1>
              </div>
            </center>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            
              <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click = "validar_pestania('P1')" style="/*max-height: 45px;margin-top: 15px;*/">Ingreso de producto</md-button>  
                   
          </div>
          <div class="col-md-6">
            
              <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click = "validar_pestania('P2')" style="/*max-height: 45px;margin-top: 15px;*/">Egreso de producto</md-button>    
                 
          </div>
        </div>
        <br>
        <!-- <div class="center" id="mainTitle" style="display:none; ">
          <h3 style=" margin: 0 10px; font-weight: 300;">Datos obtenidos el: {{thisTime}}</h3>
          <hr style="width:100%;"/>
        </div> -->




        <div ng-show="pest1" >
          <div class="col-12">
            <div class="row">
              <div class="col-md-3">
                <md-input-container class="md-block"  flex-xs flex-gt-xs="60" layout="column">
                  <label>Seleccione producto</label>
                    <md-select name="producto" ng-model="sysForm.listaIDProducto"  required>
                      <md-option ng-repeat="listadoProducto in listadoProductos  track by $index" ng-click="cambiar_combo_categoria(listadoProducto.IDPRODUCTO);" value="{{listadoProducto.IDPRODUCTO}}">{{listadoProducto.NOMBRE}}</md-option>
                    </md-select>
                </md-input-container>
              </div>
              <div class="col-md-3">
                <md-input-container class="md-block"  flex-xs flex-gt-xs="60" layout="column">
                  <label>Seleccione proveedor</label>
                  <md-select name="proveedor" ng-model="sysForm.listaIDProveedor"  required>
                    <md-option ng-repeat="listadoProveedor in listadoProveedores track by $index" ng-click="cambiar_combo_categoria(listadoProveedor.IDPROVEEDOR);" value="{{listadoProveedor.IDPROVEEDOR}}">{{listadoProveedor.NOMBRE}}</md-option>
                  </md-select>
                </md-input-container>
              </div>
              <div class="col-md-3">
                <md-input-container class="md-block"   layout="column" required>
                  <label>Ingrese Cantidad</label>
                  <input id="cantidad1" ng-model="sysForm.cantidad" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                  </md-input-container>
              </div>
              <div class="col-md-3">
                <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click="ingresar_productos();" >Confirmar</md-button>       
              </div>
            </div>
          </div>            
        </div>
        <div ng-show="pest2" class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-md-3">
                <md-input-container class="md-block"  flex-xs flex-gt-xs="60" layout="column">
                  <label>Seleccione producto</label>
                    <md-select name="producto" ng-model="sysForm.listaIDProducto"  required>
                      <md-option ng-repeat="listadoProducto in listadoProductos  track by $index" ng-click="cambiar_combo_categoria(listadoProducto.IDPRODUCTO);" value="{{listadoProducto.IDPRODUCTO}}">{{listadoProducto.NOMBRE}}</md-option>
                    </md-select>
                </md-input-container>
              </div>
              <div class="col-md-3">
                <md-input-container class="md-block"  flex-xs flex-gt-xs="60" layout="column">
                  <label>Seleccione proveedor</label>
                  <md-select name="proveedor" ng-model="sysForm.listaIDProveedor"  required>
                    <md-option ng-repeat="listadoProveedor in listadoProveedores track by $index" ng-click="cambiar_combo_categoria(listadoProveedor.IDPROVEEDOR);" value="{{listadoProveedor.IDPROVEEDOR}}">{{listadoProveedor.NOMBRE}}</md-option>
                  </md-select>
                </md-input-container>
              </div>
              <div class="col-md-3">
                <md-input-container class="md-block"   layout="column" required>
                  <label>Ingrese Cantidad</label>
                  <input id="cantidad2" ng-model="sysForm.cantidad" tyle="text-transform:uppercase;" value=""  onkeyup="javascript:this.value=this.value.toUpperCase();">
                  </md-input-container>
              </div>
              <div class="col-md-3">
                <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click="extraer_productos();" >Confirmar</md-button>       
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