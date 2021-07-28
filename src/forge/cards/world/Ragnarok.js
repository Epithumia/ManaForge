import {PLUNGE3, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {No_Card} from "@/forge/cards/No_Card";

class Ragnarok extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Ragnarok"
            case 'jp':
                return "神々の黄昏"
            default:
                return "Ragnarok"
        }
    }

    PRICE(price) {
        price += 10000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if (f.THSWORD()) {
            f.setPlunge3(PLUNGE3.Ragnarok);
        }
    }

    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.setHidden(new No_Card());
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.RAGNAROK;
        }
    }
}

export {Ragnarok};
