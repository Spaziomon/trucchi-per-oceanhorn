/**
 * SpaziomonCoordinates - Simple Space Coordinate Object
 * Author: Spaziomon
 * License: Custom
 */

class SpaziomonCoordinates {
    /**
     * Creates a new set of 3D coordinates.
     * @param {number} x - X axis position (in kilometers).
     * @param {number} y - Y axis position (in kilometers).
     * @param {number} z - Z axis position (in kilometers).
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Calculates the distance from this point to another set of coordinates.
     * @param {SpaziomonCoordinates} other - Another coordinate object.
     * @returns {number} - Distance in kilometers.
     */
    distanceTo(other) {
        if (!(other instanceof SpaziomonCoordinates)) {
            console.error('[SpaziomonCoordinates] Invalid coordinates provided.');
            return NaN;
        }
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const dz = this.z - other.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

// Example usage:
// const pointA = new SpaziomonCoordinates(0, 0, 0);
// const pointB = new SpaziomonCoordinates(1000, 2000, 3000);
// console.log(pointA.distanceTo(pointB)); // Output: ~3741.66 km

module.exports = SpaziomonCoordinates;
