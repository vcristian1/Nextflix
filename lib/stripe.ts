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


