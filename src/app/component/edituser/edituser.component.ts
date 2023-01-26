import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  id:any
  blogeditdata:any
  form:any
  editdata:any

  constructor(private s:DataserviceService,private a:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.a.snapshot.paramMap.get('id')
    console.log(this.id)


    this.s.userview(this.id).subscribe((res)=>{
      console.log(res)
             //form ke liye
             this.form=new FormGroup({
              firstName:new FormControl(''),
              lastName: new FormControl(''),
              maidenName:new FormControl(''),
              age:new FormControl('')
            })
      
      //form me data show krne ke liye 
      this.editdata=res
      console.log(this.editdata)
      
      this.form.patchValue({
        firstName:this.editdata.firstName,
        lastName:this.editdata.lastName,
        maidenName:this.editdata.maidenName,
        age:this.editdata.age,
      
      })

  })

}
update(){
  this.s.updateuser(this.form.value,this.id).subscribe((res)=>{
  console.log(res);
  // this.router.navigate(['/'])
})
}
}
