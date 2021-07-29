import {Man_Of_Valor} from "@/forge/cards/nobles";
import {Item} from "@/forge/items/Item";

class Dragons_Breath extends Item {


    IPRINT() {
        return "Dragon's Breath";
    }


    ENERGY() {
        return 24;
    }


    CODE(f) {
        f.setForce(f.perc125(f.getForce()));
        f.setTech(f.perc125(f.getTech()));
        if (f.getWi() > 0 && f.getSa() > 0 && f.ESSTOTAL() >= 3
            && f.getEnergy() >= 8) {
            f.prehidden = new Man_Of_Valor();
        }
    }

}

export {Dragons_Breath};
