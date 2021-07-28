import {IMMUNITY} from "@/forge/enums";
import {Card} from "@/forge/cards/Card";
import {PLUNGE3} from "@/forge/plunges/enums";

class Volcano extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Volcano"
            case 'jp':
                return "火山"
            default:
                return "Volcano"
        }
    }

    PRICE(price) {
        price += 1300;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);
    }

    SECOND(f) {
        this.THIRD(f);
    }

    THIRD(f) {
        f.setForce(f.perc150(f.getForce()));
        f.setTech(f.perc50(f.getTech()));
        if (f.HAMMER()) {
            f.setPlunge3(PLUNGE3.Magma_Hammer);
        }
        if (f.HAUBERK()) {
            f.setImmunity(f.getImmunity() | IMMUNITY.Freeze.value);
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

export {Volcano};
