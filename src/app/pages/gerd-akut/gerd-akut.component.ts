import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { flow } from 'lodash';
import { flatMap, filter } from 'lodash/fp';
@Component({
  selector: 'app-gerd-akut',
  templateUrl: './gerd-akut.component.html',
  styleUrls: ['./gerd-akut.component.scss'],
})
export class GerdAkutComponent implements OnInit {

  arr : any

  checklistState = [ 
    {
      label: 'Mual',
      value: 'q1',
      checked: false
    },
    {
      label: 'Sering Sendawa',
      value: 'q1',
      checked: false,
    },
    {
      label: 'Tubuh Lemas',
      value: 'q0',
      checked: false
    },
    {
      label: 'Kembung',
      value: 'q1',
      checked: false
    },
    {
      label: 'Muntah',
      value: 'q1',
      checked: false
    },
    {
      label: 'Nafsu Makan Menurun',
      value: 'q1',
      checked: false
    },
    {
      label: 'Rasa Mengganjal di Tenggorokan',
      value: 'q1',
      checked: false
    },
    {
      label: 'Sakit Perut Bagian Atas',
      value: 'q2',
      checked: false
    },
    {
      label: 'Bab Berdarah',
      value: 'q2',
      checked: false
    },
    {
      label: 'Muntah Berdarah',
      value: 'q2',
      checked: false
    },
    {
      label: 'Mudah Lelah',
      value: 'q2',
      checked: false
    },
    {
      label: 'Dada Serasa Terbakar',
      value: 'q2',
      checked: false
    },
  ];

  
  form = new FormGroup({
    checklist : new FormControl(this.flattenValues(this.checklistState))
  });


  constructor(public router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {}
  checklist = this.form.get('checklist');

  onChecklistChange(checked, checkbox) {
    checkbox.checked = checked;
    this.checklist.setValue(this.flattenValues(this.checklistState));
  }

  flattenValues(checkboxes) {
    this.arr = []
    const flattenedValues = flow([
      filter(checkbox => checkbox.checked),
      flatMap(checkbox => checkbox.value )
    ])(checkboxes)
    return flattenedValues
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 3000,
    });
    loading.present();
  }

  getVal(){
  //  console.log(this.checklist.value)
   let q1 = 0
   let q2 = 0
  for(let i = 0; i < this.checklist.value.length; i++){
    // console.log(this.checklist.value[i])
    if(this.checklist.value[i] === "q1"){
      q1++
    } else if(this.checklist.value[i] === "q2"){
      q2++
    } else{
      q1++
      q2++
    }
  }
    if(q2 >= q1){
      let g = localStorage.setItem("penyakit", "Gerd Kronis")
      console.log("Kronis")
    } else{
      let g = localStorage.setItem("penyakit", "Gerd Akut")
      console.log("akut")
    }
    this.showLoading()

  }

}
