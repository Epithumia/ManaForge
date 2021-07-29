import {Item} from "@/forge/items/Item";
import {IMMUNITY} from "@/forge/enums";
import {Pixie_Of_Lust} from "@/forge/cards/pixies";

class Stinky_Breath extends Item {


    IPRINT() {
        return "Stinky Breath";
    }


    ENERGY() {
        return 16;
    }


    CODE(f) {
        f.setImmunity(IMMUNITY.Poison.value
            | IMMUNITY.Confusion.value);
        if (f.getEnergy() >= 4) {
            f.prehidden = new Pixie_Of_Lust();
        }
    }

}

export {Stinky_Breath};
