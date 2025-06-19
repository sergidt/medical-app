import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'patients',
        loadChildren: () => import('patients-page').then(m => m.patientsPageRoutes)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patients',
    }
];
