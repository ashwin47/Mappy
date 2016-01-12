'use strict';

/* Controllers */

var mapApp = angular.module('mapApp', ['ngRoute']);

mapApp.controller('mapContainer',function($scope){

	//console.log($routeParams.param);

	$scope.multipleSelect= [];

	$scope.data = [
	{'name':'Vidhana Soudha','lat':12.979670,'long':77.590794},
	{'name':'Chinnaswamy Stadium','lat':12.978771, 'long':77.599570},
	{'name':'St. marks Cathedral','lat':12.976134, 'long':77.599786},
	{'name':'MG Road','lat':12.974162, 'long':77.610517},
	{'name':'Sree Kanteerava Stadium','lat':12.969698,'long':77.593077}
	];

	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(12.97,77.59),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};

    $scope.mapInit = function(){
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];

    },

	$scope.getData = function (n){      // onclick 
    	//console.log(n);
            $scope.mapInit(); // re init for refresh
          	for (var i=0;i<n.length;i++){
    		console.log(n[i]);
    		$scope.createMarker($scope.data[n[i]-1]);
    	}
    },


    
    
    $scope.mapInit();
    $scope.createMarker = function (info){

    	var marker = new google.maps.Marker({
    		map: $scope.map,
    		position: new google.maps.LatLng(info.lat, info.long)

    	});

    	console.log(info);
    	$scope.markers.push(marker); // create map



    };

});





