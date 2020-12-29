export declare enum ContractState {
    Draft = 1,
    Offer = 100,
    OfferExpired = 110,
    OfferRevoked = 120,
    OfferRejected = 130,
    Active = 200,
    ExternalWarranty = 210,
    Suspended = 400,
    Terminated = 500,
    Expired = 600,
    Completed = 800,
    Settled = 900
}
export declare enum WarrantyState {
    Active = 200,
    Rejected = 300,
    Terminated = 500
}
export declare enum DbType {
    int = 1,
    text = 2,
    date = 3,
    monetary = 4,
    mileage = 5
}
export declare enum AggregateType {
    sum = 1,
    concat = 2,
    count = 3
}
export declare enum FormattingLocale {
    'sv-SE' = 0,
    'uk-UA' = 1,
    'da-DK' = 2,
    'en-GB' = 3,
    'fi-FI' = 4,
    'en-US' = 5
}
export declare enum ContractActionType {
    create = 100,
    sendDraft = 120,
    buyNow = 130,
    createOffer = 140,
    sendOfferReminderMail = 150,
    sendContractTerminationMail = 151,
    sendOfferReminderMail2 = 152,
    sendContractActivationMail = 153,
    sendOfferReminderMail3 = 154,
    sendContractSuspendedMail = 155,
    sendContractOfferMail = 156,
    sendContractReactivationMail = 157,
    sendContractAdjustmentMail = 158,
    sendContractSettlementMail = 159,
    rejectOffer = 160,
    acceptOffer = 180,
    approveOffer = 200,
    activate = 300,
    expire = 400,
    expireContract = 410,
    sendContractExpiredMail = 411,
    changeVehicleData = 420,
    changeCustomerData = 440,
    changePaymentData = 460,
    modify = 500,
    suspend = 600,
    reactivate = 700,
    pauseSubscription = 720,
    terminate = 800,
    registerCashPayment = 810,
    registerCashPayout = 820,
    registerProviderPayment = 830,
    settle = 900,
    archive = 1000
}
export declare enum OfferRequestState {
    Pending = 100,
    Approved = 200,
    Rejected = 300,
    Expired = 400
}
export declare enum ResponseWarnings {
    GenericWarning = 499
}
export declare type FileUploadToStorageType = 'General-Storage' | 'Logo-Banner-Storage' | 'Logo-Square-Storage';
export * from './address';
export * from './admin';
export * from './app';
export * from './brand';
export * from './chart';
export * from './contactPerson';
export * from './contract/contract';
export * from './contract/contractActivation';
export * from './contract/contractFilter';
export * from './contract/contractList';
export * from './contract/contractOffer';
export * from './contract/contractQuery';
export * from './contractAction';
export * from './contractOption';
export * from './contractProvider';
export * from './contractTemplate';
export * from './country';
export * from './customer';
export * from './durationOptions';
export * from './errorResponse';
export * from './fuelType';
export * from './includedContractOption';
export * from './invoice';
export * from './locale';
export * from './localizationData';
export * from './model';
export * from './payment';
export * from './priceCalculation';
export * from './priceSpecification';
export * from './providerBranding';
export * from './queryParams';
export * from './reports/reports';
export * from './resetPassword';
export * from './responseErrors/calculatorResponseErrors';
export * from './responseErrors/contractResponseErrors';
export * from './responseErrors/genericResponseTypes';
export * from './responseErrors/index';
export * from './stripe/stripe';
export * from './stripe/stripeAddress';
export * from './stripe/stripeDateOfBirth';
export * from './stripe/stripeDeclineChargeOn';
export * from './stripe/stripeExternalAccount';
export * from './stripe/stripeLegalEntity';
export * from './stripe/stripeOwner';
export * from './stripe/stripeVerification';
export * from './termsOfService';
export * from './translation';
export * from './user';
export * from './userConfiguration/tableUserConfiguration';
export * from './userConfiguration/userConfiguration';
export * from './vatLookup';
export * from './vehicle';
export * from './vehiclePartial';
export * from './vehicleContracts';
export * from './webcalc';
export * from './workshopOperation';
export * from './segments';
