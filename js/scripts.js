console.clear();

var app = angular.module('bestOfJacHill', []);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});

app.controller('videoController', ['$scope',
function MyCtrl($scope) {
  
  $scope.videos = [
    {title: 'Simple Day To Night Makeup Tutorial', url:'fAFCAVkucSA', watched:false, favorite: false},
    {title: 'My Go To Daytime Glam Makeup Look', url: 'Bo_9aH7_KOM', watched: false, favorite: false},
    {title: 'Daytime Glam For Every Woman', url: 'AdpPDpM1tIA', watched: false, favorite: false},
    {title: 'Easy Fresh Face Makeup Tutorial', url: '4XJcVww4ago', watched: false, favorite: false},
    {title: 'Bright Eyes + Bold Lips - Makeup Look For Small / Tired Eyes', url: 'prnef5UEei4?list=PLGGUnSY-rz5V5RyMgytDZN2S4JA4jdLOV', watched: false, favorite: false},
    {title: 'How to apply false lashes', url: '-jigicP1Qvo?list=PLGGUnSY-rz5V5RyMgytDZN2S4JA4jdLOV', watched: false, favorite: false}
    // {title: '', url: '', watched: false, favorite: false}
  ];
  
  $scope.getIframeSrc = function(src) {
    return 'https://www.youtube.com/embed/' + src;
  };
  
  $scope.favorite = function(index) {
    $scope.videos[index].favorite = !$scope.videos[index].favorite;
  };
  
  $scope.delete = function(index) {
    var toDelete = confirm("Are you sure you wish to delete this video?");
    
    if (toDelete) $scope.videos.splice(index, 1);
    
  };
}
]);
