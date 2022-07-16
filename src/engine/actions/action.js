class Action {
  name = '';
  description = '';
  type = '';
  progress = 0;
  maxProgress = 100;

  constructor(name, description, type, maxProgress) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.maxProgress = maxProgress;
  }
}

export default Action;
