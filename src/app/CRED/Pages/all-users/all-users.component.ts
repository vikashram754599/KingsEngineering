// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
// import { HttpsServicesService } from '../../../services/https-services.service';

// @Component({
//   selector: 'app-all-users',
//   imports: [RouterLink,RouterLinkActive,RouterModule,RouterOutlet],
//   templateUrl: './all-users.component.html',
//   styleUrl: './all-users.component.css'
// })
// export class AllUsersComponent {
// //httpServices=inject(HttpsServicesService)
// userList:any[]=[];
// httpServices=inject(HttpsServicesService)
// ngOnInit(){
//   this.addUser();
// }
// addUser(){
//   console.log("addUser called.");
//   this.httpServices.GetApi().subscribe((result:any)=>{
//     this.userList=result
//     console.log("Get API Called");
//   })
// }
// }


import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpsServicesService } from '../../../services/https-services.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-users',
  standalone: true, // Add this line if using standalone components
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule, RouterOutlet,FormsModule],
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'] // Fix typo
})
export class AllUsersComponent implements OnInit {
  userList: any[] = [];
  httpServices = inject(HttpsServicesService);
  toDisplay= true;
  userName="";
  userAge="";
 selectedItem:any;

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    console.log("addUser called.");
    this.httpServices.GetApi().subscribe((result: any) => {
      this.userList = result;
      console.log("Get API Called");
    });
  }

  deleteUser(item:any){
  console.log("delet user called.");

  this.httpServices.deleteApi(item).subscribe(()=>{
    console.log("API delete user called.");
    this.getAllUser();
  })
  }

  updateUser(item:any){
   this.toDisplay=false ;
   this.userName=item.userName;
   this.userAge=item.userAge;
   this.selectedItem=item;
  }
 
  clickUpdateUser(){
  this.toDisplay=true;
  this.selectedItem.userName=this.userName;
  this.selectedItem.userAge=this.userAge;

  this.httpServices.updateApi(this.selectedItem).subscribe(() => {
      console.log("Update API Called");
    });
  

  }

}
