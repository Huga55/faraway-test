export const getLastElemOfURL = (url?: string) => {
    if (!url) return null;

    const elems = url.split("/");

    const lastElem = elems[elems.length - 1];

    return lastElem || elems[elems.length - 2];
};
