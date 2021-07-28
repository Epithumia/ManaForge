import {Card} from "@/forge/cards/Card";
import {Tower} from "@/forge/cards/stage";
import {STAT} from "@/forge/enums";

class Witch extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Witch"
            case 'jp':
                return "魔女"
            default:
                return "Witch"
        }
    }

    PRICE(price) {
        price += 300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        if ((f.first instanceof Tower || f.second instanceof Tower
            || f.third instanceof Tower) && !(f.hidden instanceof Tower)) {
            f.stat_limits(-3, 5, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.increase_stat(STAT.SPR);
            f.increase_stat(STAT.CHM);
            f.setShR(Math.trunc(f.getShR() / 2));
            if (f.getShR() < 1)
                f.setShR(1);
            f.setAuR(f.getAuR() / 2);
            if (f.getAuR() < 1)
                f.setAuR(1);
            f.setJiR(f.getJiR() / 2);
            if (f.getJiR() < 1)
                f.setJiR(1);
            f.setUnR(f.getUnR() / 2);
            if (f.getUnR() < 1)
                f.setUnR(1);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.setShR(Math.trunc(f.getShR() / 4) * 3);
            if (f.getShR() < 1)
                f.setShR(1);
            f.setAuR(Math.trunc(f.getAuR() / 4) * 3);
            if (f.getAuR() < 1)
                f.setAuR(1);
            f.setJiR(Math.trunc(f.getJiR() / 4) * 3);
            if (f.getJiR() < 1)
                f.setJiR(1);
            f.setUnR(Math.trunc(f.getUnR() / 4) * 3);
            if (f.getUnR() < 1)
                f.setUnR(1);
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

export {Witch};
