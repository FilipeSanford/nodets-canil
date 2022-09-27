import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path"; //para importar as pastas publicas
import mainRoutes from "./routes/index"; //Obs: em JS colocamos "./routes/index.js";

dotenv.config();

const server = express(); //configuração servidor

server.set("view engine", "mustache"); //configuração mustache

server.set("views", path.join(__dirname, "views"));// configurando as pastas do projeto. Os views vão ficar em path.join, __dirname serve p pegar a pasta do meu arquivo

server.engine("mustache", mustache());// configurando a template engine e rodo a função mustache

server.use(express.static(path.join(__dirname, "../public")));  //static = configurar uma pasta de arquivos estaticos. ../public = Como estou na src, volto uma pastinha p acessar public

//ROTAS

server.use(mainRoutes);

server.use((req, res)=>{ //SE NENHUMA ROTA FUNCIONAR IMPRIMA ISSO    
    res.render("pages/404");
}); 



server.listen(process.env.PORT); //COLOCANDO O SERVIDOR P RODAR




