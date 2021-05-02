import Character from './character';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}
