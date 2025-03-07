import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsServicesService 
{
  httpClient=inject(HttpClient);
  constructor() { }

  addApi(userName:string, userAge:string){
    return this.httpClient.post("http://localhost:3000/userList",{
      userName: userName,
      userAge: userAge
    })
  }

  GetApi(){
    return this.httpClient.get("http://localhost:3000/userList");
  }

  deleteApi(userList:any){
    return this.httpClient.delete("http://localhost:3000/userList/"+userList.id);
  }

  updateApi(userList:any){
    return this.httpClient.put("http://localhost:3000/userList/"+userList.id,userList);
  }
}
