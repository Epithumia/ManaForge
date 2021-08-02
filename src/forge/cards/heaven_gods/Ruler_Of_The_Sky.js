import {Card} from "@/forge/cards/Card";
import {STAT} from "@/forge/enums";
import {PLUNGE1, PLUNGE3} from "@/forge/plunges/enums";

class Ruler_Of_The_Sky extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Ruler of the Sky"
            case 'jp':
                return "天上の支配者"
            default:
                return "Ruler of the Sky"
        }
    }

    price(price) {
        price += 5000;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.stat_limits(-3, 9, STAT.PWR);
        f.stat_limits(-3, 9, STAT.MAG);
        f.stat_min(9, STAT.PWR);
        f.stat_min(9, STAT.MAG);
        if (f.SPEAR()) {
            f.setPlunge1(PLUNGE1.Gungnir);
        } else if (f.STAFF()) {
            f.setPlunge3(PLUNGE3.Electrosceptre);
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

export {Ruler_Of_The_Sky};
