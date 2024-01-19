
    const mp = new MercadoPago('YOUR_PUBLIC_KEY');
    const bricksBuilder = mp.bricks();

    payment.create({ body: {
      amount: req.body.amount,
      ...
    } }).then(function(response) {
      const { status, status_detail, id } = response.body;
      res.status(response.status).json({ status, status_detail, id });
    }).catch(function(error) {
      console.error(error);
    });
    
    var mercadopago = require('mercadopago');
    mercadopago.configurations.setAccessToken(config.access_token);

    var payment_data = {
      transaction_amount: 100,
      description: 'Título do produto',
      payment_method_id: 'pix',
      payer: {
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        identification: {
            type: 'CPF',
            number: '19119119100'
        },
        address:  {
            zip_code: '06233200',
            street_name: 'Av. das Nações Unidas',
            street_number: '3003',
            neighborhood: 'Bonfim',
            city: 'Osasco',
            federal_unit: 'SP'
        }
      }
    };

    mercadopago.payment.create(payment_data).then(function (data) {

    }).catch(function (error) {

    });
    
      var mercadopago = require('mercadopago');
      mercadopago.configurations.setAccessToken(config.access_token);

      var payment_data = {
        transaction_amount: 100,
        description: 'Título do produto',
        payment_method_id: 'bolbradesco',
        payer: {
          email: 'test@test.com',
          first_name: 'Test',
          last_name: 'User',
          identification: {
              type: 'CPF',
              number: '19119119100'
          },
          address:  {
              zip_code: '06233200',
              street_name: 'Av. das Nações Unidas',
              street_number: '3003',
              neighborhood: 'Bonfim',
              city: 'Osasco',
              federal_unit: 'SP'
          }
        }
      };

      mercadopago.payment.create(payment_data).then(function (data) {

      }).catch(function (error) {

      });

    