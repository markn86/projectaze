/**
 * Defines the behaviour of the ball.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the ball.
 *
 * @param {Phaser.Game} game
 */
mg.Ball = function(game) {
    // Store the game.
    this.game = game;
};

/**
 * Handles creating the ball.
 *
 * @param {int} positionx
 * @param {int} positiony
 */
mg.Ball.prototype.create = function(positionx, positiony) {
    // Set the ball's image.
    this.ball = this.game.add.sprite(positionx, positiony, 'ball');

    // Allow us to click on the ball.
    this.ball.inputEnabled = true;
    this.ball.events.onInputDown.add(this.clicked, this);

    // We need to enable physics on the ball and add physics properties.
    this.game.physics.arcade.enable(this.ball);
    this.ball.body.bounce.x = 0.8;
    this.ball.body.bounce.y = 0.8;
    this.ball.body.gravity.set(180, 180);
    this.ball.body.collideWorldBounds = true;
    
    // Decrease the size of the ball.
    this.ball.scale.setTo(0.75, 0.75);

};

/**
 * Handles when the ball is clicked.
 */
mg.Ball.prototype.clicked = function() {
    this.ball.body.velocity.x = 3000;
    this.ball.body.velocity.y = 3000;
};
