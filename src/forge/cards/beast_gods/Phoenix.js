import {SPECIAL, STAT} from "@/forge/enums";
import {Volcano} from "@/forge/cards/stage/Volcano";
import {Card} from "@/forge/cards/Card";

class Phoenix extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Phoenix"
            case 'jp':
                return "不死鳥"
            default:
                return "Phoenix"
        }
    }

    price(price) {
        price += 2500;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.PWR);
        f.stat_limits(-3, 5, STAT.SKL);
        f.stat_min(3, STAT.PWR);
        f.stat_min(3, STAT.SKL);
        if (f.RING() || f.PENDANT()) {
            if ((f.first instanceof Volcano || f.second instanceof Volcano
                || f.third instanceof Volcano) && !(f.hidden instanceof Volcano)) {
                f.setSpecial(SPECIAL.Auto_Revive);
            }
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

export {Phoenix};
