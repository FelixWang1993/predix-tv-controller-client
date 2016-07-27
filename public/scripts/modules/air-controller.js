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
	    		$http.get('/api/mservice/maxmin?type=max&value=pm2.5').success(function(data){
	    			$scope.pm25max=data;
	    		});
	    		$http.get('/api/mservice/maxmin?type=min&value=pm2.5').success(function(data){
	    			$scope.pm25min=data;
	    		});
	    		$http.get('/api/mservice/maxmin?type=max&value=pm1.0').success(function(data){
	    			$scope.pm1max=data;
	    		});
	    		$http.get('/api/mservice/maxmin?type=min&value=pm1.0').success(function(data){
	    			$scope.pm1min=data;
	    		});
	    		$http.get('/api/mservice/maxmin?type=max&value=pm10').success(function(data){
	    			$scope.pm10max=data;
	    		});
	    		$http.get('/api/mservice/maxmin?type=min&value=pm10').success(function(data){
	    			$scope.pm10min=data;
	    		});
	    	};
    	    setInterval(function(){
            $scope.$apply(updateStatus);
             },60000);

            updateStatus();

	}]);
});