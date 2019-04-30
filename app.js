const app = require('express')()
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2


app.use( fileUpload({ useTempFiles: true }) )

cloudinary.config({
    cloud_name: process.env.CLOUD_MAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'test-img-cloudinary'
    })

})

app.post('/upload-img', (req, res) => {

    cloudinary.uploader.upload('js.png', {tags:'basic_sample'}, (err, result) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                image,
                err
            })
        }

        res.json({
            ok: true,
            result
        })
    })

})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('listen on PORT', port)
})