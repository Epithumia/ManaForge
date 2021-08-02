import {STAT, WORLD_CARD} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {No_Card} from "@/forge/cards/No_Card";

class Yggdrasil extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Yggdrasil"
            case 'jp':
                return "世界樹"
            default:
                return "Yggdrasil"
        }
    }


    price(price) {
        price += 3000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.STAFF()) {
            f.stat_limits(-3, 9, STAT.ALL);
        } else {
            f.stat_limits(-5, 10, STAT.ALL);
        }
        f.increase_stat(STAT.ALL);
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
            f.awc = WORLD_CARD.YGGDRASIL;
        }
    }

}

export {Yggdrasil};
