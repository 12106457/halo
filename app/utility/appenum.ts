
export enum CallNotesFormTypes {
    PARTICULAR = "PARTICULAR",
    BUSINESS_MODEL = "BUSINESS MODEL",
    TECHNOLOGY = "TECHNOLOGY",
    FUTURE_OUTLOOK = "FUTURE OUTLOOK",
    EQUITY_RELATED = "EQUITY RELATED",
    FINANCIAL = "FINANCIAL",
    OPERATIONS = "OPERATIONS",
}


const CallNotesFormTypesProperties = {
    [CallNotesFormTypes.PARTICULAR]: { title: 'Particular' },
    [CallNotesFormTypes.BUSINESS_MODEL]: { title: 'Business Model / Industry' },
    [CallNotesFormTypes.TECHNOLOGY]: { title: 'Technology' },
    [CallNotesFormTypes.FUTURE_OUTLOOK]: { title: 'Future Outlook' },
    [CallNotesFormTypes.EQUITY_RELATED]: { title: 'Equity Related' },
    [CallNotesFormTypes.FINANCIAL]: { title: 'Financial' },
    [CallNotesFormTypes.OPERATIONS]: { title: 'Operations' },

  };