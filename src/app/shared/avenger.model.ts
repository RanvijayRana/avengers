export class Avenger {
    avengerName: string;
    characterName: string;
    realName: string;
    imageUrl: string;
    movie: Array<string>;
    power: string[];

    constructor(avengername: string, charcterName: string, realName: string, imageUrl: string, movie: string[], power: string[]) {
        this.avengerName = avengername;
        this.characterName = charcterName;
        this.realName = realName;
        this.imageUrl = imageUrl;
        this.movie = movie;
        this.power = power;
    }
}