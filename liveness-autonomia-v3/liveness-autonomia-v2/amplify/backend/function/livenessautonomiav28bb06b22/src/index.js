

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
        "Access-Control-Allow-Origin": "*", // Permite qualquer origem. Altere para o domínio específico em produção.
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Adicione mais cabeçalhos conforme necessário.
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS" // Permite métodos HTTP específicos.
    },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
