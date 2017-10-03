myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;

  self.userObject = {};

  self.getuser = function () {
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        console.log('User Data: ', self.userObject.userName);
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  }

  self.registerUser = function (userCreds) {
    console.log('sending to server...', userCreds);

    $http.post('/register', vm.user).then(function (response) {
      console.log('success');
      $location.path('/home');
    }).catch(function (error) {
      console.log('error');
    });
  }

  self.login = function (userCreds) {
    console.log('sending to server...', userCreds);

    $http.post('/', userCreds).then(
      function (response) {
        console.log('success: ', response.data);
        // location works with SPA (ng-route)
        $location.path('/user');
      }).catch(function (error) {
        console.log('failure error: ', error);
      });
  }

  self.logout = function () {
    $http.get('/user/logout').then(function (response) {
      console.log('logged out');
      $location.path("/home");
    });
  }
});

