import {Item} from "@/forge/items/Item";

class Scissors extends Item {
    constructor() {
        super();
    }

    value = 74

    text(language) {
        switch(language) {
            case 'classic':
                return "Scissors"
            case 'jp':
                return "ハサミ"
            default:
                return "Pincer"
        }
    }

    energy() {
        return 16;
    }

    code(f) {
        f.explain_item_code += "This item increases the Force stat by 50% and decreases the Tech stat by 50%.<br>"
        f.setForce(f.perc150(f.getForce()));
        f.setTech(f.perc50(f.getTech()));
    }

    source() {
        return [];
    }

}

export {Scissors};
