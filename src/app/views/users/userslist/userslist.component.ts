import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CardBodyComponent, CardModule } from "@coreui/angular";
import { UsersService } from '../../../services/users.service';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

import{ DeleteConfirmComponent} from '../../../shared/delete-confirm/delete-confirm.component';
import{ DeleteConfirmService} from '../../../shared/delete-confirm/delete-confirm.service';


@Component({
  selector: 'app-userslist',
  imports: [NgxDatatableModule, CommonModule, RouterLink, CardBodyComponent, 
    CardModule,ButtonModule,DeleteConfirmComponent],
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss'
})
export class UserslistComponent implements OnInit {

  users: any[] = [];
  //delet model view
// deleteModalVisible = false;
// selectedUser: any = null;
  // Pagination
  currentPage = 1;
  pageSize = 3;

constructor(
  private userservice:UsersService,
  private messageService:MessageService,
  private router:Router,
  private deleteConfirmService: DeleteConfirmService
){

}


  ngOnInit(): void {
    this.loadUsers();    
  }

  // Simulate API
  loadUsers() {

 this.userservice.getUsers().subscribe({

  next:(res)=>{
        if(res.length>0){
        this.users=res;
        }
  },
  error:(err)=>{
debugger

  }


 });




    // this.users = [
    //   { id: 1, firstName: 'Akshay', lastName: 'Kumar', email: 'akshay@test.com', userType: 'Admin', isActive: true },
    //   { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@test.com', userType: 'User', isActive: false },
    //   { id: 3, firstName: 'Priya', lastName: 'Sharma', email: 'priya@test.com', userType: 'Manager', isActive: true },
    //   { id: 4, firstName: 'Michael', lastName: 'Brown', email: 'michael@test.com', userType: 'User', isActive: true },
    //   { id: 5, firstName: 'Sofia', lastName: 'Lopez', email: 'sofia@test.com', userType: 'Admin', isActive: false },
    //   { id: 6, firstName: 'Raj', lastName: 'Mehta', email: 'raj@test.com', userType: 'User', isActive: true },
    //   { id: 7, firstName: 'Emily', lastName: 'Clark', email: 'emily@test.com', userType: 'Manager', isActive: true },
    //   { id: 8, firstName: 'David', lastName: 'Wilson', email: 'david@test.com', userType: 'User', isActive: false },
    //   { id: 9, firstName: 'Lina', lastName: 'Wang', email: 'lina@test.com', userType: 'Admin', isActive: true },
    //   { id: 10, firstName: 'Carlos', lastName: 'Gomez', email: 'carlos@test.com', userType: 'User', isActive: true },
    // ];


  }

  // Pagination
  get totalPages(): number {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get pagedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }


  editUser(Id: any) {
    debugger
  this.router.navigate([`/settings/users/edit/${Id}`]);
}



// openDelete(user: any) {
//   debugger
//   this.selectedUser = user;
//   this.deleteModalVisible = true;
// }

// deleteUser() {
//   if (!this.selectedUser) return;

 
// }


async deleteUser(User: any) {
  const confirmed = await this.deleteConfirmService.confirm(` : ${User.name}`);
  if (confirmed) {
    // Call your API to delete
   // console.log('User deleted', User.id);


     this.userservice.deleteUser(User.id).subscribe({
    next: () => {
      this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'User deleted successfully' });
      this.loadUsers(); // reload list
       
    },
    error: (err) => {
       
      this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.message || 'Delete failed' });
    }
  });
  } else {
    console.log('Delete cancelled');
  }
}



}
