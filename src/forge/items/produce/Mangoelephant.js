import {STAT} from "@/forge/enums";
import {Item} from "@/forge/items/Item";

class Mangoelephant extends Item {
    constructor() {
        super();
    }

    text(language) {
        switch(language) {
            case 'classic':
                return "Mangoelephant"
            case 'jp':
                return "エレファントマンゴー"
            default:
                return "Mangoelephant"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.stat_limits(-5, 10, STAT.HP);
        f.increase_stat(STAT.HP);
    }

    source() {
        return ["Orchard"];
    }

}

export {Mangoelephant};
