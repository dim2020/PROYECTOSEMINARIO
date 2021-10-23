
app.controller('dashboardCtrl', function(SISTEMARIEGO, $scope, DTOptionsBuilder, $mdDialog, $filter){
	var _SISTEMARIEGO = this;
  
  
  $scope.pest1=false;
  $scope.pest2=false;
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
  $scope.intervaloFuncionRiegoAutomatico = 12000
  //$("#pantallaIndex").css("display", "none")
  

  
$scope.generar_grafica = function(){

  SISTEMARIEGO.dataLink({
        params : {
          method : "grafica_humedad" 
        },success : function(data){
          $scope.datosGraficaHumedad = data
          //$scope.disableButton = false 
          $("#titulo1").css("display", "block")
          for (var i = 0; i < $scope.datosGraficaHumedad.length; i++) {
            
          }
          if(window.myChart){
                    window.myChart.destroy();
                } 
                var ctx = document.getElementById("canvas");
                Chart.defaults.global.defaultFontSize = 20;       
                window.myChart = new Chart(ctx,{
                        type: 'bar', //TIPO DE GRAFICA 

                        data: {
                            labels: [$scope.datosGraficaHumedad[0].SECTOR, $scope.datosGraficaHumedad[1].SECTOR, $scope.datosGraficaHumedad[2].SECTOR, $scope.datosGraficaHumedad[3].SECTOR],
                            datasets: [      
                                          
                                {
                                    type: 'bar',
                                    label: 'Mayor a 0% y menor o igual a 25%',
                                    backgroundColor : "#0ABDA0",
                                    data: [$scope.datosGraficaHumedad[0].MAYOR_0_MENOR_25, $scope.datosGraficaHumedad[1].MAYOR_0_MENOR_25, $scope.datosGraficaHumedad[2].MAYOR_0_MENOR_25, $scope.datosGraficaHumedad[3].MAYOR_0_MENOR_25],
                                            

                                },
                                {
                                    type: 'bar',
                                    label: 'Mayor a 25% y menor o igual a 50%',
                                    backgroundColor : "#F28A30",
                                    data:  [$scope.datosGraficaHumedad[0].MAYOR_25_MENOR_50, $scope.datosGraficaHumedad[1].MAYOR_25_MENOR_50, $scope.datosGraficaHumedad[2].MAYOR_25_MENOR_50, $scope.datosGraficaHumedad[3].MAYOR_25_MENOR_50],
                                            

                                },
                                {
                                    type: 'bar',
                                    label: 'Mayor a 50% y menor o igual a 75%' ,
                                    backgroundColor : "#720017",
                                    data:  [$scope.datosGraficaHumedad[0].MAYOR_50_MENOR_75, $scope.datosGraficaHumedad[1].MAYOR_50_MENOR_75, $scope.datosGraficaHumedad[2].MAYOR_50_MENOR_75, $scope.datosGraficaHumedad[3].MAYOR_50_MENOR_75],   
                                },
                                {
                                    type: 'bar',
                                    label: 'Mayor a 75% y menor o igual a 100%' ,
                                    backgroundColor : "#0444BF",
                                    data:  [$scope.datosGraficaHumedad[0].MAYOR_75_MENOR_100, $scope.datosGraficaHumedad[1].MAYOR_75_MENOR_100, $scope.datosGraficaHumedad[2].MAYOR_75_MENOR_100, $scope.datosGraficaHumedad[3].MAYOR_75_MENOR_100],   
                                },
                                
                                
                            ]
                        },
                        options : { //OPCIONES DE LA GRAFICA
                          //  title: "Gráfica de humedad",
                        tooltips: {
                          enabled: true,
                          mode: 'index',
                        },
               
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                yAxes:[{// AXISAS DEL EJE Y

                                      id:'y-axis-0',
                                        ticks: {
                                            
                                            fontSize: 18,//TAMAÑÑO LETRA                                 
                                          min : 10,
                                          //max :100,
                                          stepSize: 10,
                                        },
                                   
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Cantidad'
                                        },
                                        
                                    },
                                    
                                ],
                                xAxes:[{
                                    ticks:{
                                        fontSize: 18
                                    },
                                    scaleLabel: {
                                            display: true,
                                            labelString: 'Sectores'
                                        },
                                    
                                }, 
                               
                               ]
                            },
                           
                           
                            legend:{ //ESTA ES LA LEGENDA QUE SE UBICA EN LA PARTE INFERIOR CON ESTA PODEMOS OCULTAR LAS BARAS Y LINEAS
                                display: true,
                                responsive: true,
                                //fullWidth:true,
                                labels:{
                                    fontSize:12,
                                     usePointStyle: true
                                },
                                position: 'bottom'//POSICION DE LA LEGENDA
                            }
                        }
                    });
          $scope.$apply()
        },error : function(error){
          console.log(error)
        }
      })
    
      SISTEMARIEGO.dataLink({
        params : {
          method : "grafica_luminosidad" 
        },success : function(data){
          $scope.datosGraficaLuminosidad = data
          //$scope.disableButton = false 
          $("#titulo2").css("display", "block")
          for (var i = 0; i < $scope.datosGraficaLuminosidad.length; i++) {
            
          }
          if(window.myChart2){
                    window.myChart2.destroy();
                } 
                var ctx = document.getElementById("canvas2");
                Chart.defaults.global.defaultFontSize = 20;       
                window.myChart2 = new Chart(ctx,{
                        type: 'bar', //TIPO DE GRAFICA 

                        data: {
                            labels: [$scope.datosGraficaLuminosidad[0].SECTOR, $scope.datosGraficaLuminosidad[1].SECTOR, $scope.datosGraficaLuminosidad[2].SECTOR, $scope.datosGraficaLuminosidad[3].SECTOR],
                            datasets: [      
                                          
                                {
                                    type: 'bar',
                                    label: 'Mayor a 0% y menor o igual a 25%',
                                    backgroundColor : "#0ABDA0",
                                    data: [$scope.datosGraficaLuminosidad[0].MAYOR_0_MENOR_25, $scope.datosGraficaLuminosidad[1].MAYOR_0_MENOR_25, $scope.datosGraficaLuminosidad[2].MAYOR_0_MENOR_25, $scope.datosGraficaLuminosidad[3].MAYOR_0_MENOR_25],
                                            

                                },
                                {
                                    type: 'bar',
                                    label: 'Mayor a 25% y menor o igual a 50%',
                                    backgroundColor : "#F28A30",
                                    data:  [$scope.datosGraficaLuminosidad[0].MAYOR_25_MENOR_50, $scope.datosGraficaLuminosidad[1].MAYOR_25_MENOR_50, $scope.datosGraficaLuminosidad[2].MAYOR_25_MENOR_50, $scope.datosGraficaLuminosidad[3].MAYOR_25_MENOR_50],
                                            

                                },
                                {
                                    type: 'bar',
                                    label: 'Mayor a 50% y menor o igual a 75%' ,
                                    backgroundColor : "#720017",
                                    data:  [$scope.datosGraficaLuminosidad[0].MAYOR_50_MENOR_75, $scope.datosGraficaLuminosidad[1].MAYOR_50_MENOR_75, $scope.datosGraficaLuminosidad[2].MAYOR_50_MENOR_75, $scope.datosGraficaLuminosidad[3].MAYOR_50_MENOR_75],   
                                },
                                {
                                    type: 'bar',
                                    label: 'Mayor a 75% y menor o igual a 100%' ,
                                    backgroundColor : "#0444BF",
                                    data:  [$scope.datosGraficaLuminosidad[0].MAYOR_75_MENOR_100, $scope.datosGraficaLuminosidad[1].MAYOR_75_MENOR_100, $scope.datosGraficaLuminosidad[2].MAYOR_75_MENOR_100, $scope.datosGraficaLuminosidad[3].MAYOR_75_MENOR_100],   
                                },
                                
                                
                            ]
                        },
                        options : { //OPCIONES DE LA GRAFICA
                          //  title: "Gráfica de humedad",
                        tooltips: {
                          enabled: true,
                          mode: 'index',
                        },
               
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                yAxes:[{// AXISAS DEL EJE Y

                                      id:'y-axis-0',
                                        ticks: {
                                            
                                            fontSize: 18,//TAMAÑÑO LETRA                                 
                                          min : 10,
                                          //max :100,
                                          stepSize: 10,
                                        },
                                   
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Cantidad'
                                        },
                                        
                                    },
                                    
                                ],
                                xAxes:[{
                                    ticks:{
                                        fontSize: 18
                                    },
                                    scaleLabel: {
                                            display: true,
                                            labelString: 'Sectores'
                                        },
                                    
                                }, 
                               
                               ]
                            },
                           
                           
                            legend:{ //ESTA ES LA LEGENDA QUE SE UBICA EN LA PARTE INFERIOR CON ESTA PODEMOS OCULTAR LAS BARAS Y LINEAS
                                display: true,
                                responsive: true,
                                //fullWidth:true,
                                labels:{
                                    fontSize:12,
                                     usePointStyle: true
                                },
                                position: 'bottom'//POSICION DE LA LEGENDA
                            }
                        }
                    });
          $scope.$apply()
        },error : function(error){
          console.log(error)
        }
      })
}

  

 
  
 

});