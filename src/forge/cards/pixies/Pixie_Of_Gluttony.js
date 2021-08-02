import {Card} from "@/forge/cards/Card";
import {STAT, WORLD_CARD} from "@/forge/enums";
import {Leviathan} from "@/forge/cards/evil_gods";

class Pixie_Of_Gluttony extends Card {
    constructor() {
        super();
    }

    text(language = '') {
        switch (language) {
            case 'classic':
                return "Pixie (Purple Hat) [Gluttony]"
            case 'jp':
                return "小悪魔(大食)"
            default:
                return "Pixie (Purple Hat) [Gluttony]"
        }
    }

    price(price) {
        price += 150;
        return price;
    }

    FIRST(f) {
        this.SECOND(f);

    }

    SECOND(f) {
        this.THIRD(f);
    }


    THIRD(f) {
        if (WORLD_CARD.RAGNAROK === f.awc) {
            if (f.getEnergy() >= 8) {
                if (f.third instanceof Pixie_Of_Gluttony) {
                    f.setThird(new Leviathan());
                } else if (f.second instanceof Pixie_Of_Gluttony) {
                    f.setSecond(new Leviathan());
                } else if (f.first instanceof Pixie_Of_Gluttony) {
                    f.setFirst(new Leviathan());
                }
            }
            f.find_and_run_s13(Leviathan);
        } else {
            f.stat_limits(-1, 3, STAT.ALL);
            f.decrease_stat(STAT.ALL);
            f.increase_stat(STAT.HP);
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

export {Pixie_Of_Gluttony};
