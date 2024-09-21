// html.js

import { childRoots } from "./dom.js";

export function innerHTML(parent) {
    return parent.getHTML({ shadowRoots: childRoots(parent) });
}

export function outerHTML(parent) {
    return parent.cloneNode(false).outerHTML.replace('><', `>${innerHTML(parent)}<`);
}



