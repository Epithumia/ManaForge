import {Card} from "@/forge/cards/Card";
import {IMMUNITY, STAT} from "@/forge/enums";
import {PLUNGE1} from "@/forge/plunges/enums";

class Wind_God extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Wind God"
            case 'jp':
                return "風神"
            default:
                return "Wind God"
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
        f.stat_limits(-5, 10, STAT.SKL);
        f.stat_min(10, STAT.SKL);
        if (f.STAFF()) {
            f.setPlunge1(PLUNGE1.Caduceus);
        }
        if (f.SHOES()) {
            f.setStrike(f.getStrike() + 10);
            f.setSlash(f.getSlash() + 10);
            f.setThrust(f.getThrust() + 10);
            f.setMagic(f.getMagic() + 10);
            f.setImmunity(f.getImmunity() | IMMUNITY.Paralysis.value);
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

export {Wind_God};
