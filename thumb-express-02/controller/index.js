const rp = require('request-promise');

module.exports = {
    getCount: async (app, ctx)=>{
        let result = await rp('http://localhost/getCount.php');
        return result;
    },
    updateCount: async (app, ctx)=>{
        let result = await rp('http://localhost/updateCount.php');
        return result;
    }
}