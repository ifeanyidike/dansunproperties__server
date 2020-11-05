'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    // async create(ctx){
    //     let entity;
        
    //     entity = await strapi.services.order.create(ctx.request.body)
    //     entry = sanitizeEntity(entity, { model: strapi.models.order });
    //     await strapi.plugins['email'].services.email.send({
    //         to: 'lorddickson751@gmail.com',
    //         from: 'ifeanyidike87@gmail.com',
    //         subject: 'Payment confirmation',
    //         text: `
    //         Payment of #${entry.totalPrice} was made
    //         `
    //     })
    //     return entry;
    // }
};
