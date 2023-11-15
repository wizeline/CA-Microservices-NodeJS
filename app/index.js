import Server from './server/index.js';

class Application {
  constructor() {
    this.port = 3000;
    const server = new Server();
    this.app = server.getAppServer();
  }

  startServer() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}

const myApp = new Application();
myApp.startServer();
