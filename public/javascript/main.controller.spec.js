'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.data.length;
           scope.removeData(1);
           expect(scope.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.data.length;
            scope.textField = "kittens";
            scope.addData();
            expect(scope.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.pages.length > 0).toEqual(true);
    });
});

//=== Testing GPACtrl =============================================
describe('Testing controller: GPACtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl', {
            $scope: scope
        });
    }));        it("should return a string called GoodGrade", function(){
            scope.GPA = 3;
            var string = scope.GPAColor();
            expect(string = "GoodGrade")
        });

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){

        //This test only works when there are values initially stored
       /* it("should be able to remove an item from the list", function(){
            var initialLength = scope.grades.length;
            scope.removeData(1);
            expect(scope.grades.length < initialLength).toEqual(true);
        });*/

        it("should be able to add an item to grades", function(){
            var initialLength = scope.grades.length;
            scope.textFieldGrades = "A";
            scope.addData();
            expect(scope.grades.length > initialLength).toEqual(true);
        });

        it("should be able to add an item to classes", function(){
            var initialLength = scope.classes.length;
            scope.textFieldClasses = "CSci 3601";
            scope.addData();
            expect(scope.classes.length > initialLength).toEqual(true);
        });

        it("should be able to add an item to credits", function(){
            var initialLength = scope.credits.length;
            scope.textFieldCredits = "5";
            scope.addData();
            expect(scope.credits.length > initialLength).toEqual(true);
        });

        it("should return a string called GoodGrade", function(){
            scope.GPA = 3;
            var string = scope.GPAColor();
            expect(string = "GoodGrade")
        });

        it("should be able to calculate the proper gpa", function(){
            scope.textFieldClasses = "CSci 3601";
            scope.textFieldCredits = "5";
            scope.textFieldGrades = "A";
            scope.addData();
            scope.textFieldClasses = "CSci 3401";
            scope.textFieldCredits = "4";
            scope.textFieldGrades = "B";
            scope.addData();
            scope.textFieldClasses = "class5";
            scope.textFieldCredits = "1";
            scope.textFieldGrades = "F";
            scope.addData();
            expect(scope.getGPA() == 3.2).toEqual(true);
        });


    });


});