class ScheduleController {

  /** @ngInject */
  constructor() {

    this.curses = [
      {
        day: 'Lunes',
        name: 'Comunicación Técnica',
        room: 'F9-01',
        start: new Date(2016, 10, 10, 6, 30),
        end: new Date(2016, 10, 10, 8, 30),
      },
      {
        day: 'Martes',
        name: 'Comunicación Técnica',
        room: 'F9-02',
        start: new Date(2016, 10, 10, 7, 30),
        end: new Date(2016, 10, 10, 9, 30),
      },
      {
        day: 'Miércoles',
        name: 'Fundamentos de Organización de Computadoras',
        room: 'A9-01',
        start: new Date(2016, 10, 10, 6, 30),
        end: new Date(2016, 10, 10, 8, 30),
      },
      {
        day: 'Viernes',
        name: 'Fundamentos de Organización de Computadoras',
        room: 'A9-02',
        start: new Date(2016, 10, 10, 13, 30),
        end: new Date(2016, 10, 10, 15, 30),
      },
      {
        day: 'Lunes',
        name: 'Fundamentos de Organización de Computadoras',
        room: 'A9-01',
        start: new Date(2016, 10, 10, 14, 0),
        end: new Date(2016, 10, 10, 18, 30),
      }
    ];

  }

  $onInit() {

    console.log('Init', 'scheduleController');

    if (window.Timetable) {
      const timetable = new Timetable();
      timetable.setScope(6, 20);
      timetable.addLocations(['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']);
      this.curses.forEach((curse)=> {
        const description = `${curse.name} : ${curse.room}`;
        timetable.addEvent(description, curse.day, curse.start, curse.end);
      });
      this._renderer = new Timetable.Renderer(timetable);
      this._renderer.draw('.timetable');
    }

  }

  $onDestroy() {
  }

}

export const schedule = {
  template: require('./schedule.template.html'),
  bindings: {
    curses: '<curses'
  },
  controller: ScheduleController,
  controllerAs: 'scheduleController',
  selector: 'sysSchedule'
};
