import mysql from 'mysql2/promise';

const connPoll = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database: 'demo'
});

const queryExecute = async(query: string, params: object)=>{
    const fromatQuery: string = mysql.format(query, params);
    console.info("actual formatedQuery", fromatQuery);
    const [queryResult] = await connPoll.query(fromatQuery);
    return queryResult;
}

export {
    queryExecute
}
