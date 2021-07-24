import { SiteClient } from 'datocms-client';

//metatags.io é outro tipo de backend for frontend
export default async function requestReceiver(request, response)
{
    if (request.method === 'POST')
    {
        const DATO_TOKEN = '';
        const client = new SiteClient(DATO_TOKEN);

        //usar DTO para validar o request.body
        const createdRecord = await client.items.create({
            itemType : '', //id da coluna no DATO
            ...request.body
        });

        console.log('Registro criado: ', createdRecord);

        response.json({createdRecord : createdRecord});
        return;
    }

    response.status(403).json(
        {
        message : 'Não há nada aqui, apenas no POST ;)'
    });

}