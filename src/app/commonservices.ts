import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //private baseUrl = 'http://ec2-18-220-112-92.us-east-2.compute.amazonaws.com:8080/InventoryApp-1.0/';

   private baseUrl  = 'http://localhost:8090/';
  //local aws
  //private baseUrl = 'http://ec2-3-23-79-198.us-east-2.compute.amazonaws.com:8080/InventoryApp-1.0/';
  constructor(private http:HttpClient) { }


  public getValidMobileNo(mNo:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}authentication/otp/${mNo}`);
  }
 
  public getValidOtp(login: Object) : Observable<any> {
    return this.http.put(`${this.baseUrl}authentication/validateOTP`, login);
 }

 public registerIndividualUser(individualUser: Object) : Observable<any> {
  return this.http.post(`${this.baseUrl}subscribe/save`, individualUser);
}

}
