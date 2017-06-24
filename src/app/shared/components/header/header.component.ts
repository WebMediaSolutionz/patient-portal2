import { Component } from '@angular/core';

// Components
import { AuthService } from "../../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'pp-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}
  
}
