import Character from './character';

export default class Zombie extends Character {
  constructor(...args) {
    super(...args, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
