import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private s:DataserviceService) { }
  form1:any= new FormGroup({

    firstName : new FormControl(''),
    lastName : new FormControl(''),
    maidenName :new FormControl(''),
    age: new FormControl('')
  
  })
 
  ngOnInit(): void {
    console.log(this.form1)
  }
userdata(){
  this.s.userinsert(this.form1.value).subscribe((res)=>{
    console.log(res)
  })
  
}
}
