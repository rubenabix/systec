class LoginController {

  /** @ngInject */
  constructor($state) {
    this._$state = $state;

    this.form = {
      user: '',
      pin: ''
    };
  }

  login(){
    console.log(this.form);
    this._$state.go('dashboard');
  }

}

export const login = {
  template: require('./login.template.html'),
  controller: LoginController,
  controllerAs: 'loginController',
  selector: 'sysLogin'
};
