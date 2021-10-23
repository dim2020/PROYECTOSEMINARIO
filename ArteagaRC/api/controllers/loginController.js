
app.controller('loginCtrl', function(ARTEAGARC, $scope, DTOptionsBuilder, $mdDialog, $filter){
	var _ARTEAGARC= this;
	$scope.sysForm={}
	$scope.usuariosLog = []
	$scope.validar_usuario = function(){
		window.location="http://localhost/ArteagaRC/#/inicio"
	/*	ARTEAGARC.dataLink({
	        params : {
	          method : "consulta_usuario" 
	        },success : function(data){
	        	$scope.usuariosLog =  data
	        	for (var i = 0; i < $scope.usuariosLog.length; i++) {
	        		if ($scope.usuariosLog[i].USERNAME == $scope.sysForm.usertxt &&  $scope.usuariosLog[i].USERNAME ==$scope.sysForm.passtxt) {
	        			window.location="http://localhost/ArteagaRC/#/Inicio"

	        		}else{

	        		}
	        	}
	        	
	        },error : function(error){
	        	console.log(error)
	        }
	     })*/


		
	}
});