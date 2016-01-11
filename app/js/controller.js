'use strict';

/* Controllers */

var mapApp = angular.module('mapApp', ['ngRoute']);

mapApp.controller('mapContainer',function($scope){
 
	//console.log($routeParams.param);

	$scope.multipleSelect= [];

	$scope.data = [
	{'name':'cheese','lat':12.979670,'long':77.590794},
	{'name':'tom','lat':12.978771, 'long':77.599570},
	{'name':'moz','lat':12.976134, 'long':77.599786},
	{'name':'mush','lat':12.974162, 'long':77.610517},
	{'name':'pep','lat':12.969698,'long':77.593077}
	];

	var mapOptions = {
		zoom: 9,
		center: new google.maps.LatLng(12.97,77.59),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};

	$scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	$scope.markers = [];

	//var infoWindow = new google.maps.InfoWindow();
    $scope.getData = function (n){
    	//console.log(n);
    	for (var i=0;i<n.length;i++){
    		console.log(n);
    		$scope.createMarker($scope.data[n-1]);
    	}
    	

    }

	$scope.createMarker = function (info){

		var marker = new google.maps.Marker({
			map: $scope.map,
			position: new google.maps.LatLng(info.lat, info.long)
			
		});

		console.log(info);
			$scope.markers.push(marker);
		
		

	};
	
});





