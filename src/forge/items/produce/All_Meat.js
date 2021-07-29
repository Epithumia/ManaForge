import {Item} from "@/forge/items/Item";

class All_Meat extends Item {


    IPRINT() {
        return "Any Meat";
    }


    ENERGY() {
        return 16;
    }

    // eslint-disable-next-line no-unused-vars
    CODE(f) {
    }

}

export {All_Meat};
