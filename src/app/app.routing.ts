// Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AuthManager } from './shared/services/auth.manager';

// Components
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClinicBrandingComponent } from "./components/clinic-branding/clinic-branding.component";
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { PortalAdminComponent } from './components/portal-admin/portal-admin.component';
import { PracticesAndRolesComponent } from './components/practices-and-roles/practices-and-roles.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'portal-admin',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'clinic-branding',
        component: ClinicBrandingComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'general-settings',
        component: GeneralSettingsComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'patient-management',
        component: PatientManagementComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'templates',
        component: TemplatesComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'portal-admin',
        component: PortalAdminComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'clients',
        component: PracticesAndRolesComponent,
        canActivate: [AuthManager]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthManager]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
