const app = require('express')()

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'test-img-cloudinary'
    })

})