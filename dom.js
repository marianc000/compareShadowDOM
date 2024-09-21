export function childRoots(root) {
    const roots = [...root.querySelectorAll('*')]
        .map(el => el.shadowRoot)
        .filter(o => o);

    return [...roots, ...roots.flatMap(childRoots)]
}

  