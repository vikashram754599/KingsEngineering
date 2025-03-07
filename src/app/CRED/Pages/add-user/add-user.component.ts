import { Component, inject } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpsServicesService } from '../../../services/https-services.service';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
userName="";
userAge="";
httpServices=inject(HttpsServicesService)

addUser(){
  console.log("Button clicked. Name: "+this.userName +" Age: "+this.userAge)
  this.httpServices.addApi(this.userName,this.userAge).subscribe(()=>{
    console.log("API Called and Button clicked. Name: "+this.userName +" Age: "+this.userAge)
  })
}
}
