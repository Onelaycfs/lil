import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //pessoas = ['Raul Esteves Antunes','Estela Berta Esteves Antunes','Luis Esteves Aantunes','Ana Vivalda Esteves Aantunes'];
  nome = 'Esteves';
 
  dataUser = { email: '', senha: '' }
  respostaLogin = '';
  color='';
  constructor( private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit(): void {
  }
  verifyLogin(): void {
    if (this.dataUser.email == '' && this.dataUser.senha == ''){
      this.respostaLogin = 'Degite o email e a senha';
      this.color='red';

    }
    else if (this.dataUser.email == ''){
      this.respostaLogin = 'Degite o email ';
      this.color='red';

    }
    else if (this.dataUser.senha == ''){
      this.respostaLogin = 'Degite a senha ';
    }
    else{
      this.respostaLogin = 'Login  feito com sucesso';
      this.color='green';

      setTimeout(() => {
        this.respostaLogin ='';
        this.router.navigate(['/home']);
        console.log('home');
      }, 3000);
      return
    }
    setTimeout(() => {
      this.respostaLogin ='';
    }, 3000);

  }

}
