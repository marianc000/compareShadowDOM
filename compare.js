// compare.js

import { allElements, allTextNodes } from "./distributed.js";

function joinNames(els) {
    return els.map(el => el.localName).join('');
}
function joinText(els) {
    return els.map(el => el.textContent).join('');
}
function joinTextOfTextNodes(tnodes) {
    return tnodes.map(el => el.nodeValue).join('').replaceAll(/[\n ]+/g, '');
}
export function compare(source, copy) {
    const els1 = allElements(source);
    const els2 = allElements(copy);
    console.log(copy, source);
    console.log('element counts', els1.length, els2.length);
    console.log('elements in the same order', joinNames(els1) === joinNames(els2));
    console.log('elements have the same text', joinText(els1) === joinText(els2));

    const tnodes1 = allTextNodes(source);
    const tnodes2 = allTextNodes(copy);
    console.log('same text in text nodes', joinTextOfTextNodes(tnodes1) === joinTextOfTextNodes(tnodes2));
}
