import {Card} from "@/forge/cards/Card";
import {No_Card} from "@/forge/cards/No_Card";

class Nymph_Of_Dawn extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch (language) {
            case 'classic':
                return "Nymph of Dawn"
            case 'jp':
                return "天かける娘"
            default:
                return "Dawn Nymph"
        }
    }

    PRICE(price) {
        price += 1000;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }


    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (f.getEnergy() <= 24) {
            if (f.third instanceof Nymph_Of_Dawn) {
                f.setThird(new No_Card());
            } else if (f.second instanceof Nymph_Of_Dawn) {
                f.setSecond(new No_Card());
            }
            f.setEnergy(f.getEnergy() + 192);
        }
    }

    // eslint-disable-next-line no-unused-vars
    HIDDEN(f) {
    }


    LEAVING(f) {
        f.setEnergy(f.getEnergy() + 192);
    }

    // eslint-disable-next-line no-unused-vars
    WORLD(f) {
    }

}

export {Nymph_Of_Dawn};
