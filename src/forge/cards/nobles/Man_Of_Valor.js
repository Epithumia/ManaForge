import {PLUNGE1, STAT} from "@/forge/enums";
import {Card} from "@/forge/card";

class Man_Of_Valor extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Man of Valor"
            case 'jp':
                return "勇者"
            default:
                return "Man of Valor"
        }
    }

    PRICE(price) {
        price += 1000;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.stat_limits(-3, 5, STAT.ALL);
        f.increase_stat(STAT.PWR);
        f.increase_stat(STAT.HP);
        if (f.SPEAR()) {
            f.setPlunge1(PLUNGE1.Spear_of_Light);
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

export {Man_Of_Valor};
