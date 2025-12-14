class Character {
    static charactersCreated = 0;
    #health
    constructor(name) {
        this.name = name;
        this.#health = 100;
        this.isAlive = true;
        Character.charactersCreated++;
    }
    static getCount() {
        return Character.charactersCreated;
    }
    
    get health() {
        return `${this.#health}`
    }
    
    set health(newHealth) {
        if (newHealth < 0) {
            this.isAlive = false;
            this.#health = 0;
        } else {
        this.#health = newHealth;
        this.isAlive = true;
        }
    }
    
    takeDamage(damage) {
        this.#health -= damage;
        if (this.#health < 0) {
            this.isAlive = false;
        } else {
            this.isAlive = true;
        }
    }
    
    get isalive() {
        return this.isAlive;
    }
    
    getStatus() {
        if (this.isAlive) {
            return `${this.name} has ${this.#health} health and is alive`
        } else {
            return `${this.name} has 0 health and is dead`
        }
        
    }

}

class Hero extends Character{
    constructor(name) {
        super(name)
        this.inventory = [];
    }
    pickUpItem(item){
            this.inventory.push(item);
        }
    getItems(){
        return `${this.name} has the following items: ${this.inventory.join(', ')}`
    }
}

class Villain extends Character {
    constructor(name, threat) {
        super(name)
        this.threat = threat;
    }
    getThreat() {
        return `${this.threat}`;
    }
    

}

const merlin = new Hero("Merlin")
const medea = new Hero("Medea")
const troll = new Villain("Troll", 'I will destroy your soul!')


console.log(troll.getThreat()) 
merlin.pickUpItem("Sword")
merlin.takeDamage(15)
medea.takeDamage(5)
medea.pickUpItem("Shield")
console.log(merlin.getItems()) 
console.log(medea.getItems()) 
troll.takeDamage(101)
console.log(troll.getStatus()) 
console.log(medea.getStatus()) 
console.log(merlin.getStatus()) 
console.log(`Total characters created: ${Character.getCount()} `) 