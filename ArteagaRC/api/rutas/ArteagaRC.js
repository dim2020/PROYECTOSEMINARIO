// Ruta de acceso al menu del web service para extraer datos
app.factory("ARTEAGARC", function($http){
	return {
		dataLink : function(input){
			$.ajax({
				type: 'POST',
				url: "modules/ArteagaRC/api/clases/serviceHandler.php",
				// async: false,
				data: input.params,
				success: function(data){
					input.success(JSON.parse(data));
				},
				error : function(error){
					input.error(error);
				}
			});
		}
	}
})
