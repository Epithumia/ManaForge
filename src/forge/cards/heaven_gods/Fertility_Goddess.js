import {Card} from "@/forge/cards/Card";
import {IMMUNITY, SPECIAL, STAT} from "@/forge/enums";

class Fertility_Goddess extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Fertility Goddess"
            case 'jp':
                return "豊饒の女神"
            default:
                return "Harvest Goddess"
        }
    }

    PRICE(price) {
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
        f.stat_limits(-5, 10, STAT.HP);
        f.stat_min(10, STAT.HP);
        f.setImmunity(f.getImmunity() | IMMUNITY.Petrify.value);
        if (f.RING()) {
            f.setSpecial(SPECIAL.Share_Exp);
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

export {Fertility_Goddess};
