import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouterExtensions, TextView } from '@nativescript/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
 
  public tvtext = "";
  public formSecond:FormGroup;
  public name:string='';
  constructor(
    private formBuilder: FormBuilder,
    private router:RouterExtensions
  ) { }

  ngOnInit() {

    this.formSecond = this.formBuilder.group({
      firstName:new FormControl('', [Validators.required]),
    });
    // this.formSecond = new FormGroup({
    //   emailAddress:new FormControl(null),
    // })
  }

  public click(){
    console.log(this.formSecond.value)
  }


}
