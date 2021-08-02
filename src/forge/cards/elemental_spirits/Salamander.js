import {Card} from "@/forge/cards/Card";
import {ESSENCE, STAT} from "@/forge/enums";

class Salamander extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Salamander"
            case 'jp':
                return "サラマンダー"
            default:
                return "Salamander"
        }
    }

    price(price) {
        price += 250;
        return price;
    }


    FIRST(f) {
        this.SECOND(f);
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        f.increase_stat(STAT.PWR);
        f.taint(ESSENCE.SALA);
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

export {Salamander};
