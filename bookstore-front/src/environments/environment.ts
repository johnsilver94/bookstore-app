// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  booksApi: 'http://localhost:5000',
  scopeUri:'api://f6e26007-bc9f-49c5-a985-2b4674588011/boockstore-back',
  tenantId: '8d170773-bbea-43f1-bd6d-f414a75c2390',
  uiClienId: 'edf0921f-f0ed-49fd-af74-f5ac8971725b',
  authority: 'https://login.microsoftonline.com/common/',
  redirectUrl: 'http://localhost:4200',
  tokenWhiteListedDomains: ['http://localhost:5000']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
