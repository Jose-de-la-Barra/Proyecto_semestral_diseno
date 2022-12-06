import React from "react";
import ReactDOM from "react-dom";
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ( {order} ) => {
    const paypalConf = {
        currency: 'CLP',
        env: 'sandbox',
        client: {
            sandbox: 'AeQCCohWnwiyDLplA3sdXECVWVTXWdnxFCw2nm1W80Bf5pQh714aKnGPsCpYYYHxjVxqYVp-wTLusCIg',
            production: '-- id--',
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'gold'
        }
    };

    const PayPalButton = paypal.Button.driver('react', {React, ReactDOM});

    const payment = (data, actions) => {
        const payment = {
            transactions:[
                {
                    amount: {
                        total: order.total,
                        currency: paypalConf.currency,

                    },
                    description: 'Donación a TTVV',
                    custom: order.customer || '',
                    item_list: {
                        items: order.items
                    }
                }
            ],
            note_to_payer: 'Contáctanos para cualquier aclaración',
        };
        return AuthenticatorAssertionResponse.payment.create({ payment });
    };

    const onAuthorize = (data, actiones) => {
        return actiones.payment.execute()
        .then(response => {
            console.log(response);
            alert('El pago fue procesado correctamente, ID: ${response.id}')
        })
        .catch(error => {
            console.log(error);
            alert('Ocurrió un error al procesar el pago con PayPal')
        })
    };

    const onError = (error) => {
        console.log(error);
        alert('El pagp no fue realizado, vuelva a intentarlo');
    };

    const onCancel = (data, actions) => {
        alert('Pago no realizado, el usuario canceló el proceso');
    };

    return(
        <PayPalButton
            env={paypalConf.env}
            client={paypalConf.client}
            payment={(data, actiones) => payment(data, actiones)}
            onAuthorize={(data, actiones) => onAuthorize(data, actiones)}
            onCancel={(data, actiones) => onCancel(data, actiones)}
            onError={(error) => onError(error)}
            style={paypalConf.style}
            commit
            locale="es_MX"
        />
    );
};

export default PaypalCheckoutButton;
