import dns from 'dns'
import url from 'url'
import apiModel from '../models/api.model'

exports.dataCreate = (req, res) => {
    const originalUrl = req.body.original_url
    const parsedUrl = url.parse(originalUrl).hostname
    const done = (data) => res.json(data)

    // Check if it's a valid URL
    dns.lookup(parsedUrl, err => {
        if(parsedUrl === err) {
            done({error: 'invalid URL'})
        } else {
            //Check if the URL is already indexed
            apiModel.findOne({original_url: originalUrl}, (err, data) => {
                if(err) {
                    done({error: err})
                } else {
                    if(data) {
                        // Data is already indexed
                        done({original_url: data.original_url, short_url: data.short_url})
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
                                done({original_url: data.original_url, short_url: data.short_url})
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
    const done = (data) => res.json(data)

    // Find shortened url by index
    apiModel.findOne({short_url: urlId}, (err, data) => {
        if(err) {
            done({error: err})
        } else {
            // Shortened url exists
            if(data) {
                // Redirect to the original link
                res.redirect(data.original_url)
            } else {
                // Shortened url doesn't exist
                done({error: 'No short url found for given input'})
            }
        }
    })
}