import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardGroupComponent,
  ColComponent,
  ContainerComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  RowComponent,FormLabelDirective
} from '@coreui/angular';
//added later
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { ToasterService,ToastModule,Toast  } from '@coreui/angular'; // CoreUI toast service
import { Router } from '@angular/router';
import { AuthService} from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { LoginRequest } from '../../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective
  //  , NgStyle
  ,FormFeedbackComponent,ReactiveFormsModule,CommonModule
  ]
})


export class LoginComponent {

showPassword = false;
 
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
 

 loginForm!: FormGroup;
 // submitted = false;


  constructor(
    private fb: FormBuilder,
   // private http: HttpClient,
    private router: Router,
    private toaster: ToastrService,
    private authService: AuthService,
    private msgSend: MessageService
  ) {
    // this.loginForm = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  ngOnInit(): void {
        localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('email');
      localStorage.removeItem('roles');
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    // this.submitted = true;
    
    if (this.loginForm.invalid) {
      // this.toaster.create({ title: 'Warning', content: 'Please enter username and password.', color: 'warning' });
  /// this.toaster.warning("Please enter username and password.","Warning")
   this.loginForm.markAllAsTouched();       
  this.msgSend.add({ severity: 'warn', summary: 'Warn', detail: 'Please enter username and password' });
      return;
    }

   // const { username, password } = this.loginForm.value;
      const loginData: LoginRequest = this.loginForm.value;
debugger
     this.authService.login(loginData).subscribe({
        next: (resp: any) => {
          // Store token in session storage
        //  sessionStorage.setItem('authToken', resp.token);
        //  this.toaster.create({ title: 'Success', content: 'Login successful!', color: 'success' });
    // this.toaster.success("Login successful!'","Success")
     this.msgSend.add({ severity: 'success', summary: 'Success', detail: 'Login successful!' });
     // Navigate to dashboard (or whatever route)
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
         /// this.toaster.create({ title: 'Error', content: 'Invalid credentials!', color: 'danger' });
      /// this.toaster.error("Invalid credentials!","Error")
        this.msgSend.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials!' });
        }
      });
  }

    get f() {
    return this.loginForm.controls;
  }
}
