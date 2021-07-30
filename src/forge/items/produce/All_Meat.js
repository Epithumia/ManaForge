import {Item} from "@/forge/items/Item";

class All_Meat extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Any Meat"
            case 'jp':
                return "肉"
            default:
                return "Any Meat"
        }
    }

    energy() {
        return 16;
    }

    // eslint-disable-next-line no-unused-vars
    code(f) {
    }

    source() {
        return ["Drop"];
    }

}

export {All_Meat};
