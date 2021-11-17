import {Item} from "@/forge/items/Item";
import {STAT} from "@/forge/enums";

class Greenball_Bun extends Item {
    constructor() {
        super();
    }

    value = 119

    text(language) {
        switch(language) {
            case 'classic':
                return "Greenball Bun"
            case 'jp':
                return "草ムシまんじゅう"
            default:
                return "Greenball Bun"
        }
    }

    energy() {
        return 8;
    }

    code(f) {
        f.explain_item_code += "This item increases the HP/Con stat.<br>"
        f.increase_stat(STAT.HP);
    }

    source() {
        return [];
    }

}

export {Greenball_Bun};
