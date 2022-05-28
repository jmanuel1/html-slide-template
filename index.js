import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
import Markdown from './node_modules/reveal.js/plugin/markdown/markdown.esm.js';
import Notes from './node_modules/reveal.js/plugin/notes/notes.esm.js';
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js';

let deck = new Reveal({
  hash: true,
  plugins: [ Markdown, Notes, Highlight ]
});
deck.initialize();
