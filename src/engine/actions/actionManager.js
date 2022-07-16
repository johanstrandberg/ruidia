class ActionManager {
  constructor() {
    this.actions = [];
    this.currentAction = undefined;
  }

  setCurrentAction(action) {
    this.currentAction = action;
  }

  get currentAction() {
    return this.currentAction;
  }
}

export default ActionManager;
