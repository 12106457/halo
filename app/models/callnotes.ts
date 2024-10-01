
export type ParticularDataModel = {
    details: string;
};

export const defaultParticularDataModel: ParticularDataModel = {
    details: '',

};

export type BusinessDataModel = {
    businessModelDescription: string;
    tamValue: string;
    additionalTAMDetails: string;
    uniqueAdditionalValue: string;
    competitor: string;
};

export const defaultBusinessDataModel: BusinessDataModel = {
    businessModelDescription: '',
    tamValue: '',
    additionalTAMDetails: '',
    uniqueAdditionalValue: '',
    competitor: '',
};



export type TechnologyDataModel = {
    softwareUsed: string;
};

export const defaultTechnologyDataModel: TechnologyDataModel = {
    softwareUsed: '',
};

export type FutureOutlookDataModel = {
    companyOutlook: string;
    industryOutlook: string;
    domesticInternationalPlan: string;
};

export const defaultFutureOutlookDataModel: FutureOutlookDataModel = {
    companyOutlook: '',
    industryOutlook: '',
    domesticInternationalPlan: '',
};

export type EquityRelatedDataModel = {
    equityRaised: string;
    equityFuturePlan: string;
    investorName: string;
    equityRaisedByInvestor: string;
    aboutInvestor: string;
    currentValuationDetail: string;
    benchmmarks: string;
};

export const defaultEquityRelatedDataModel: EquityRelatedDataModel = {
    equityRaised: '',
    equityFuturePlan: '',
    investorName: '',
    equityRaisedByInvestor: '',
    aboutInvestor: '',
    currentValuationDetail: '',
    benchmmarks: '',
};


export type OperationsDataModel = {
    supplierName: string;
    supplierLocation: string;
    notesOnSupplier: string;
    cutomerDetails: string;
};

export const defaultOperationsDataModel: OperationsDataModel = {
    supplierName: '',
    supplierLocation: '',
    notesOnSupplier: '',
    cutomerDetails: '',
};


export type FinancialDataModel = {
    lastFinancialYearRevenue: string;
    lastFinancialYearProfit: string;
    currentSale: string;
    grossMargin: string;
    netMargin: string;
    cashBurnRate: string;
    currentCashInhand: string;
    existingDebt: string;
    debtUseCase: string;
    
};

var defaultFinancialDataModel: FinancialDataModel = {
    lastFinancialYearRevenue: '',
    lastFinancialYearProfit: '',
    currentSale: '',
    grossMargin: '',
    netMargin: '',
    cashBurnRate: '',
    currentCashInhand: '',
    existingDebt: '',
    debtUseCase: '',
};


export type CallNotesDataModel = {
    id: number
    user: number;
    company_details: number;
    particulars: ParticularDataModel;
    business_model: BusinessDataModel;
    technology: TechnologyDataModel;
    future_outlook: FutureOutlookDataModel;
    equity: EquityRelatedDataModel;
    operations: OperationsDataModel;
    financial: FinancialDataModel;
};

const defaultCallNotesDataModel: CallNotesDataModel = {
    id: 0,
    user: 0,
    company_details: 0,
    particulars: defaultParticularDataModel,
    business_model: defaultBusinessDataModel,
    technology: defaultTechnologyDataModel,
    future_outlook: defaultFutureOutlookDataModel,
    equity: defaultEquityRelatedDataModel,
    operations: defaultOperationsDataModel,
    financial: defaultFinancialDataModel,
};

export type AddCallNotesProps = {
    notes: CallNotesDataModel; 
    onSave: (model: CallNotesDataModel) => void; 
}






// To parse this data:
//
//   import { Convert, CallNotesListResponse } from "./file";
//
//   const callNotesListResponse = Convert.toCallNotesListResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CallNotesListResponse {
    success: boolean;
    message: string;
    data:    CallNotesListDataModel[];
}

export interface CallNotesListDataModel {
    id:              number;
    created_at:      Date;
    updated_at:      Date;
    particulars:     ParticularDataModel;
    business_model:  BusinessDataModel;
    technology:      TechnologyDataModel;
    future_outlook:  FutureOutlookDataModel;
    equity:          EquityRelatedDataModel;
    operations:      OperationsDataModel;
    financial:       FinancialDataModel;
    user:            User;
    company_details: CompanyDetails;
}

export interface CompanyDetails {
    id:           number;
    company_name: string;
}

export interface User {
    id:    number;
    name:  string;
    email: string;
}




export {defaultCallNotesDataModel};







