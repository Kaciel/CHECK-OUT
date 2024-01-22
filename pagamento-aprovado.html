    <html>
    <head>
      <script src="https://sdk.mercadopago.com/js/v2"></script>
    </head>
    <body>
      <div id="statusScreenBrick_container"></div>
      <script>
        const mp = new MercadoPago('YOUR_PUBLIC_KEY', { // Add your public key credential
          locale: 'pt-BR'
        });
        const bricksBuilder = mp.bricks();
        const renderStatusScreenBrick = async (bricksBuilder) => {
          const settings = {
            initialization: {
              paymentId: '1234567890', // Payment identifier, from which the status will be checked
            },
            customization: {
              visual: {
                hideStatusDetails: true,
                hideTransactionDate: true,
                style: {
                  theme: 'bootstrap', // 'default' | 'dark' | 'bootstrap' | 'flat'
                }
              },
              backUrls: {
                'error': '<http://<your domain>/error>',
                'return': '<http://<your domain>/homepage>'
              }
            },
            callbacks: {
              onReady: () => {
                // Callback called when Brick is ready
              },
              onError: (error) => {
                // Callback called for all Brick error cases
              },
            },
          };
          window.statusScreenBrickController = await bricksBuilder.create('statusScreen', 'statusScreenBrick_container', settings);
        };
        renderStatusScreenBrick(bricksBuilder);
      </script>
    </body>
    </html>
    







