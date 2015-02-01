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

        $scope.textFieldGrades = "";

        $scope.textFieldClasses = "";

        $scope.textFieldCredits = "";

        $scope.data = [

        ];

        $scope.total = 0;

        $scope.temp = [

        ];

        $scope.GPA = 0;

        $scope.addGrades = function(){
            if($scope.textFieldGrades == "A") {
                $scope.temp.push(4.0);
                $scope.textFieldGrades = "";
            }
            else if($scope.textFieldGrades == "B"){
                $scope.temp.push(3.0);
                $scope.textFieldGrades = "";
            }
            else if($scope.textFieldGrades == "C"){
                $scope.temp.push(2.0);
                $scope.textFieldGrades = "";
            }
            else if($scope.textFieldGrades == "D"){
                $scope.temp.push(1.0);
                $scope.textFieldGrades = "";
            }
            else if($scope.textFieldGrades == "F"){
                $scope.temp.push(0);
                $scope.textFieldGrades = "";
            }
            //getting classes
            if($scope.textFieldClasses.length >= 1) {
                $scope.temp.push($scope.textFieldClasses);
                $scope.textFieldClasses = "";
            }
            //getting credits
            if($scope.textFieldCredits.length >= 1) {
                if($scope.textFieldCredits == "1") {
                    $scope.temp.push(1.0);
                    $scope.total = $scope.total + 1.0;
                    $scope.textFieldCredits = "";
                }
                else if($scope.textFieldCredits == "2") {
                    $scope.temp.push(2.0);
                    $scope.total = $scope.total + 2.0;
                    $scope.textFieldCredits = "";
                }
                else if($scope.textFieldCredits == "3") {
                    $scope.temp.push(3.0);
                    $scope.total = $scope.total + 3.0;
                    $scope.textFieldCredits = "";
                }
                else if($scope.textFieldCredits == "4") {
                    $scope.temp.push(4.0);
                    $scope.total = $scope.total + 4.0;
                    $scope.textFieldCredits = "";
                }
                else if($scope.textFieldCredits == "5") {
                    $scope.temp.push(5.0);
                    $scope.total = $scope.total + 5.0;
                    $scope.textFieldCredits = "";
                }
            }
            $scope.data.push({text: $scope.temp});
            $scope.temp = [];

        };

        $scope.removeData = function(index){
            $scope.data.splice(index, 1);
        };

        $scope.getGPA = function(){
            var GPT = 0;
            for (i = 0; i < data.length; i++){
                GPT = GPT + (data[i[0]] * data[i[2]]);
            }
            $scope.GPA = GPT / $scope.total;
            return $scope.GPA;
        };

    });