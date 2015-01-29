var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "Our Page", link: '/OurPage'},
            {text: "GPA Calculator", link: '/GPACalculator'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });

//==================== GPA CONTROLLER ==================================
    mainApp.controller('GPACtrl', function($scope){
        console.log("controller loaded!");

        $scope.textField = "";

        //try to store the data first.
        $scope.data = [

        ]

        $scope.addData = function(){
            if($scope.textField == "A") {
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "A-"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "B+"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "B"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "B-"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "C+"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "C"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "C-"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "D+"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "D"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "D-"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            if($scope.textField == "F"){
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
            else{
                $scope.data.push({text: $scope.textField});
                $scope.textField = "";
            }
        }
        $scope.removeData = function(index){
            $scope.data.splice(index, 1);
        };
    });