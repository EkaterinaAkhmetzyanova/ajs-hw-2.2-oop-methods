import Character from './character';

export default class Magician extends Character {
  constructor(...args) {
    super(...args, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
