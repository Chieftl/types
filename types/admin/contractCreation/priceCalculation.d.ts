import { PriceSpecification } from '../../priceSpecification'
import { ContractType } from './contractCreation'

export interface IContractCalculationRequest {
  type: ContractType
  contractTemplateId: number
  duration: number
  mileage: number
  registrationDate: string
  optionIds: number[]
  providerPayments: number
  providerShare: number
  isAdjustment: boolean
  adjustedFrom?: string
  isDownpaymentDistributed: boolean
}

export interface IStandardContractCalculationRequest extends IContractCalculationRequest {
  brandId: number
  vehicleModelId: number
  fuelTypeId: number
}

export interface ICustomContractCalculationRequest extends IContractCalculationRequest {
  amountPerPayment: number
  brandName: string
  vehicleModelName: string
  fuelTypeName: string    
}

// The type returned by a price calculation
export interface IContractCalculationResponse {
  amountPrPayment: PriceSpecification
  downpayment: PriceSpecification
  isDownpaymentDistributed: boolean
  distributedAmount: PriceSpecification
  providerShare: PriceSpecification
  customerShare: PriceSpecification
  providerPayments: number
  customerPayments: number
  providerCost: PriceSpecification
  customerCost: PriceSpecification
  contractCost: PriceSpecification
  firstPaymentDate: string
  contractStartDate: string
  contractEndDate: string
  adjustedAmount?: PriceSpecification
  adjustedContractFullCost?: PriceSpecification
  adjustedPaymentsLeft?: number
}
