/**
 * Defines the behaviour of the game.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

mg.Game = function() { };
mg.Game.prototype.ball = '';

/**
 * Creates the game world.
 */
mg.Game.prototype.create = function() {
    // Now let's create the ball.
    this.ball = new mg.Ball(this.game);
    this.ball.create(0, this.game.world.height);
};
