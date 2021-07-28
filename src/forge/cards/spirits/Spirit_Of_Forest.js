import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE2} from "@/forge/plunges/enums";

class Spirit_Of_Forest extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Spirit (Forest)"
            case 'jp':
                return "妖精(森)"
            default:
                return "Faerie [Forest]"
        }
    }

    PRICE(price) {
        price += 800;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.SPR);
        f.increase_stat(STAT.CHM);
        if (f.BOW()) {
            f.setPlunge2(PLUNGE2.Elven_Archer);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}

export {Spirit_Of_Forest};
