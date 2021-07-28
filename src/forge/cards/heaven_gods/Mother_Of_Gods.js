import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE1, PLUNGE2, PLUNGE3} from "@/forge/plunges/enums";

class Mother_Of_Gods extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Mother of Gods"
            case 'jp':
                return "神々の母"
            default:
                return "Mother of Gods"
        }
    }

    PRICE(price) {
        price += 4000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.MAG);
        f.stat_limits(-3, 5, STAT.SPR);
        f.stat_limits(-3, 5, STAT.CHM);
        f.stat_min(5, STAT.MAG);
        f.stat_min(5, STAT.SPR);
        f.stat_min(5, STAT.CHM);
        if (f.FLAIL()) {
            f.setPlunge1(PLUNGE1.Green_Princess);
            f.setPlunge2(PLUNGE2.Game_of_Death);
            f.setPlunge3(PLUNGE3.Red_Dream);
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

export {Mother_Of_Gods};
