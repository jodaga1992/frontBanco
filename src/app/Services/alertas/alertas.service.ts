import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toast: ToastrService) { }

  showSucces(texto: string, titulo: string)
  {
    this.toast.success(texto, titulo)
  }

  showError(texto: string, titulo: string)
  {
    this.toast.error(texto, titulo)
  }

  shiwWarning(texto: string, titulo: string)
  {
    this.toast.warning(texto, titulo)
  }
}

