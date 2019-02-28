import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ContactModel } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: ContactModel;
  constructor(private ContactService: ContactService) {
    this.contact={
      name:'',
      phone:'',
      email:""
    }
   }

  ngOnInit() {
  }
  
  onClick(){
    this.ContactService.onClick(this.contact).subscribe()
    
  }

  // registerUser(f) {
  
  //   this.userModel.name = f.userName.value;
  //    this.userModel.age = f.userAge.value;
  //    this.userModel.gender = f.userGender.value;
  //    this.userModel.cellphone = f.userCellphone.value;
 
  //    console.log(this.userModel);
  //  }

}
