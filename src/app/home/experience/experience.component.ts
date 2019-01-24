import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFromGroup: FormGroup;
  sixthFromGroup: FormGroup;
  seventhFormGroup: FormGroup;
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.fifthFromGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.sixthFromGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
