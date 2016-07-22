	define(['angular', './px-module'], function(angular, sampleModule) {
	    'use strict';
	    return sampleModule.controller('AirCtrl', ['$scope','$http', function($scope,$http,$stateParams) {
	    	var updateStatus = function(){
	    		$http.get('/api/mservice/value?type=pm2.5').success(function(data){
	    			$scope.pm25=data;
	    		});
	    		$http.get('/api/mservice/value?type=pm10').success(function(data){
	    			$scope.pm10=data;
	    		});
	    		$http.get('/api/mservice/value?type=pm1.0').success(function(data){
	    			$scope.pm1=data;
	    		});
	    	};
    	    setInterval(function(){
            $scope.$apply(updateStatus);
             },60000);

            updateStatus();

	}]);
});