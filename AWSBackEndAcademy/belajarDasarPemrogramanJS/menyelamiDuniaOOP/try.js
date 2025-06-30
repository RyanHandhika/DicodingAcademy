// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHai = function () {
//   console.log(`Hallo, morning ${this.name}`);
// };

// const ryan = new Person("ryan", 19);

// console.log(ryan.name);
// console.log(ryan.age);
// ryan.sayHai();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sound() {
//     console.log(`${this.name} sound!!!`);
//   }
// }

// const kucing = new Animal("kucing", 3);

// console.log(kucing.name);
// console.log(kucing.age);
// kucing.sound();

class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }

  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}

function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} attacks with a weapon!`);
    },
  };
}

function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name} defends with a shield!`);
    },
  };
}

function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character.name} casts a spell!`);
    },
  };
}

function createMonster(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character));
}

function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canCastSpell(character));
}

function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canDefend(character));
}

const monster = createMonster("Monster");
monster.canMove();
monster.attack();

const guardian = createGuardian("Guardian");
guardian.canMove();
guardian.defend();

const wizard = createWizard("Wizard");
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior("Warrior");
warrior.canMove();
warrior.attack();
warrior.defend();
