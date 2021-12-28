export interface Heroe{
    id?:        string; //el id va a ser opticional
    superhero: string; 
    publisher:  Publisher;
    alter_ego:  string ;
    first_appearance: string;
    characters: string;
    alt_img?: string;
}
export enum Publisher{
    DCComics=" DC Comics",
    MarvelComics="Marvel Comics",
}