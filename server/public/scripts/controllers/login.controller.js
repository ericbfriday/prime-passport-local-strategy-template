myApp.controller('LoginController', function ($http, $location, UserService) {
  console.log('LoginController created');
  var vm = this;
  vm.user = {
    username: '',
    password: ''
  };
  vm.message = '';

  vm.login = function () {
    // leave this in the controller
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = 'Enter your username and password!';
    } else {
      UserService.login(vm.user);
    }
  };

  vm.registerUser = function () {
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = 'Choose a username and password!';
    } else {
      UserService.registerUser(vm.user);
    }
  }
});
