import {Request, Response} from "express";
import {Pet} from "../models/pet" //importei o models pet
import {createMenuObject} from "../helpers/createMenuObject";


export const home = (req: Request, res: Response)=>{
    let list = Pet.getAll();//acrescentei a lista do model Pet. List é um array de Pet

    res.render("pages/page", { //criei um objeto
        menu: createMenuObject("all"),
        banner: { 
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list //acrescentei p list p exibir os itens
    });
}
export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType("dog")
    res.render("pages/page", {
        menu: createMenuObject("dog"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    });
}
export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType("cat")

    res.render("pages/page", {
        menu: createMenuObject("cat"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    });
}
export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType("fish")

    res.render("pages/page", {
        menu: createMenuObject("fish"),
        banner: { 
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    });
}
