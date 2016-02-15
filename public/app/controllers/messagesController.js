 angular.module('giphyMessenger', ['ngWebSocket'])
        .factory('MyData', function($websocket) {
      
      var dataStream = $websocket('wss://website.com/data');

      var collection = [];

      dataStream.onMessage(function(message) {
        collection.push(JSON.parse(message.data));
      });

      var methods = {
        collection: collection,
        get: function() {
          dataStream.send(JSON.stringify({ action: 'get' }));
        }
      };

      return methods;
    })
    .controller('SomeController', function ($scope, MyData) {
      $scope.MyData = MyData;
    });