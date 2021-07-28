import {WORLD_CARD} from "@/forge/enums";
import {Card, No_Card} from "@/forge/card";

class Mirrored_World extends Card {
    constructor() {
        super();
    }

    CPRINT(language = '') {
        switch(language) {
            case 'classic':
                return "Mirrored World"
            case 'jp':
                return "鏡面世界"
            default:
                return "Mirrored World"
        }
    }

    PRICE(price) {
        price += 2200;
        return price;
    }

    // eslint-disable-next-line no-unused-vars
    FIRST(f) {
    }

    // eslint-disable-next-line no-unused-vars
    SECOND(f) {
    }

    // eslint-disable-next-line no-unused-vars
    THIRD(f) {
    }

    HIDDEN(f) {
        if (f.awc !== WORLD_CARD.NONE && f.awc !== WORLD_CARD.BED_OF_THORN) {
            f.setHidden(new No_Card());
        }
    }

    // eslint-disable-next-line no-unused-vars
    LEAVING(f) {
    }

    WORLD(f) {
        if (f.awc === WORLD_CARD.NONE) {
            f.awc = WORLD_CARD.MIRRORED_WORLD;
        }
    }
}

export {Mirrored_World};
