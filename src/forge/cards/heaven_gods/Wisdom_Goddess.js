import {Card} from "@/forge/cards/Card";
import {SPECIAL, STAT} from "@/forge/enums";

class Wisdom_Goddess extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Wisdom Goddess"
            case 'jp':
                return "知恵の女神"
            default:
                return "Wisdom Goddess"
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
        f.stat_limits(-5, 10, STAT.MAG);
        f.stat_min(10, STAT.MAG);
        if (f.SHIELD()) {
            f.setSpecial(SPECIAL.Stare_Immunity);
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

export {Wisdom_Goddess};
