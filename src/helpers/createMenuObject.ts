type MenuOptions = "" | "all" | "dog" | "cat" | "fish"; //estamos mostrando quais as opcões q terao no MenuOptions. o "" (sem nada) é p quando a busca tiver ativa

export const createMenuObject = (activeMenu: MenuOptions)=>{ //vamos receber uma string activeMenu que mostra que menu esteja ativo
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if(activeMenu !==""){ //se for diferente de vazio
        returnObject[activeMenu] = true;
    }
    return returnObject;
}
