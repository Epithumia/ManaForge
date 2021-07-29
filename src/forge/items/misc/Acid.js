import {Item} from "@/forge/items/Item";

class Acid extends Item {
    constructor() {
        super();
    }

    IPRINT() {
        return "Acid";
    }

    ENERGY() {
        return 48;
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
        return null
    }

}

export {Acid};
