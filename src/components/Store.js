import store from 'store'

export default class Store {

  constructor (key) {
    this.key = key || 'gsapui'

    this.props = {
      isPlaying: 'isPlaying',
      progress: 'progress',
      timeScale: 'timeScale',
      isSavingPosition: 'isSavingPosition',
    }

    // Set up getters and setters for all props
    for (let prop in this.props) {
      this.register(prop)
    }
  }

  /**
   * Register fields with getters and setters
   */
  register (field) {
    let prop = {}
    prop[field] = {}
    prop[field].get = () => this.get(field)
    prop[field].set = value => this.set(field, value)
    Object.defineProperties(this, prop)
  }

  /**
   * Get localstorage key with a key prefix to a value
   */
  get (key) {
    return store.get(`${this.key}-${key}`)
  }

  /**
   * Set localstorage key with a key prefix
   */
  set (key, value) {
    return store.set(`${this.key}-${key}`, value)
  }

  restore () {

  }

}
