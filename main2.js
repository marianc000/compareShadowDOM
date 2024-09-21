// main2.js

import { innerHTML } from "./html.js";
import { compare } from "./compare.js";

let source = document.body;
const copy = document.createElement('body');
copy.setHTMLUnsafe(innerHTML(source));
compare(source, copy);

