
app.controller('proveedoresCtrl', function(ARTEAGARC, $scope, DTOptionsBuilder, $mdDialog, $filter){
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
  $scope.objGeneralProveedores;
  $scope.idProveedorActualizar = null
  
  /*$("#pest1").hide()
  $("#pest2").hide()*/
  //$("#pantallaIndex").css("display", "none")
  

  document.getElementById("telefonoProveedor1").addEventListener("input", (e) => {
    var value = e.target.value;
    e.target.value = value.replace(/[^\d]*/g, "");
  });
  document.getElementById("telefonoProveedor2").addEventListener("input", (e) => {
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
      /*$("#pest1").show()
      $("#pest2").hide()*/
      $scope.makeTable = false
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
      $scope.consulta_proveedor()
    }else{
      $scope.pest1=false;
      $scope.pest2=true;
      /*$("#pest1").hide( )
      $("#pest2").show()*/
      $(".md-datepicker-input").attr("size", "30")
      $("#mainTitle").css("display","none")
      $scope.makeTable = false
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
    }
  }   
  $scope.actualizar_proveedor = function (){
    
    if(($scope.sysForm.nombreProveedor != undefined && $scope.sysForm.nombreProveedor != "") && ($scope.sysForm.direccionProveedor != undefined && $scope.sysForm.direccionProveedor != "") /*&& $scope.fechaNacimiento != undefined*/){
     
      $scope.disableButton = true 
      $scope.working = true 
      
      //$scope.dateFilterFormat = moment($scope.fechaNacimiento).format("DD/MM/YYYY")
      ARTEAGARC.dataLink({
        params : {
          method : "actualizar_proveedor" ,
          ID : $scope.idProveedorActualizar,
          NOMBRE : $scope.sysForm.nombreProveedor,
          DIRECCION : $scope.sysForm.direccionProveedor,
          TELEFONO : $scope.sysForm.telefonoProveedor,
          CORREOE : $scope.sysForm.correoElectronicoProveedor,
          HORARIOATENCION : $scope.sysForm.horarioAtencionProveedor
        },success : function(data){
          console.log("ingreso cliente")
          $scope.disableButton = false 
          $scope.working = false 
          
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Atención!')
            .textContent('Proveedor actualizado exitosamente')
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
            .textContent('Nombre y dirección del proveedor no pueden ir vacios')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
    }
  }
  $scope.registrar_proveedor = function (){
    
    if(($scope.sysForm.nombreProveedor != undefined && $scope.sysForm.nombreProveedor != "") && ($scope.sysForm.direccionProveedor != undefined && $scope.sysForm.direccionProveedor != "") /*&& $scope.fechaNacimiento != undefined*/){
     
      $scope.disableButton = true 
      $scope.working = true 
      
      //$scope.dateFilterFormat = moment($scope.fechaNacimiento).format("DD/MM/YYYY")
      ARTEAGARC.dataLink({
        params : {
          method : "registrar_proveedor" ,
          NOMBRE : $scope.sysForm.nombreProveedor,
          DIRECCION : $scope.sysForm.direccionProveedor,
          TELEFONO : $scope.sysForm.telefonoProveedor,
          CORREOE : $scope.sysForm.correoElectronicoProveedor,
          HORARIOATENCION : $scope.sysForm.horarioAtencionProveedor
        },success : function(data){
          console.log("ingreso cliente")
          $scope.disableButton = false 
          $scope.working = false 
          
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('body')))
            .clickOutsideToClose(true)
            .title('Atención!')
            .textContent('Proveedor ingresado exitosamente')
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
            .textContent('Nombre y dirección del proveedor no pueden ir vacios')
            .ariaLabel('Error')
            .ok('Aceptar')
            
          );
    }
  }
  $scope.get_datos_proveedor = function(idProveedor){

    $scope.botoneraModificar = true
    $scope.idProveedorActualizar = null
    for (var i = 0; i < $scope.objGeneralProveedores.length; i++) {
      if($scope.objGeneralProveedores[i].IDPROVEEDOR == idProveedor){
        $scope.idProveedorActualizar = $scope.objGeneralProveedores[i].IDPROVEEDOR
        $scope.sysForm.nombreProveedor = $scope.objGeneralProveedores[i].NOMBRE
        $scope.sysForm.direccionProveedor = $scope.objGeneralProveedores[i].DIRECCION
        $scope.sysForm.telefonoProveedor = $scope.objGeneralProveedores[i].TELEFONO
        $scope.sysForm.correoElectronicoProveedor = $scope.objGeneralProveedores[i].CORREO_ELECTRONICO
        $scope.sysForm.horarioAtencionProveedor = $scope.objGeneralProveedores[i].HORARIO_ATENCION
      }
    }

    

  }

  $scope.consulta_proveedor = function (){
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
        method : "consulta_proveedor" 
      },success : function(data){
        $scope.proveedores =  data
        $scope.objGeneralProveedores = data
        console.log("ingreso cliente")
        $scope.disableButton = false 
        $scope.working = false 
        $('#titleSYSIP').animate({height : "hide"}, {duration: "fast"});
        $('#mainTitle').animate({height : "show"}, {duration: "fast"});
        var time = new Date()
        $scope.thisTime = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear() + " - " + time.getHours()  + ":" + time.getMinutes() + ":" + time.getSeconds()
            
        for (var i = 0; i < $scope.proveedores.length; i++) {  
          if (i+1 == $scope.proveedores.length) {
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

 

  
 

});