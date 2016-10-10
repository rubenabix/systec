//const root = 'https://www.juui.org';
const root = 'http://localhost:3008';

const curses = {
  list: root + '/api/curses/v1/list'
};

class sysAPI {

  /** @ngInject */
  constructor($http) {

    this._$http = $http;

  }

  getCursesList() {
    return this._$http.get(curses.list);
  }

}

export default sysAPI;
