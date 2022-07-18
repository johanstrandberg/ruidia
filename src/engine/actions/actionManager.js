import Action from './action';

class ActionManager {
  currentAction = undefined;

  constructor() {
    this.actions = [];
    this.actions.push(new Action('Think', 'Consider your state and your surroundings', 'mental'));
  }

  setCurrentAction(action) {
    this.currentAction = action;
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
