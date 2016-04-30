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
    // Determines if the ball has moved yet.
    this.hasMoved = false;
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
    this.ball.events.onInputDown.add(this.onDown, this);
    this.ball.events.onInputUp.add(this.onUp, this);

    // Decrease the size of the ball.
    this.ball.scale.setTo(0.75, 0.75);

    // Give the ball some physics.
    this.game.physics.arcade.enable(this.ball);
};

/**
 * Handles updating the ball.
 */
mg.Ball.prototype.update = function() {

};

/**
 * Handles when the ball is pressed.
 */
mg.Ball.prototype.onDown = function() {
    // Can only do something when the ball has stopped.
    if (this.ball.body.velocity.x == 0 && this.ball.body.velocity.y == 0) {
        this.arrow = new mg.Arrow(this.game);
        this.arrow.create(this.ball);
    }
};

/**
 * Handles moving the ball on up.
 */
mg.Ball.prototype.onUp = function() {
    // Need to set the physics of the ball now
    if (!this.hasMoved) {
        // We need to enable physics on the ball and add physics properties.
        this.ball.body.bounce.x = 0.8;
        this.ball.body.bounce.y = 0.8;
        this.ball.body.gravity.set(0, 180);
        this.ball.body.collideWorldBounds = true;

        this.hasMoved = true;
    }

    // Set the ball in motion.
    this.ball.body.velocity.x = 3000;
    this.ball.body.velocity.y = 3000;
    
    // Remove the arrow.
    this.arrow.remove();
};

