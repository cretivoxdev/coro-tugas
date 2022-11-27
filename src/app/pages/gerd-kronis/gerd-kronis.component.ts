import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-gerd-kronis',
  templateUrl: './gerd-kronis.component.html',
  styleUrls: ['./gerd-kronis.component.scss'],
})
export class GerdKronisComponent implements OnInit {
  form: FormGroup;
  checkMe: boolean = false;
   val1: any;
   val2 : any;
   val3 : any;
   val4 : any;
   val5 : any;
   val6 : any;
   val7 : any;
   val8 : any;
   val9 : any;
   val10 : any;
   val11: any;
   val12: any;

   gerdAkut:  any
   gerdKronis: any
   score: any
   checkboxGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

   }

  ngOnInit() {

    this.form = this.formBuilder.group({
      tubuh_lemas: '',
      sakit_perut: '',
      bab_berdarah: '',
      muntah_berdarah: '',
      mudah_lelah: '',
      dada_serasa_terbakar: '',
      mual: '',
      sering_sendawa: '',
      nafsu_makan_menurun: '',
      rasa_mengganjal: '',
      muntah: '',
      kembung: ''
    });

    this.http.get('assets/self.json')
    .subscribe(response => {
      this.gerdAkut = response[0].self_diagnos.gerd_akut
      this.gerdKronis = response[0].self_diagnos.gerd_kronis
      // console.log(this.gerdAkut)
    })
  }

  getValue(){
    this.score = [this.form.value]
    const a = this.score[0].tubuh_lemas
    const b = this.score[0].sakit_perut
    const c = this.score[0].bab_berdarah
    const d = this.score[0].muntah_berdarah
    const e = this.score[0].mudah_lelah
    const f = this.score[0].dada_serasa_besar
    const g = this.score[0].mual
    const h = this.score[0].sering_sendawa
    const i = this.score[0].nafsu_makan_menurun
    const j = this.score[0].rasa_mengganjal
    const k = this.score[0].muntah
    const m = this.score[0].kembung
  }


  akut = ["mual, sering sendawa, tubuh lemas, kembung, muntah, nafsu makan menurun, rasa mengganjal di tenggorokan"]
  kronis = ["tubuh lemas, sakit perut bagian atas, bab berdarah, muntah berdarah, mudah lelah, dada serasa terbakar"]

}
