import {Item} from "@/forge/items/Item";
import {IMMUNITY} from "@/forge/enums";

class Moss extends Item {
    constructor() {
        super();
    }

    value = 103

    text(language) {
        switch(language) {
            case 'classic':
                return "Moss"
            case 'jp':
                return "こけ"
            default:
                return "Moss"
        }
    }

    energy() {
        return 32;
    }

    code(f) {
        f.explain_item_code += "On a Helm, this will add immunity to the darkness status effect. "
        let type_check = "Since we are not tempering a Helm, this item has no effect."
        if (f.HELM()) {
            type_check = "Since we are tempering a Helm, this adds the darkness immunity to it."
            f.setImmunity(f.getImmunity() | IMMUNITY.Darkness.value);
        }
        f.explain_item_code += type_check + "<br>"
    }

    source() {
        return [];
    }

}

export {Moss};
