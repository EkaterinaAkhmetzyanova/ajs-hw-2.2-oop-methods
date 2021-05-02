import Character from './character';

export default class Daemon extends Character {
  constructor(...args) {
    super(...args, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
