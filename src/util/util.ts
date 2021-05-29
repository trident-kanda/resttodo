export const createid = () => {
    let id = ""
    for(let i = 0; i < 9; i++){
        id += Math.floor(Math.random() * 10);
    }
    return Number(id)
}
