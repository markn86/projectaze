/**
 * Defines the behaviour of the arrow.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the arrow.
 *
 * @param {Phaser.Game} game
 */
mg.Arrow = function(game) {
    // Store the game.
    this.game = game;
};

/**
 * Handles creating the arrow.
 *
 * @param {Phaser.Ball} ball
 */
mg.Arrow.prototype.create = function(ball) {
    // Set the arrow's image.
    var positionx = ball.x + 40;
    var positiony = ball.y - (ball.height / 2);

    // Set the arrow image.
    this.arrow = this.game.add.sprite(positionx, positiony, 'arrow');
    // this.arrow.visible = false; - Use this later when detecting the arrow touching the walls.
    this.arrow.scale.setTo(0.75, 0.75);
};

/**
 * Handles creating the arrow.
 *
 * @param {Phaser.Ball} ball
 */
mg.Arrow.prototype.update = function(ball) {
    // Need to change the location of the arrow depending on where the mouse is.
    if (this.game.input.activePointer.isDown) {
        
    }
};

/**
 * Handles removing the arrow from the game.
 */
mg.Arrow.prototype.remove = function() {
    this.arrow.kill();
};
