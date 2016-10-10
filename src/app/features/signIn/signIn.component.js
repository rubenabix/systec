class SignInController {

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

export const signIn = {
  template: require('./signIn.template.html'),
  controller: SignInController,
  controllerAs: 'signInController',
  selector: 'sysSignIn'
};
