import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
data:any
data1:any
  constructor(private s:DataserviceService) { }

  ngOnInit(): void {
    this.s.getdata().subscribe((res)=>{
      this.data1=res
      console.log(res)
     
      this.data=this.data1.users
      console.log(this.data)
    
    }
    )
  }

}
