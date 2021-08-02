import {Card} from "@/forge/cards/Card";
import {SPECIAL, STAT} from "@/forge/enums";

class Goddess_Of_Love extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Goddess of Love"
            case 'jp':
                return "愛の女神"
            default:
                return "Love Goddess"
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
        f.stat_limits(-3, 9, STAT.SPR);
        f.stat_limits(-3, 9, STAT.CHM);
        f.stat_min(7, STAT.SPR);
        f.stat_min(7, STAT.CHM);
        if (f.PENDANT()) {
            f.setSpecial(SPECIAL.Extra_Lucre);
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

export {Goddess_Of_Love};
