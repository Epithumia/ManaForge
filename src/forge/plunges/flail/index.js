import {Plunge} from "@/forge/plunges";

class Green_Princess extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Green Princess"
            case 'jp':
                return "緑姫"
            default:
                return "Green Princess"
        }
    }

    value() {
        return 5
    }
}

class Game_Of_Death extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Game of Death"
            case 'jp':
                return "白舞"
            default:
                return "Game of Death"
        }
    }

    value() {
        return 6
    }
}

class Red_Dream extends Plunge {
    constructor() {
        super();
    }

    text(language) {
        switch (language) {
            case 'classic':
                return "Red Dream"
            case 'jp':
                return "紅夢"
            default:
                return "Red Dream"
        }
    }

    value() {
        return 10
    }
}

export {Green_Princess, Game_Of_Death, Red_Dream}
