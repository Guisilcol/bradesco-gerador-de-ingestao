//import * as df from 'danfojs'

class SqlServer{



    /**
     * 
     * @param {Object} obj 
     * @param {string} obj.tableName
     * @param {MSSQLConnection} databaseConnection
     * @description Função ainda não implementada. Retorna dados fictícios para testes.
     */
    async getTableMetadata({tableName, databaseConnection}){
        tableName
        databaseConnection
    }

    /**
     * 
     * @param {Object} obj 
     * @param {MSSQLConnection} databaseConnection
     * @description Função ainda não implementada. Retorna dados fictícios para testes.
     */
    static async getTablesName({databaseConnection}){
        databaseConnection
        const tableNames = [
            "tTeste01", "tTeste02", "tTeste03", "tTeste04", "tTeste05", "tTeste06", "tTeste07",
            "tTeste01", "tTeste02", "tTeste03", "tTeste04", "tTeste05", "tTeste06", "tTeste07",
            "tTeste01", "tTeste02", "tTeste03", "tTeste04", "tTeste05", "tTeste06", "tTeste07"]
        await new Promise((resolve) => {
            setTimeout(resolve, 3000)
        })
        return tableNames
    }
}


module.exports = {
    SqlServer
}