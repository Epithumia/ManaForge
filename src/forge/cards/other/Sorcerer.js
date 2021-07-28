import {Card} from "@/forge/cards/Card";
import {Tower} from "@/forge/cards/stage";
import {STAT} from "@/forge/enums";

class Sorcerer extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Sorcerer"
            case 'jp':
                return "魔法使い"
            default:
                return "Sorcerer"
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
            f.setWiR(Math.trunc(f.getWiR() / 2));
            if (f.getWiR() < 1)
                f.setWiR(1);
            f.setDrR(Math.trunc(f.getDrR() / 2));
            if (f.getDrR() < 1)
                f.setDrR(1);
            f.setSaR(Math.trunc(f.getSaR() / 2));
            if (f.getSaR() < 1)
                f.setSaR(1);
            f.setGnR(Math.trunc(f.getGnR() / 2));
            if (f.getGnR() < 1)
                f.setGnR(1);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.increase_stat(STAT.MAG);
            f.setWiR(Math.trunc(f.getWiR() / 4) * 3);
            if (f.getWiR() < 1)
                f.setWiR(1);
            f.setDrR(Math.trunc(f.getDrR() / 4) * 3);
            if (f.getDrR() < 1)
                f.setDrR(1);
            f.setSaR(Math.trunc(f.getSaR() / 4) * 3);
            if (f.getSaR() < 1)
                f.setSaR(1);
            f.setGnR(Math.trunc(f.getGnR() / 4) * 3);
            if (f.getGnR() < 1)
                f.setGnR(1);
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

export {Sorcerer};
