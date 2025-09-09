import { Component, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, CollapseDirective, CollapseModule, RowComponent, AccordionModule, AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective
} from "@coreui/angular";
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink,Router ,ActivatedRoute} from '@angular/router';
import { IconComponent } from '@coreui/icons-angular';
import { NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

import { MessageService } from 'primeng/api';

import { UsersService } from '../../../services/users.service';

import { CustomValidators } from '../../../shared/validators/custom-validators';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-userform',
  imports: [
      NgxDatatableModule,
        // CardComponent,
        // CardBodyComponent,
        // CollapseDirective,
        NgClass,
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        // CardBodyComponent,
        // CardComponent,
        // CardHeaderComponent,
        // ColComponent,
        // RowComponent, 
        CollapseModule, IconComponent,
        AccordionModule, AccordionButtonDirective,
        AccordionComponent,
        AccordionItemComponent,
        TemplateIdDirective, NgbDatepickerModule, MultiSelectModule, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective
        , SelectModule, Message 
],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.scss'
})
export class UserformComponent implements OnInit {

branches = [
    { id: 'EFB4E593-550D-40AD-B8A2-16900008EFBC', name: 'pmMainBranch1' },
    { id: '1A29A5F7-38B0-4145-B74A-6CE1FF0F5D2D', name: 'abc surat' },
    { id: '79BE261A-92B7-40AD-B237-B62810B58824', name: 'xyz Vadodara ' },
  ];

  UserTypeslist = [
    { id: '1', name: 'Web' },
    { id: '2', name: 'Mobile' },
    { id: '3', name: 'Web & Mobile' },
  ];
  Rolelist = [
    { id: '2715B8A9-F312-4258-8475-B0DB8772976E', name: 'Administrator' },
    { id: '7DA385DE-37DC-4BB7-8DFB-B37AA926DF7C', name: 'Sales Manager' },
    { id: '626410A2-7221-4028-AB3C-BF3E6795DADB', name: 'Finance' },
  ];


  // Form
  userForm!: FormGroup;
  isEdit = false;
  editUserId: string | null = null;

  // Collapse toggles
  togglePersonalInfo = true;
  toggleAddress = true;
  toggleOther = true;


  constructor(private fb: FormBuilder, 
    private messageService: MessageService,
    private usersService: UsersService,
    private router: Router,
 private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {    
  this.userForm = this.fb.group({
      firstName: ['', CustomValidators.requiredText()],
      lastName: ['', CustomValidators.requiredText()],
      email: ['', CustomValidators.isemailvalid()],
      password: ['',CustomValidators.isvalidpassword()],
      address: [''],
      dob: [null,[Validators.required]],
      empNo: [''],
      userType: [null,[Validators.required]],
      roleName: [null, Validators.required],
      branchIds: [[], Validators.required],
      isActive: [true,Validators.required],
      phoneNumber: ['',CustomValidators.phone()],
      userName: ['',  CustomValidators.requiredText()],
    });


// for edit
 // 2️⃣ Check route param
  this.editUserId = this.route.snapshot.paramMap.get('id');
  if (this.editUserId) {
    this.isEdit = true;

  // ✅ If editing → remove "required" but keep format validation
    // this.userForm.get('password')?.clearValidators();
    // this.userForm.get('password')?.setValidators(CustomValidators.isvalidpassword());
    // this.userForm.get('password')?.updateValueAndValidity();

    // 3️⃣ Fetch user and patch form
    this.usersService.getUserById(this.editUserId).subscribe({
      next: (res) => {
        debugger
        this.userForm.patchValue({
          ...res,

            // ✅ Date (convert ISO string -> NgbDateStruct)
    dob: res.dob ? this.dateToNgbDate(res.dob) : null,

    // ✅ Single Select Dropdowns (expecting object not just string/number)
    userType: this.UserTypeslist.find(x => x.id == res.userType) || null,
    roleName: this.Rolelist.find(x => x.name === res.roleName) || null,

    //  Multi Select Dropdown (array of objects, not just IDs)   
    branchIds: this.branches.filter(b =>
  res.branchIds.some((id: string) => id.toLowerCase() === b.id.toLowerCase())
),
        });
      },
          error: (err) => {
  let errorMessage = 'Failed To Load User';

  // 1️⃣ Plain string error from API
  if (typeof err.error === 'string') {
    errorMessage = err.error;
  }

  // 2️⃣ Custom object with message
  else if (err.error?.message) {
    errorMessage = err.error.message;
  }

  // 3️⃣ ModelState validation errors
  else if (err.error?.errors) {
     const validationErrors: string[] = [];   // 👈 type specified
    for (const key in err.error.errors) {
      if (err.error.errors.hasOwnProperty(key)) {
        validationErrors.push(...err.error.errors[key]);
      }
    }
    errorMessage = validationErrors.join(', '); // 🔹 show all in one line
    // Or show only first: errorMessage = validationErrors[0];
  }

  this.messageService.add({
    severity: 'error',
    summary: 'Validation Error',
    detail: errorMessage
  });
}
    });
  }


 if(!this.isEdit){
  this.userForm.get('password')?.addValidators([Validators.required]);
 }



  }


  saveUser() {
    debugger
  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: 'Please fill required details'
    });
    return;
  }

  const formValue = this.userForm.value;

