import Action from './action';

class ActionManager {
  constructor() {
    this.actions = [];
    this.currentAction = undefined;
    this.actions.push(new Action('Think', 'Consider your state and your surroundings', 'mental'));
  }

  setCurrentAction(action) {
    this.currentAction = action;
  }

  get currentAction() {
    return this.currentAction;
  }

  get availableActions() {
    return this.actions;
  }

  update(ms) {
    if (this.currentAction) {
      this.currentAction.update(ms);
    }
  }
}

export default ActionManager;
