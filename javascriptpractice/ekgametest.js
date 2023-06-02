let hp = 100;
let attack;
let enemyAttack;
let enemyHp = 100;
let round = 1;
let combat = true;while (combat === true){    console.log("******************************************************");
console.log(`Round ${round} of combat`);
console.log("----------------------");attack = Math.floor(Math.random() * 10);
enemyAttack = Math.floor(Math.random() * 10);enemyHp -= attack;
hp -= enemyAttack;console.log(`You attack the enemy for ${attack} damage they have ${enemyHp} HP left`);
console.log(`The enemy attacks you for ${enemyAttack} damage you have ${hp} HP left`);    if (hp <= 0){
        console.log("======================================================");
        console.log("You have died!");
        combat = false;
    } else if (enemyHp <= 0){
        console.log("======================================================");
        console.log("The enemy has died!");
        combat = false;
    }    round++;
}