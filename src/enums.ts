
// it is group of named constants
enum StatusCodes {  
    NOTFOUND =404,
    OK=200,
    SUCESS=200,
    CREATED=202,
    INTERNAL_SEVER_ERROR=500
}

const httpRequest:StatusCodes = StatusCodes.NOTFOUND

console.log(`the server responds with an status code:${httpRequest}`);