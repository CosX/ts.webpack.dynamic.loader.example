import minesweeper from './minesweeper.svelte';
import { IModule } from '../../interfaces/module';
const app: IModule = {
    init: (el: HTMLElement, options: Object = {}) => {
        new minesweeper({ target: el });
    }
}
export default app;