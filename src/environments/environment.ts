// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBv6xxDNxUOZx5yjnqCwr55BMwVj-Di1zo",
    authDomain: "provisioning-tfg.firebaseapp.com",
    databaseURL: "https://provisioning-tfg.firebaseio.com",
    projectId: "provisioning-tfg",
    storageBucket: "provisioning-tfg.appspot.com",
    messagingSenderId: "190688652195"
  }
};
