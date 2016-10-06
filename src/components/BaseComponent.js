class Controller {

  constructor(options, ...args) {
    this.activeTimeline = options.activeTimeline;
    this.timeline = this.activeTimeline;
    this.config = options.config;
    if (options.controller) {
      this.controller = options.controller;
    }
    this.elements = {
      container: options.container,
    };
    this.init(options, args);
  }

  init(options, ...args) {
    console.log(options, args);
  }

}
export default Controller
