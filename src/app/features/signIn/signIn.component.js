class SignInController {

  /** @ngInject */
  constructor($state, $mdDialog) {
    this._$state = $state;
    this._$mdDialog = $mdDialog;
  }

  showDetails(event, index) {

    console.log('showDetails');
    this._$mdDialog.show({
      controller: /** @ngInject */
        ($mdDialog, $scope, $state, details)=> {

        console.log('init', 'curseOptions', details);
        $scope.details = details;

        $scope.close = close;

        function close() {
          console.log('close');
          $mdDialog.hide();
          $state.go('login');
        }

      },
      controllerAs: 'userDetailsController',
      template: require('./userDetails.template.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      locals: {
        details: {
          name: 'Juan Mora',
          career: 'Ing. Computación',
          user: 'juan@gmail.com',
          pin: '1234',
          teacher: 'Luis Mora'
        }
      },
      clickOutsideToClose: false,
      bindToController: true,
      fullscreen: true
    })
      .then((answer)=> {
        if (answer) {
          this.selectedCurses[answer.code] = answer.group;
          console.log('Current curses', this.selectedCurses);
        }
      }, function () {
        console.log('You cancelled the dialog.');
      });

  }

}

export const signIn = {
  template: require('./signIn.template.html'),
  controller: SignInController,
  controllerAs: 'signInController',
  selector: 'sysSignIn'
};
