var appinfo={
	"version":"1.0",
	"updated":"Not available"
};

angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.appinfo=appinfo;

	var date = new Date();

	/*cordova.plugins.notification.local.schedule({
		id: 1,
		title: "Moadi App",
		message: "Thanks for login.....",
		at: date
	});*/

}])
   
.controller('profileCtrl', ['$scope', '$stateParams','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup) {
$scope.appinfo=appinfo;
$scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Are you sure you want to logout?',
     template: ''
   });

   confirmPopup.then(function(res) {
     if(res) {
		 localStorage.clear();
       window.location.href="#/welcom";
     } else {
     }
   });
 };

$scope.logout = function() {
	$scope.showConfirm();
}

}])
   
.controller('myReservationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$scope.appinfo=appinfo;

}])
      
.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.changeLanguage = function() {
        lang = $("#welcome-button1").attr("language");
        if(lang=="Arabic") {
            $("#welcome-button1").html("English");
            $("#welcome-button1").attr("language","English");
        } else {
            $("#welcome-button1").html("Arabic");
             $("#welcome-button1").attr("language","Arabic");
        }
       
        //$("#welcome-button1").attr("language");
        //lang="Arabic";
        
        //setTimeout(function(){
            var $frame = $('.goog-te-menu-frame:first');
            $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();

			$frame.contents().find('.goog-te-menu2-item span.text').each(function(){
				if($(this).html() == lang) {
					$(this).click();
				}
			});
			
			
       // },500)
        
    }
    $scope.redirect =function(pagename) {
        if(pagename=="login") {
            window.location.href="#/login";
        }
        if(pagename=="register") {
             window.location.href="#/register";
        }
        
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams','$http','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$ionicPopup) {
	/*$.get("http://www.moadii.com/account/login", function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
		//$('#login_page').html(data);
    });*/
	$scope.UserName="";
	$scope.Password="";
	$scope.showAlert = function(str) {
		var alertPopup = $ionicPopup.alert({
			title: 'Please fill the following details',
			template: str
		});
	}
	$scope.login = function() {
		//alert($scope.frmlogin.$valid)
		if($scope.frmlogin.$valid) {
			localStorage.username=$scope.UserName;
			window.location.href="#/page1/home";
		} else {
			var str="";
			if($scope.frmlogin.UserName.$error.required)
				str="Username <br>";
			if($scope.frmlogin.Password.$error.required)
				str+="Password <br>"
			if(str!="")
				$scope.showAlert(str);
		}

		
		
		/*alert($("input[name=__RequestVerificationToken]").val());
		var RequestVerificationToken = $("input[name=__RequestVerificationToken]").val();
		//var parameter = JSON.stringify({__RequestVerificationToken:RequestVerificationToken,UserName:"upwork",Password:"123456",returnURL:""});
		var parameter = {__RequestVerificationToken:RequestVerificationToken,UserName:"upwork",Password:"123456",returnURL:""};
		var url="http://www.moadii.com/account/login";


		$http({
            url: url,
            method: "POST",
            data: {__RequestVerificationToken:RequestVerificationToken,UserName:"upwork",Password:"123456",returnURL:""},
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
        }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
		});
		*/
  

/*

		$http.post(url, parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			console.log(data);
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
*/	
	}

}])
   
.controller('registerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.appinfo=appinfo;

}])
 
