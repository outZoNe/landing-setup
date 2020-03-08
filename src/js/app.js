import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all';
import '../sass/app.scss';
import 'lazyload';

$('#app').text('It`s work!');

/**
 * Ленивая загрузка картинок. Желательно вызывать ее в самом конце.
 */
lazyload();
