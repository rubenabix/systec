class DashboardController {

  /** @ngInject */
  constructor($mdDialog) {
    this._$mdDialog = $mdDialog;
  }

  $onInit() {
    console.log('Init', 'dashboardController');
    console.log(this);

    this.selectedCurses = {};

  }

  applySelections() {
    console.log('applySelections', this.selectedCurses);
  }

  updateGroup(index, group) {
    const options = {
      code: this.curses[index].code,
      group: group
    };
    this.selectedCurses[options.code] = options.group;
    console.log('Current curses', this.selectedCurses);
  }

  showCurseOptions(event, index) {

    console.log('showCurseOptions');
    this._$mdDialog.show({
      controller: /** @ngInject */
        ($mdDialog, $scope, details)=> {

        console.log('init', 'curseOptions', details);
        $scope.details = details;

        $scope.close = close;
        $scope.selectCurse = selectCurse;

        function selectCurse(index) {
          const group = $scope.details.options[index].group;
          console.log(index, 'select group', group);
          $scope.details.selectedGroup = group;
          console.log($scope.details.options[index]);
          $mdDialog.hide({
            code: $scope.details.code,
            group: group
          });
        }

        function close() {
          console.log('close');
          $mdDialog.hide();
        }

      },
      controllerAs: 'loginController',
      template: require('./curseDetails.template.html'),
      parent: angular.element(document.body),
      targetEvent: event,
      locals: {
        details: this.curses[index]
      },
      clickOutsideToClose: true,
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

  $onDestroy() {
  }

}

export const dashboard = {
  template: require('./dashboard.template.html'),
  bindings: {
    curses: '<curses'
  },
  controller: DashboardController,
  controllerAs: 'dashboardController',
  selector: 'dashboard'
};
