import {Card} from "@/forge/cards/Card";
import {PLUNGE2, PLUNGE3, STAT} from "@/forge/enums";

class Moon_Goddess extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Moon Goddess"
            case 'jp':
                return "月の女神"
            default:
                return "Moon Goddess"
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
        f.stat_limits(-5, 10, STAT.SPR);
        f.stat_min(10, STAT.SPR);
        if (f.SWORD()) {
            f.setPlunge3(PLUNGE3.Moonlight);
        } else if (f.BOW()) {
            f.setPlunge2(PLUNGE2.Lunar_Shot);
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

export {Moon_Goddess};
