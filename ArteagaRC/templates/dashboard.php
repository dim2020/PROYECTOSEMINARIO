<?php
include("menu.php")
?>
<div class="view" id="syslog" layout="column" style="padding: 0; position: relative;">
  <!-- INICIO DE ENCABEZADO -->

      <div class="container-fluid h-100">
        
        <div class="row">
          <div class="col-12">
            <center>
              <div class="center tracking-in-expand-fwd-secundarios">
                <h1>Dashboard</h1>
              </div>
            </center>
          </div>
        </div>
        
        <div class="row">
          
          <div class="col-md-12 center">
            
              <md-button class="md-raised md-primary col-md-11  p-0 scale-up-center-componentes" ng-click = "generar_grafica()" style="/*max-height: 45px;margin-top: 15px;*/">Ver gráficas</md-button>    
                 
          </div>
        </div>
        <div class="row" id="titulo1" style="display: none">
            <div class="col-12">
              <div class="row">
                <div class="col-12 center">
                  <h1>Gráfica de humedad</h1>
                </div>
            </div>
            <div class="row">
              <div id="" style="background-color: #fafafa; " class="col-12">
                <canvas id="canvas" height="300px" ></canvas> 
              </div>
            </div>
          </div>
          
          
        </div>  

        <div class="row" id="titulo2" style="display: none">
            <div class="col-12">
              <div class="row">
                <div class="col-12 center">
                  <h1>Gráfica de Luminosidad</h1>
                </div>
            </div>
            <div class="row">
              <div id="" style="background-color: #fafafa; " class="col-12">
                <canvas id="canvas2" height="300px" ></canvas> 
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