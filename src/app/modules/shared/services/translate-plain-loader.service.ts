import { Injectable } from '@angular/core';
import { TranslateLoader } from "@ngx-translate/core";
import { Observable, of } from "rxjs";
import { LANGUAGES } from "../../../../assets/translates/languages";

@Injectable()
export class TranslatePlainLoader extends TranslateLoader {

  getTranslation(lang: string): Observable<any> {
    return of(LANGUAGES[lang]());
  }
}
