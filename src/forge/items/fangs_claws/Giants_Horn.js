import {Leviathan} from "@/forge/cards/evil_gods";
import {Item} from "@/forge/items/Item";

class Giants_Horn extends Item {


    IPRINT() {
        return "Giant's Horn";
    }


    ENERGY() {
        return 32;
    }


    CODE(f) {
        f.setSharp(f.perc50(f.getSharp()));
        f.setHeavy(f.perc150(f.getHeavy()));
        if (0 === f.getSa() && f.getGn() >= 5 && f.getEnergy() >= 8) {
            f.prehidden = new Leviathan();
        }
    }

}

export {Giants_Horn};
