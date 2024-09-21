import { outerHTML, innerHTML } from "./html.js";

import { compare } from "./compare.js";

let source = document.body;
let html = outerHTML(source);
let copyContainer = document.createElement('div');
copyContainer.setHTMLUnsafe(html.replace(/(<\/?)body/g, '$1xbody'));
let copy = copyContainer.firstElementChild;

compare(source, copy);

console.log('-'.repeat(30));

html = innerHTML(source);
copy = document.createElement('body');
copy.setHTMLUnsafe(html);
compare(source, copy);

console.log('-'.repeat(30));

html = innerHTML(source);
copy = document.createElement('body');
copy.setHTMLUnsafe(html + 'this is a text node');
compare(source, copy); 
