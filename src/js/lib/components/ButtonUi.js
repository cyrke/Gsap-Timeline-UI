import BaseComponent from './BaseComponent.js';

class ButtonUi extends BaseComponent {

  init() {
    this.createUi();
  }

  createUi() {
    // Shorthand for the data attribute query selector
    var qs = function(attr) {
      return this.querySelector(`[data-action=${attr}]`);
    }.bind(this.elements.container);

    this.elements.forward = qs('forward');
    this.elements.backward = qs('backward');
    this.elements.togglePlay = qs('toggleplay');

    this.elements.togglePlay.addEventListener('mouseup', evt => {
      let isPaused = this.timeline.paused();
      this.timeline.paused(!isPaused);
      this.togglePlayPause();
    });

    this.elements.forward.addEventListener('mouseup', evt => {
      let progress = this.timeline.progress();
      this.timeline.progress(progress + progress * 0.3);
    });

    this.elements.backward.addEventListener('mouseup', evt => {
      let progress = this.timeline.progress();
      this.timeline.progress(progress - progress * 0.3);
    });

  }

  togglePlayPause() {
    this.elements.togglePlay.innerHTML = !this.timeline.paused() ? 'pause' : 'play_arrow';
  }

}
export default ButtonUi;
