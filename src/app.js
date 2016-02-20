export class App {
  configureRouter(config, router) {
    config.title = 'Ticket';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' }
    ]);

    this.router = router;
  }
}
