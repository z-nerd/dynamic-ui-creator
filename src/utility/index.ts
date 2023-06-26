export class CustomId {
    #id: Generator<number>
    #prefix: string
    
    constructor(prefix: string) {
        this.#id = this.#idCreator() 
        this.#prefix = prefix
    }

    #idCreator = function *() {
        let i = 1
        while (true) yield i++
    }

    getId = () => {
        return this.#prefix + this.#id.next().value
    }
}