// Start shallow copy
const payload = { ...formValue };

payload.firstName = formValue.firstName ? formValue.firstName.trim() : formValue.firstName;
payload.lastName  = formValue.lastName  ? formValue.lastName.trim()  : formValue.lastName;
payload.userName  = formValue.userName  ? formValue.userName.trim()  : formValue.userName;
payload.password  = formValue.password  ? formValue.password.trim()  : formValue.password;

// 🔹 Transform only mismatched fields
payload.dob = formValue.dob
  ? `${formValue.dob.year}-${String(formValue.dob.month).padStart(2, '0')}-${String(formValue.dob.day).padStart(2, '0')}`
  : null;


payload.branchIds = (formValue.branchIds || []).map((b: any) => b.id);

payload.roleName = formValue.roleName?.name || formValue.roleName;

payload.userType = formValue.userType?.id
  ? Number(formValue.userType.id)
  : formValue.userType;


  if (this.isEdit && this.editUserId) {
    // update
    this.usersService.updateUser(this.editUserId.toString(), payload).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated successfully' });
        this.router.navigate(['/settings/users']); // go back to listing
      },
      error: (err) => {
    let errorMessage = 'Update failed';

    // 1️⃣ If API returns plain string
    if (typeof err.error === 'string') {
      errorMessage = err.error;
    }

    // 2️⃣ If API returns JSON with message
    else if (err.error?.message) {
      errorMessage = err.error.message;
    }

    // 3️⃣ If API returns ModelState validation errors
    else if (err.error?.errors) {
      // Take first validation error
      const firstKey = Object.keys(err.error.errors)[0];
      errorMessage = err.error.errors[firstKey][0];
    }

    this.messageService.add({
      severity: 'error',
      summary: err.status === 404 ? 'Not Found' : 'Error',
      detail: errorMessage
    });
  }
   
    });
  } else {
    // create
    this.usersService.createUser(payload).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User created successfully' });
        this.router.navigate(['/settings/users']); // go back to listing
      },
     error: (err) => {
  let errorMessage = 'Create User failed';

  // 1️⃣ Plain string error from API
  if (typeof err.error === 'string') {
    errorMessage = err.error;
  }

  // 2️⃣ Custom object with message
  else if (err.error?.message) {
    errorMessage = err.error.message;
  }

  // 3️⃣ ModelState validation errors
  else if (err.error?.errors) {
     const validationErrors: string[] = [];   // 👈 type specified
    for (const key in err.error.errors) {
      if (err.error.errors.hasOwnProperty(key)) {
        validationErrors.push(...err.error.errors[key]);
      }
    }
    errorMessage = validationErrors.join(', '); // 🔹 show all in one line
    // Or show only first: errorMessage = validationErrors[0];
  }

  this.messageService.add({
    severity: 'error',
    summary: 'Validation Error',
    detail: errorMessage
  });
      }

    });
  }
}


// Helper to convert ISO string into NgbDateStruct
private dateToNgbDate(dateString: string) {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
}

}
