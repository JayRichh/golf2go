export interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  options?: string[];
  validation?: (value: string) => boolean;
  errorMessage?: string;
  section?: string;
}

export interface FormData {
  companyName?: string;
  contactPerson: string;
  landlinePhone?: string;
  mobilePhone: string;
  email: string;

  postalAddress: string;
  postalAddress2?: string;
  postalCity: string;
  postalRegion: string;
  postalPostcode: string;
  poBox?: string;

  deliveryAddress: string;
  deliveryAddress2?: string;
  deliveryCity: string;
  deliveryRegion: string;
  deliveryPostcode: string;

  eventAddress: string;
  eventAddress2?: string;
  eventCity: string;
  eventRegion: string;
  eventPostcode: string;

  eventDate: string;
  eventType: string;
  numberOfDays: string;
  numberOfGreens: string;
  message?: string;
  recaptchaToken?: string;
}

export interface FormState {
  data: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  touched: Partial<Record<keyof FormData, boolean>>;
}
