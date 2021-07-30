import {Item} from "@/forge/items/Item";

class Gold_Clover extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Gold Clover"
            case 'jp':
                return "ゴールドクローバー"
            default:
                return "Gold Clover"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.setHeavy(f.perc125(f.getHeavy()));
    }

    source() {
        return ["Store", "Orchard"];
    }

}

export {Gold_Clover};
