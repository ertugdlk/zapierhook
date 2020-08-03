const _ = require('lodash')

class ZapierController{
    static async hook(req,res,next){
        try{
            console.log('#POST', _.pick(req, 'body', 'query', 'params'))
            res.status(201).json([])
        }
        catch (e) {
            next(e);
        }
    }
    static async deleteHook (req, res, next)
    {
        try
        {
            console.log('#DELETE', _.pick(req, 'body', 'query', 'params'))
            res.json([])
            console.log()
        }
        catch (error)
        {
            next(error)
        }
    }
}

module.exports = ZapierController;