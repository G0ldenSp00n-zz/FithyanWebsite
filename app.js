import * as mdc from 'material-components-web';
import {MDCTopAppBar} from '@material/top-app-bar/index';

mdc.autoInit();

// Instantiation
let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);
