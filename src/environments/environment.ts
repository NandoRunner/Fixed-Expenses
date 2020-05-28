// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CURRENT_VERSION: "0.20.4",
  hostingName: "Fixed Expenses",
  icon: "cash",
  init_page: "gas", 
  firebase: {
    apiKey: 'AIzaSyB8YElMeuS6OUJId8uLUgiOZ71XnMNRqMo',
    authDomain: 'expense-register-17e66.firebaseapp.com',
    databaseURL: 'https://expense-register-17e66.firebaseio.com',
    projectId: 'expense-register-17e66',
    storageBucket: 'expense-register-17e66.appspot.com',
    messagingSenderId: '146625221653',
    appId: '1:146625221653:web:b92a748e6ad688f1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
