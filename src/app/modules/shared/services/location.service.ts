import { SharedInjectable } from "shared/shared-service.module";
import { LANGUAGES } from "../../../../assets/translates/languages";

@SharedInjectable()
export class LocationService {
  private readonly LANGUAGE_KEY = 'LANGUAGE'
  private readonly DEFAULT_LANGUAGE = 'en'

  initialize(): void {
    if (!localStorage.getItem(this.LANGUAGE_KEY)) {
      this.setLanguage(this.DEFAULT_LANGUAGE)
    }
  }

  setLanguage(lang: string) {
    localStorage.setItem(this.LANGUAGE_KEY, lang)
  }

  get currentLanguage(): string {
    return localStorage.getItem(this.LANGUAGE_KEY) || this.DEFAULT_LANGUAGE
  }

  reset(): void {
    localStorage.removeItem(this.DEFAULT_LANGUAGE)
  }

  get supportedLanguages(): string[] {
    return Object.keys(LANGUAGES)
  }
}
