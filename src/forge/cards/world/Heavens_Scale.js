import {SPECIAL, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {No_Card} from "@/forge/cards/No_Card";

class Heavens_Scale extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Heaven's Scale"
            case 'jp':
                return "天秤"
            default:
                return "Heaven's Scales"
        }
    }

    PRICE(price) {
        price += 1800;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.setSpecial(SPECIAL.No_Revive);
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
            f.awc = WORLD_CARD.HEAVENS_SCALE;
        }
    }
}

export {Heavens_Scale};
