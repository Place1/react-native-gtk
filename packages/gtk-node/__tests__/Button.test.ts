import * as gtk from '..';
import { EventEmitter } from 'events';


describe('Button', () => {
  const app = new gtk.Application('asd.asd');

  afterAll(() => {
    app.quit();
  });

  test('it should call the "onClick" callback when clicked', (done) => {
    const button = new gtk.Button();
    button.onClick(() => {
      done();
    });
    button.clicked();
  });

  test('it should call the "onClick" callback once for every click', async () => {
    const button = new gtk.Button();
    const simulatedClicks = 1000;
    const eventEmitter = new EventEmitter();
    eventEmitter.setMaxListeners(simulatedClicks);
    button.onClick(() => {
      eventEmitter.emit('click');
    });
    async function awaitClick() {
      return new Promise((resolve) => {
        const onEvent = () => {
          eventEmitter.removeListener('click', onEvent);
          resolve();
        }
        eventEmitter.on('click', onEvent);
        button.clicked();
      });
    }
    const clicks = [];
    for (let i = 0; i < simulatedClicks; i++) {
      clicks.push(awaitClick());
    }
    await Promise.all(clicks); // expect the promise to resolve! timeout = missed onClick event.
  });
});
