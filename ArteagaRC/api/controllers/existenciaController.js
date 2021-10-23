
app.controller('existenciaCtrl', function(ARTEAGARC, $scope, DTOptionsBuilder, $mdDialog, $filter){
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


  $scope.consultar_existencia_reporte = function (){
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
        method : "consultar_existencia_reporte" 
      },success : function(data){
        $scope.existencias =  data  
        $scope.disableButton = false 
        $scope.working = false 
        $('#titleSYSIP').animate({height : "hide"}, {duration: "fast"});
        $('#mainTitle').animate({height : "show"}, {duration: "fast"});
        var time = new Date()
        $scope.thisTime = time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear() + " - " + time.getHours()  + ":" + time.getMinutes() + ":" + time.getSeconds()
            
        for (var i = 0; i < $scope.existencias.length; i++) {  
          if (i+1 == $scope.existencias.length) {
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

 
  $scope.consultar_existencia_reporte()

  
 

});