import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,NgForm} from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private toast: ToastrService) { }

  ngOnInit() {
    this.form=this.fb.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      message:['', Validators.required]
    })
  }
  submitForm(){
    this.db.list('messages').push(this.form.value);
    this.toast.success('Thankyou', 'Your response has been recorded. I will revert back as soon as possible')
  }

}
