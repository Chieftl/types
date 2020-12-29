"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContractState;
(function (ContractState) {
    ContractState[ContractState["Draft"] = 1] = "Draft";
    ContractState[ContractState["Offer"] = 100] = "Offer";
    ContractState[ContractState["OfferExpired"] = 110] = "OfferExpired";
    ContractState[ContractState["OfferRevoked"] = 120] = "OfferRevoked";
    ContractState[ContractState["OfferRejected"] = 130] = "OfferRejected";
    ContractState[ContractState["Active"] = 200] = "Active";
    ContractState[ContractState["ExternalWarranty"] = 210] = "ExternalWarranty";
    ContractState[ContractState["Suspended"] = 400] = "Suspended";
    ContractState[ContractState["Terminated"] = 500] = "Terminated";
    ContractState[ContractState["Expired"] = 600] = "Expired";
    ContractState[ContractState["Completed"] = 800] = "Completed";
    ContractState[ContractState["Settled"] = 900] = "Settled";
})(ContractState = exports.ContractState || (exports.ContractState = {}));
var WarrantyState;
(function (WarrantyState) {
    WarrantyState[WarrantyState["Active"] = 200] = "Active";
    WarrantyState[WarrantyState["Rejected"] = 300] = "Rejected";
    WarrantyState[WarrantyState["Terminated"] = 500] = "Terminated";
})(WarrantyState = exports.WarrantyState || (exports.WarrantyState = {}));
var DbType;
(function (DbType) {
    DbType[DbType["int"] = 1] = "int";
    DbType[DbType["text"] = 2] = "text";
    DbType[DbType["date"] = 3] = "date";
    DbType[DbType["monetary"] = 4] = "monetary";
    DbType[DbType["mileage"] = 5] = "mileage";
})(DbType = exports.DbType || (exports.DbType = {}));
var AggregateType;
(function (AggregateType) {
    AggregateType[AggregateType["sum"] = 1] = "sum";
    AggregateType[AggregateType["concat"] = 2] = "concat";
    AggregateType[AggregateType["count"] = 3] = "count";
})(AggregateType = exports.AggregateType || (exports.AggregateType = {}));
var FormattingLocale;
(function (FormattingLocale) {
    FormattingLocale[FormattingLocale["sv-SE"] = 0] = "sv-SE";
    FormattingLocale[FormattingLocale["uk-UA"] = 1] = "uk-UA";
    FormattingLocale[FormattingLocale["da-DK"] = 2] = "da-DK";
    FormattingLocale[FormattingLocale["en-GB"] = 3] = "en-GB";
    FormattingLocale[FormattingLocale["fi-FI"] = 4] = "fi-FI";
    FormattingLocale[FormattingLocale["en-US"] = 5] = "en-US";
})(FormattingLocale = exports.FormattingLocale || (exports.FormattingLocale = {}));
var ContractActionType;
(function (ContractActionType) {
    ContractActionType[ContractActionType["create"] = 100] = "create";
    ContractActionType[ContractActionType["sendDraft"] = 120] = "sendDraft";
    ContractActionType[ContractActionType["buyNow"] = 130] = "buyNow";
    ContractActionType[ContractActionType["createOffer"] = 140] = "createOffer";
    ContractActionType[ContractActionType["sendOfferReminderMail"] = 150] = "sendOfferReminderMail";
    ContractActionType[ContractActionType["sendContractTerminationMail"] = 151] = "sendContractTerminationMail";
    ContractActionType[ContractActionType["sendOfferReminderMail2"] = 152] = "sendOfferReminderMail2";
    ContractActionType[ContractActionType["sendContractActivationMail"] = 153] = "sendContractActivationMail";
    ContractActionType[ContractActionType["sendOfferReminderMail3"] = 154] = "sendOfferReminderMail3";
    ContractActionType[ContractActionType["sendContractSuspendedMail"] = 155] = "sendContractSuspendedMail";
    ContractActionType[ContractActionType["sendContractOfferMail"] = 156] = "sendContractOfferMail";
    ContractActionType[ContractActionType["sendContractReactivationMail"] = 157] = "sendContractReactivationMail";
    ContractActionType[ContractActionType["sendContractAdjustmentMail"] = 158] = "sendContractAdjustmentMail";
    ContractActionType[ContractActionType["sendContractSettlementMail"] = 159] = "sendContractSettlementMail";
    ContractActionType[ContractActionType["rejectOffer"] = 160] = "rejectOffer";
    ContractActionType[ContractActionType["acceptOffer"] = 180] = "acceptOffer";
    ContractActionType[ContractActionType["approveOffer"] = 200] = "approveOffer";
    ContractActionType[ContractActionType["activate"] = 300] = "activate";
    ContractActionType[ContractActionType["expire"] = 400] = "expire";
    ContractActionType[ContractActionType["expireContract"] = 410] = "expireContract";
    ContractActionType[ContractActionType["sendContractExpiredMail"] = 411] = "sendContractExpiredMail";
    ContractActionType[ContractActionType["changeVehicleData"] = 420] = "changeVehicleData";
    ContractActionType[ContractActionType["changeCustomerData"] = 440] = "changeCustomerData";
    ContractActionType[ContractActionType["changePaymentData"] = 460] = "changePaymentData";
    ContractActionType[ContractActionType["modify"] = 500] = "modify";
    ContractActionType[ContractActionType["suspend"] = 600] = "suspend";
    ContractActionType[ContractActionType["reactivate"] = 700] = "reactivate";
    ContractActionType[ContractActionType["pauseSubscription"] = 720] = "pauseSubscription";
    ContractActionType[ContractActionType["terminate"] = 800] = "terminate";
    ContractActionType[ContractActionType["registerCashPayment"] = 810] = "registerCashPayment";
    ContractActionType[ContractActionType["registerCashPayout"] = 820] = "registerCashPayout";
    ContractActionType[ContractActionType["registerProviderPayment"] = 830] = "registerProviderPayment";
    ContractActionType[ContractActionType["settle"] = 900] = "settle";
    ContractActionType[ContractActionType["archive"] = 1000] = "archive";
})(ContractActionType = exports.ContractActionType || (exports.ContractActionType = {}));
var OfferRequestState;
(function (OfferRequestState) {
    OfferRequestState[OfferRequestState["Pending"] = 100] = "Pending";
    OfferRequestState[OfferRequestState["Approved"] = 200] = "Approved";
    OfferRequestState[OfferRequestState["Rejected"] = 300] = "Rejected";
    OfferRequestState[OfferRequestState["Expired"] = 400] = "Expired";
})(OfferRequestState = exports.OfferRequestState || (exports.OfferRequestState = {}));
var ResponseWarnings;
(function (ResponseWarnings) {
    ResponseWarnings[ResponseWarnings["GenericWarning"] = 499] = "GenericWarning";
})(ResponseWarnings = exports.ResponseWarnings || (exports.ResponseWarnings = {}));
//# sourceMappingURL=index.js.map