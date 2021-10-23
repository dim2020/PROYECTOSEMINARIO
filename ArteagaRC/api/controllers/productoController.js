
app.controller('productoCtrl', function(ARTEAGARC, $scope, DTOptionsBuilder, $mdDialog, $filter){
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
  

  //document.getElementById("telefonoProveedor").addEventListener("input", (e) => {
  //  var value = e.target.value;
  //  e.target.value = value.replace(/[^\d]*/g, "");
  //});


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
      $scope.consulta_producto()
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
      $scope.consulta_listado_proveedores();
    }
  }   

  $scope.registrar_producto = function (){
    
    if(($scope.sysForm.nombreProdcuto != undefined && $scope.sysForm.nombreProdcuto != "") && ($scope.sysForm.listaIDProveedor != undefined && $scope.sysForm.listaIDProveedor != "") /*&& $scope.fechaNacimiento != undefined*/){
     
      $scope.disableButton = true 
      $scope.working = true 
      
      //$scope.dateFilterFormat = moment($scope.fechaNacimiento).format("DD/MM/YYYY")
      ARTEAGARC.dataLink({
        params : {
          method : "registrar_producto" ,
          NOMBRE_PRODUCTO : $scope.sysForm.nombreProdcuto,
          IDPROVEEDOR : $scope.sysForm.listaIDProveedor
        },success : function(data){
          $scope.disableButton = false 
          $scope.working = false 
          
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Atención!')
            .textContent('Producto ingresado exitosamente')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
          $scope.$apply()
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
            .textContent('Nombre del producto y selección del proveedor no pueden ir vacios')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
    }
  }
  $scope.get_datos_producto= function(idProducto){

    $scope.botoneraModificar = true
    $scope.idProductoActualizar = null
    for (var i = 0; i < $scope.objGeneralProductos.length; i++) {
      if($scope.objGeneralProductos[i].IDPRODUCTO == idProducto){
        $scope.idProductoActualizar = $scope.objGeneralProductos[i].IDPRODUCTO
        $scope.sysForm.nombreProdcuto = $scope.objGeneralProductos[i].NOMBRE
        $scope.sysForm.listaIDProveedor =   $scope.objGeneralProductos[i].IDPROVEEDOR 
      }
    }

    

  }



  $scope.consulta_producto = function (){
    $scope.disableButton = true 
    $scope.working = true 
    $scope.showContainer3 = false
    $scope.makeTable3 = false
    $scope.showContainer4 = false
    $scope.makeTable4 = false
    $scope.showContainer = true 
    $scope.makeTable = false 
    ARTEAGARC.dataLink({
      params : {
        method : "consultar_producto" 
      },success : function(data){
        $scope.productos =  data
        $scope.objGeneralProductos = data
        console.log("ingreso cliente")
        $scope.disableButton = false 
        $scope.working = false 
        $('#titleSYSIP').animate({height : "hide"}, {duration: "fast"});
        $('#mainTitle').animate({height : "show"}, {duration: "fast"});
        var time = new Date()
        $scope.thisTime = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear() + " - " + time.getHours()  + ":" + time.getMinutes() + ":" + time.getSeconds()
            
        for (var i = 0; i < $scope.productos.length; i++) {  
          if (i+1 == $scope.productos.length) {
            $scope.options = DTOptionsBuilder
            .newOptions()
            //.withOption("serverSide", false)
            //.withOption('order', [])
            //.withOption('paging',false)
            .withButtons([
              //'copy',
              'print',
              //'excel'
            ]);
          }
        }
        $scope.makeTable = true
        $scope.$apply()
      },error : function(error){
        console.log(error)
      }
    })
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

  $scope.actualizar_producto = function (){
    
    if(($scope.sysForm.nombreProdcuto != undefined && $scope.sysForm.nombreProdcuto != "") && ($scope.sysForm.listaIDProveedor != undefined && $scope.sysForm.listaIDProveedor != "") /*&& $scope.fechaNacimiento != undefined*/){
     
      $scope.disableButton = true 
      $scope.working = true 
      
      //$scope.dateFilterFormat = moment($scope.fechaNacimiento).format("DD/MM/YYYY")
      ARTEAGARC.dataLink({
        params : {
          method : "actualizar_producto" ,
          ID : $scope.idProductoActualizar,
          NOMBRE_PRODUCTO : $scope.sysForm.nombreProdcuto,
          IDPROVEEDOR : $scope.sysForm.listaIDProveedor
        },success : function(data){
          console.log("ingreso cliente")
          $scope.disableButton = false 
          $scope.working = false 
          
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Atención!')
            .textContent('Producto actualizado exitosamente')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
          $scope.$apply()
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
            .textContent('Nombre del producto y selección del proveedor no pueden ir vacios')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
    }
  }
 

});