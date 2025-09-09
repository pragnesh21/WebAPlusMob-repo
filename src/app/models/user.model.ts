export interface CreateUserDto {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  empNo: string;
  dob: string;
  address: string;
  phoneNumber: string;
  roleName: string;
  password: string;
  branchIds: string[];
  isActive: boolean;
  userType: string;
}

export interface UpdateUserDto extends Omit<CreateUserDto, 'password'> {
  id: string;
}
