
app.controller('ingresoEgresoCtrl', function(ARTEAGARC, $scope, DTOptionsBuilder, $mdDialog, $filter){
  var _ARTEAGARC = this;
  
  
  $scope.pest1=false;
  $scope.pest2=false;
  $scope.botoneraModificar = false;
  $scope.working = false
  $scope.working2 = false
  $scope.showContainer = false
  $scope.showContainer2 = false
  $scope.makeTable = false
  $scope.makeTable2 = false
  $scope.disableButton = false
  $scope.flagDesbloqueoCategoria = true
  $scope.nuevoListadoCategorias = []
  var paisFilter = new Array()
  var clienteFilter = new Array()
  var timeFilter = new Array()
  var tempForSelect =  new Array()
  var mayorCuatro =  new Array()
  var fechaInicio="",fechaFinal="";
  $scope.sysForm = {}
  $scope.objGeneralProductos;
  $scope.idProductoActualizar = null
  
  //$("#pantallaIndex").css("display", "none")
  

  document.getElementById("cantidad1").addEventListener("input", (e) => {
    var value = e.target.value;
    e.target.value = value.replace(/[^\d]*/g, "");
  });
  document.getElementById("cantidad2").addEventListener("input", (e) => {
    var value = e.target.value;
    e.target.value = value.replace(/[^\d]*/g, "");
  });


  $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
    $scope.selectedRow = index; 
  }
  $scope.validar_pestania = function(PX){
    if(PX == "P1"){
      $scope.pest1=true;
      $scope.pest2=false;
      $scope.makeTable1 = false
      $scope.showContainer = false
      $scope.makeTable2 = false
      $scope.showContainer2 = false
      $scope.makeTable3 = false
      $scope.showContainer3 = false
      $scope.makeTable4 = false
      $scope.showContaine4 = false
      $scope.objGeneralProveedores = null
      $scope.sysForm.nombreProveedor = null
      $scope.sysForm.direccionProveedor = null
      $scope.sysForm.telefonoProveedor = null
      $scope.sysForm.correoElectronicoProveedor = null
      $scope.sysForm.horarioAtencionProveedor = null
      $scope.selectedRow = null
      $scope.botoneraModificar = false;
      $scope.consulta_listado_productos();
      $scope.consulta_listado_proveedores();
    }else{
      $scope.pest1=false;
      $scope.pest2=true;
      $(".md-datepicker-input").attr("size", "30")
      $("#mainTitle").css("display","none")
      $scope.makeTable1 = false
      $scope.showContainer = false
      $scope.makeTable2 = false
      $scope.showContainer2 = false
      $scope.makeTable3 = false
      $scope.showContainer3 = false
      $scope.makeTable4 = false
      $scope.showContaine4 = false 
      $scope.sysForm.nombreProveedor = null
      $scope.sysForm.direccionProveedor = null
      $scope.sysForm.telefonoProveedor = null
      $scope.sysForm.correoElectronicoProveedor = null
      $scope.sysForm.horarioAtencionProveedor = null
      $scope.selectedRow = null
      $scope.botoneraModificar = false;
      $scope.consulta_listado_productos();
      $scope.consulta_listado_proveedores();
    }
  }   

  $scope.cosultar_existencia = function(){
    ARTEAGARC.dataLink({
        params : {
          method : "consultar_existencia"
        },success : function(data){
          $scope.objetoExistencias = data
          $scope.disableButton = false 
          $scope.working = false 
          
          //$scope.$apply()
        },error : function(error){
          console.log(error)
        }
      })
  }


  $scope.ingresar_productos = function (){
    $scope.accion = "NUEVO"
    if(($scope.sysForm.listaIDProducto != undefined && $scope.sysForm.listaIDProducto != "") && ($scope.sysForm.listaIDProveedor != undefined && $scope.sysForm.listaIDProveedor != "") && ($scope.sysForm.cantidad != undefined && $scope.sysForm.cantidad != "")){
      
      $scope.disableButton = true 
      $scope.working = true 
      ARTEAGARC.dataLink({
        params : {
          method : "consultar_existencia"
        },success : function(data){
          $scope.objetoExistencias = data
          $scope.disableButton = false 
          $scope.working = false 
          for (var i = 0; i < $scope.objetoExistencias.length; i++) {
            if($scope.objetoExistencias[i].IDPRODUCTO == $scope.sysForm.listaIDProducto && $scope.objetoExistencias[i].IDPROVEEDOR == $scope.sysForm.listaIDProveedor){
              $scope.accion = "ACTUALIZAR"
            }
            
          }
          if($scope.accion == "ACTUALIZAR"){
          ARTEAGARC.dataLink({
            params : {
              method : "ingresar_productos_actualizar" ,
              IDPRODUCTO : $scope.sysForm.listaIDProducto,
              IDPROVEEDOR : $scope.sysForm.listaIDProveedor,
              CANTIDAD : $scope.sysForm.cantidad
            },success : function(data){
              $scope.disableButton = false 
              $scope.working = false 
              
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title('Atención!')
                .textContent('Operación exitosa')
                .ariaLabel('Error')
                .ok('Aceptar')
                
              );
              $scope.$apply()
            },error : function(error){
              console.log(error)
            }
          })
      }else{
      //$scope.dateFilterFormat = moment($scope.fechaNacimiento).format("DD/MM/YYYY")
          ARTEAGARC.dataLink({
            params : {
              method : "ingresar_productos_nuevo" ,
              IDPRODUCTO : $scope.sysForm.listaIDProducto,
              IDPROVEEDOR : $scope.sysForm.listaIDProveedor,
              CANTIDAD : $scope.sysForm.cantidad
            },success : function(data){
              $scope.disableButton = false 
              $scope.working = false 
              
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title('Atención!')
                .textContent('Operación exitosa')
                .ariaLabel('Error')
                .ok('Aceptar')
                
              );
              $scope.$apply()
            },error : function(error){
              console.log(error)
            }
          })
        }
          //$scope.$apply()
        },error : function(error){
          console.log(error)
        }
      })
      

      
    }else{
      $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Atención!')
            .textContent('Selección del producto, selección del proveedor y cantidad no pueden ir vacios')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
    }
  }
  

  $scope.extraer_productos = function (){
    $scope.accion = "NUEVO"
    if(($scope.sysForm.listaIDProducto != undefined && $scope.sysForm.listaIDProducto != "") && ($scope.sysForm.listaIDProveedor != undefined && $scope.sysForm.listaIDProveedor != "") && ($scope.sysForm.cantidad != undefined && $scope.sysForm.cantidad != "")){
      
      $scope.disableButton = true 
      $scope.working = true 
      ARTEAGARC.dataLink({
        params : {
          method : "consultar_existencia"
        },success : function(data){
          $scope.objetoExistencias = data
          $scope.disableButton = false 
          $scope.working = false 
          for (var i = 0; i < $scope.objetoExistencias.length; i++) {
            if($scope.objetoExistencias[i].IDPRODUCTO == $scope.sysForm.listaIDProducto && $scope.objetoExistencias[i].IDPROVEEDOR == $scope.sysForm.listaIDProveedor){
              $scope.accion = "ACTUALIZAR"
            }
            
          }
          if($scope.accion == "ACTUALIZAR"){
          ARTEAGARC.dataLink({
            params : {
              method : "egreso_productos_actualizar" ,
              IDPRODUCTO : $scope.sysForm.listaIDProducto,
              IDPROVEEDOR : $scope.sysForm.listaIDProveedor,
              CANTIDAD : $scope.sysForm.cantidad
            },success : function(data){
              $scope.disableButton = false 
              $scope.working = false 
              
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title('Atención!')
                .textContent('Operación exitosa')
                .ariaLabel('Error')
                .ok('Aceptar')
                
              );
              $scope.$apply()
            },error : function(error){
              console.log(error)
            }
          })
      }else{
      //$scope.dateFilterFormat = moment($scope.fechaNacimiento).format("DD/MM/YYYY")
           
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title('Atención!')
                .textContent('No hay disponiblidad')
                .ariaLabel('Error')
                .ok('Aceptar')
                
              );
              $scope.$apply()
             
        }
          //$scope.$apply()
        },error : function(error){
          console.log(error)
        }
      })
      

      
    }else{
      $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Atención!')
            .textContent('Selección del producto, selección del proveedor y cantidad no pueden ir vacios')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
    }
  }
  


  $scope.consulta_listado_proveedores = function(){
    ARTEAGARC.dataLink({
      params : {
        method : "consulta_listado_proveedores" 
      },success : function(data){
        $scope.listadoProveedores =  data
        $scope.disableButton = false 
        $scope.working = false 
        
      },error : function(error){
        console.log(error)
      }
    })
  }

  $scope.consulta_listado_productos = function(){
    ARTEAGARC.dataLink({
      params : {
        method : "consulta_listado_productos" 
      },success : function(data){
        $scope.listadoProductos =  data
        $scope.disableButton = false 
        $scope.working = false 
        
      },error : function(error){
        console.log(error)
      }
    })
  }

 
 

});