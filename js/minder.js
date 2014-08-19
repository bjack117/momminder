// This holds all angular code including the form
angular.module('MomMinder', ['ui.bootstrap']);
var MinderController = function ($scope) {

  // The following code was provided by the 
  // ui.bootstrap.datepicker module
  // source => http://angular-ui.github.io/bootstrap/
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };
  
  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  // end angular-ui-bootstrap code

  // Create a collection of events that is shown
  // when the user first visits the page
  $scope.collection = [
  {name: "Dale Jack",
  relation: "Mother",
  event: "Birthday",
  date: "Tuesday, August 12, 2014"}]
  
  //Scope is an object that refers to the application model
  // Holds all the options for the family select box
  $scope.familyMembers =
    ["Mom",
    "Dad",
    "Wife",
    "Husband",
    "Brother",
    "Sister",
    "Aunt",
    "Uncle",
    "Cousin",
    "Grandma",
    "Grandpa",
    "Niece",
    "Nephew",
    "Friend"];

  // Holds all the options for the events select box  
  $scope.events = 
    ["Birthday",
    "Anniversary",
    "Graduation",
    "Other"]

  // form submit function 
  // if required params are present
  // add the values to the collection array
  // else
  // show an error message
  $scope.submit = function() {
    if ($scope.name && $scope.relation && $scope.event) {

      // add input data to collection
      $scope.collection.push(
        {name: this.name,
          relation: this.relation,
          event: this.event,
          date: this.dt
        });  

      // set name input box to empty string
      // TODO: can not figure out how to set
      // default values for the select box
      $scope.name = '';

      // no error
      $scope.minderError = false;

      // update the upcoming events list
      $scope.upcomingEvents = findEvents($scope.collection)

    } else {
      $scope.minderError = true;
    }
  }

  // used to find all events that occur within a two week span
  $scope.upcomingEvents = findEvents($scope.collection);
  
  // source 
  // http://stackoverflow.com/questions/7364150/find-object-by-id-in-array-of-javascript-objects
  function findEvents(collection) {
  var twoWeeksAhead = new Date(+new Date + (1000 * 60 * 60 * 24 * 14));

  return $.grep(collection, function(c){ 
    var event_date = new Date(c.date);
    return (event_date <= twoWeeksAhead);
    });
  }

  // clear all saved events and update upcoming events
  $scope.clearMinders = function() {
    $scope.collection = [];
    $scope.upcomingEvents = findEvents($scope.collection);
  };
};
