// distributed.js

export function allChildNodes(parent) {
    let children = [];

    if (parent.assignedNodes && parent.assignedNodes().length)
        children.push(...parent.assignedNodes());
    else {
        if (parent.shadowRoot) {
            parent = parent.shadowRoot;
        }

        children.push(...parent.childNodes);
    }
 
    return [...children, ...children.flatMap(allChildNodes)];
}

export function allElements(parent) {
    return allChildNodes(parent).filter(n => Node.ELEMENT_NODE === n.nodeType);
}

export function allTextNodes(parent) {
    return allChildNodes(parent).filter(n => Node.TEXT_NODE === n.nodeType);
}