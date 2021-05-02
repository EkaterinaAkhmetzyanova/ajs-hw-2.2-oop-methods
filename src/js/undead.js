import Character from './character';

export default class Undead extends Character {
  constructor(...args) {
    super(...args, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
