export enum AccountPages {
  Information = '/account/information',
  Devices = '/account/devices',
  Management = '/account/management',
}

export type AccountPagesPaths = (typeof AccountPages)[keyof typeof AccountPages];
