
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function Line(): void {
    }
}




class threeDLine {
    x: number
    y: number
    z: number
    x1: number
    y1: number
    z1: number
    fov: number

    constructor(_x: number, _y: number, _z: number, _x1: number, _y1: number, _z1: number) {
        this.x = _x
        this.y = _y
        this.z = _z
        this.x1 = _x1
        this.y1 = _y1
        this.z1 = _z1
    }


    update(_x: number, _y: number, _z: number) {
        this.x = _x
        this.y = _y
        this.z = _z
    }
    draw() {
        picture.drawLine(((this.fov * this.x) * this.z), ((this.fov * this.y) * this.z), 0, 0, 0)
    }
}
