class Action {
  name = '';
  description = '';
  type = '';
  progress = 0.0;
  maxProgress = 100.0;

  constructor(name, description, type, maxProgress = 100) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.maxProgress = maxProgress;
  }

  get progressPercentage() {
    return this.progress / this.maxProgress;
  }

  update(ms) {
    this.progress += ms / 1000.0;
    if (this.progress >= this.maxProgress) {
      this.progress = 0.0;
      // return completion effects
    }
  }
}

export default Action;
