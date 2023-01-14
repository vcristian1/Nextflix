import {
    createCheckoutSession,
    getStripePayments,
  } from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'

const payments = getStripePayments(app, {
    //this is the name of the collection, if the name of collection is plans then change to plans
    productsCollection: 'products',
    customersCollection: 'customers'
})

const loadCheckout = async (priceId: string) => {
    await createCheckoutSession(payments, {
        price: priceId,
        //If you want a custom url just add the url in a string
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        //The snapshot url is the link to the checkout sesssion, a stripe payment portal, which is given to us by Stripe. 
    }).then((snapshot) => window.location.assign(snapshot.url)).catch((error) => console.log(error.message))
}
