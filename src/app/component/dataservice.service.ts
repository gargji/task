import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
url="https://dummyjson.com/users"

  constructor(private http :HttpClient) { }
  getdata(){
    return this.http.get(this.url)
   }
   userinsert(details:any){
    console.log(details)
    return this.http.post(this.url +'/add',details)
  
  }
  userview(id:any){
    return this.http.get(this.url+"/"+id)
  
   }
   updateuser(data:any,id:any){
    return this.http.put(this.url+"/"+id,data)
   }
}

