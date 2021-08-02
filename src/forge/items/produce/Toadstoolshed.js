import {Item} from "@/forge/items/Item";
import {ESSENCE, STAT} from "@/forge/enums";

class Toadstoolshed extends Item {
    constructor() {
        super();
    }

    value = 69

    text(language) {
        switch(language) {
            case 'classic':
                return "Toadstoolshed"
            case 'jp':
                return "小屋ダケ"
            default:
                return "Toadstoolshed"
        }
    }

    energy() {
        return 64;
    }

    code(f) {
        f.increase_stat(STAT.ALL);
        f.taint(ESSENCE.SHADE);
    }

    source() {
        return ["Orchard"];
    }

}

export {Toadstoolshed};
