export interface AppState {
  wiki: WikiState;
}

export interface WikiStateAPI {
  births: BirthType[];
  deaths?: any[];
  events?: any[];
  holidays?: any[];
  selected?: any[];
}

export interface WikiState extends WikiStateAPI {
  status: string;
  error: any;
}

export interface BirthType {
  text: string;
  pages: any[];
  year: number;
}
