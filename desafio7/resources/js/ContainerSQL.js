import knex from 'knex'

class ContenedorSQL {

    constructor(config, table) {
        this.knex = knex(config)
        this.table = table
    }

    async listar(id) {
        
    }

    async listarAll() {
        
    }

    async guardar(elem) {
        await this.knex(table).insert(elem)
            .then(() => console.log(`${elem} Insertado.`))
            .catch(error => {console.log(error); throw err})
            .finally(() => {
                await this.knex.destroy();
            })
    }

    async actualizar(elem, id) {
        
    }

    async borrar(id) {
        
    }

    async borrarAll() {
        
    }

    async desconectar() {
    
    }
}

export default ContenedorSQL