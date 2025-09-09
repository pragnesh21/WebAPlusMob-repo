// import { Routes } from '@angular/router';

// // export const routes: Routes = [

// //   {
// //     path: 'settings',
// //     loadComponent: () => import('./settings.component').then(m => m.SettingsComponent),
// //     data: {
// //       title: 'Settings'
// //     }
// //   },

// // ];
// // import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () => import('./settings.component').then(m => m.SettingsComponent),
//     data: {
//       title: 'Settings'
//     },
//     children: [
//       // {
//       //   path: '',
//       //   redirectTo: 'Settings',
//       //   pathMatch: 'full'
//       // },
//       {
//         path: 'users',
//         loadComponent: () => import('../users/users.component').then(m => m.UsersComponent),
//          data: {
//          title: 'Users'
//        }
//       },

//     ]
//   }
// ];

import { Routes } from '@angular/router';

// views/settings/routes.ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./settings.component').then((m) => m.SettingsComponent),
    data: { title: 'Settings' }
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../users/routes').then((m) => m.routes),
    data: { title: 'Settings / Users' }
  }
];


// import { Routes } from '@angular/router';

// export const routes: Routes = [

//   // {
//   //   path: 'users',
//   //   loadComponent: () => import('./users.component').then(m => m.UsersComponent),
//   //   data: {
//   //     title: 'Users'
//   //   }
//   // },
 
// ];
