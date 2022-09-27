import {Request, Response} from "express";
import {Pet} from "../models/pet";
import {createMenuObject} from "../helpers/createMenuObject";

export const search = (req: Request, res: Response)=>{
    let query: string = req.query.q as string; //usamos o Request p buscar o que o usuario digitou
    
    if(!query){ //se não tiver nada (query) digitado na busca se der enter redireciona p pagina principal 
        res.redirect("/"); //redireciona para página principal
        return; //encerra função aqui
    }
    let list = Pet.getFromName(query); //geramos a lista do que foi digitado e mandamos p list no render abaixo

    res.render("pages/page",{
        menu: createMenuObject(""), //sem nada vai funcionar pq tem a opção de ser sem nada
        list, //recebe a lista da busca feita
        query //reenvia o resultado p o input de busca p ficar aparecendo o que foi digitado mesmo após busca ser encontrada
    });
}
