import {Card} from "@/forge/cards/Card";
import {ESSENCE, STAT} from "@/forge/enums";

class Gnome extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch(language) {
            case 'classic':
                return "Gnome"
            case 'jp':
                return "ノーム"
            default:
                return "Gnome"
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
        f.increase_stat(STAT.DEF);
        f.taint(ESSENCE.GNOME);
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

export {Gnome};
