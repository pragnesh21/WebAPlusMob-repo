import { Routes } from '@angular/router';

export const routes: Routes = [
  {    path: '',     
       loadComponent: () =>
      import('./userslist/userslist.component').then((m) => m.UserslistComponent),

},
  { 
    path: 'create', 
     loadComponent: () =>
      import('./userform/userform.component').then((m)  => m.UserformComponent),
},
  { path: 'edit/:id',    
     loadComponent: () =>
      import('./userform/userform.component').then((m) => m.UserformComponent),
  },
];
