// AULA 8 FAZ AS BUSCAS(PEGAR, FILTRAR OS PETS) 
//COMO NÃO TENHO BANCO DE DADOS ENTÃO CRIO UM ARRAY P USAR COMO SE FOSSE

type PetType = "dog" | "cat" | "fish";//criei um type para os animais p não repetir codigo

type Pet = {
    type: PetType, //Troquei o type: "dog" | "cat" | "fish" p type acima criado
    image: string,
    name: string,
    color: string,
    sex: "Masculino" | "Feminino" //como só tem essas 2 opções colocamos os tipos aqui
};

const data: Pet[] = [ //dissemos que data é um array de pet
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
];


export const Pet = { //criei o objeto
    getAll: (): Pet[] =>{  //função p retornar "todos" os pets na pagina principal
      return data;
    },
    getFromType: (type: PetType): Pet[] =>{ //FUNÇÃO QUE FILTRA OS PETS P "TIPO"
        return data.filter(item => item.type === type); //como não é um banco de dados, fazemos uma filtragem nos dados que temos
    },
    getFromName: (name: string): Pet[] =>{//FUNÇÃO QUE FILTRA P "NOME" DO PET    
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1); // Se typeOf achar mais que -1 eu achei o q o cara digitou no nome do pet, se ele retorna -1 quer dizer q não achou nada (string comeca no zero então não tem -1). Como o indexOf não é case sensitive temos que transformar o name em minusculo p não dar problema toLowerCase
    }
};





