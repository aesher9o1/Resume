import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,NgForm} from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) { }

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
    alert('your message has been recorded')
  }

}
