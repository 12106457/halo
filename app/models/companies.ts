

export type CompanyMetaData = {
  id: number;
  name: string;
};

export interface CompaniesResponse {
  message:  string;
  response: CompaniesResult;
  status:   number;
};

export interface CompaniesResult  {
  results:  CompanyMetaData[];
};



