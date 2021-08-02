import {Item} from "@/forge/items/Item";

class Acid extends Item {
    constructor() {
        super();
    }

    value = 94

    text(language) {
        switch(language) {
            case 'classic':
                return "Acid"
            case 'jp':
                return "強酸"
            default:
                return "Acid"
        }
    }

    energy() {
        return 48;
    }

    // eslint-disable-next-line no-unused-vars
    code(f) {
        return null
    }

    source() {
        return [];
    }

}

export {Acid};
