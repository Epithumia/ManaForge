import {Item} from "@/forge/items/Item";

class No_Item extends Item {
    constructor() {
        super();
    }

    value = 0

    // eslint-disable-next-line no-unused-vars
    text(language) {
        return "No Item"
    }

    energy() {
        return 0;
    }

    // eslint-disable-next-line no-unused-vars
    code(f) {
    }

    source() {
        return [];
    }
}

export {No_Item};
