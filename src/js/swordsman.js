import Character from './character';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
