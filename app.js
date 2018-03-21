function User() {
	// body...
	this.name = '';
	this.life = 100;
	this.giveLife = function giveLife(targetUser){
		targetUser.life += 1;
		console.log(this.name + ' gave 1 life to ' + targetUser.name);
	}
}

var Rash = new User();
var Maddy = new User();

Rash.name = 'Rashmit';
Maddy.name = 'Madhu';

Rash.giveLife(Maddy);

console.log(Rash.life);
console.log(Maddy.life);

User.prototype.upperCut = function(targetUser) {
	// body...
	targetUser.life -= 3;
	console.log(this.name + ' uppercutted ' + 'targetUser.name');
};

Maddy.upperCut(Rash);

console.log(Rash.life);
console.log(Maddy.life);
