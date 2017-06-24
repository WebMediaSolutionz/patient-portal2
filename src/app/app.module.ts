// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Routing
import { routing } from './app.routing';

// Services
import { WebService } from './shared/services/web.service';
import { AuthService } from './shared/services/auth.service';
import { AuthManager } from './shared/services/auth.manager';
import { ConfigService } from './shared/services/config.service';
import { ValidationService } from './shared/services/validation.service';
import { PasswordRulesService } from './shared/services/password-rules.service';
import { ErrorDisplayService } from './shared/services/error-display.service';

// Pipes
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PracticesAndRolesComponent } from './components/practices-and-roles/practices-and-roles.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FieldComponent } from './shared/components/field/field.component';
import { ClinicBrandingComponent } from './components/clinic-branding/clinic-branding.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { PatientManagementComponent } from './components/patient-management/patient-management.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { PortalAdminComponent } from './components/portal-admin/portal-admin.component';
import { ClientModalComponent } from "./shared/components/client-modal/client-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CapitalizePipe,
    LoginComponent,
    UserComponent,
    PageNotFoundComponent,
    FieldComponent,
    PracticesAndRolesComponent,
    HeaderComponent,
    ClinicBrandingComponent,
    GeneralSettingsComponent,
    PatientManagementComponent,
    TemplatesComponent,
    PortalAdminComponent,
    ClientModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    WebService,
    AuthService,
    ConfigService,
    AuthManager,
    ValidationService,
    PasswordRulesService,
    ErrorDisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
