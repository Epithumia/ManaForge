import {Item} from "@/forge/items/Item";

class No_Item extends Item {
    constructor() {
        super();
    }

    IPRINT() {
        return "No Item";
    }

    ENERGY() {
        return 0;
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
    }
}

export {No_Item};
