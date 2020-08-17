import {Button} from './Button';
import {Icon} from './icons';

/**
 * A Button controling the reading speed of webrice
 */
export class SpeedButton extends Button {
    currentSpeed: number
    /**
     *
     * @param {Icon} Icon - Icon on button
     * @param {string} alt - alt of button
     * @param {string} id - id of button
     * @param {string} title - title of utton
     * @param {string} classes - string containing classes of button
     */
    constructor(Icon: Icon, alt: string, id: string,
        title: string, classes?: string) {
      super(Icon, alt, id, title, classes);
      this.currentSpeed = 0;
    }
    /**
     * Enables user to change reading speed
     */
    onClicked(): void {
      console.log('clicked!');
    }
    /**
     * Increases reading speed
     * @param {number} increase how much to increase
     */
    speedUp(increase: number): void {
      console.log('to be implemented');
    }
    /**
     * Decrease reading speed
     * @param {number} decrease how much to decrease
     */
    slowDown(decrease: number): void {
      console.log('to be implemented');
    }
    /**
     * @return {number} current reading speed
     */
    getCurrentSpeed(): number {
      return this.currentSpeed;
    }
    /**
     * Sets current reading speed
     * @param {number} speed what current speed will be
     */
    private setCurrentSpeed(speed: number): void {
      this.currentSpeed = speed;
    }
}
