const app = require('express')()

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'test-img-cloudinary'
    })

})

app.listen(process.env.PORT, () => {
    console.log('listen on PORT', process.env.PORT)
})