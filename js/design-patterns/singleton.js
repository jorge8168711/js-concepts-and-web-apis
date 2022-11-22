class Singleton {
  static instance = null;
  name = ''

  constructor(name = '') {
    if (Singleton.instance) return Singleton.instance

    Singleton.instance = this;
    this.name = name;
  }
}
