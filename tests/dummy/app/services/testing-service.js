import Service from '@ember/service';

export default class TestingServiceService extends Service {
  get fancyText() {
    return 'hello there';
  }
}
