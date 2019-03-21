const dns = require('dns')
const url = require('url')
const apiModel = require('../models/api.model')

exports.dataCreate = (req, res) => {
    const originalUrl = req.body.original_url
    const parsedUrl = url.parse(originalUrl).hostname

    // Check if it's a valid URL
    dns.lookup(parsedUrl, err => {
        if(parsedUrl === err) {
            res.status(400).json({error: 'invalid URL'})
        } else {
            //Check if the URL is already indexed
            apiModel.findOne({original_url: originalUrl}, (err, data) => {
                if(err) {
                    res.status(400).json({error: err})
                } else {
                    if(data) {
                        // Data is already indexed
                        res.status(200).json({original_url: data.original_url, short_url: data.short_url})
                    } else {
                        // Data is new
                        const newUrl = new apiModel({
                            original_url: originalUrl
                        })

                        newUrl.save((err, data) => {
                            if(err) {
                                done({error: err})
                            } else {
                                // Data is created
                                res.status(200).json({original_url: data.original_url, short_url: data.short_url})
                            }
                        })
                    }
                }
            })
        }
    })
}

exports.dataRead = (req, res) => {
    const urlId = req.params.urlId

    // Find shortened url by index
    apiModel.findOne({short_url: urlId}, (err, data) => {
        if(err) {
            res.status(400).json({error: err})
        } else {
            // Shortened url exists
            if(data) {
                // Redirect to the original link
                res.redirect(data.original_url)
            } else {
                // Shortened url doesn't exist
                res.status(400).json({error: 'No short url found for given input'})
            }
        }
    })
}