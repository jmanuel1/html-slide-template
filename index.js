import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
import Markdown from './node_modules/reveal.js/plugin/markdown/markdown.esm.js';
import Notes from './node_modules/reveal.js/plugin/notes/notes.esm.js';

let deck = new Reveal({
   plugins: [ Markdown, Notes ]
});
deck.initialize();
