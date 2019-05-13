import { Component, OnInit, NgModule } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule  } from '@angular/forms';

@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent implements OnInit {
  public loginForm: FormGroup;
  public previousLeads: any = [];
  constructor( private adminService: AdminServiceService,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.displayPreviousLead();
}
  displayPreviousLead() {
    this.adminService.displayLead()
    .subscribe(result => {
      // tslint:disable-next-line:no-string-literal
      if (result['status'] === 'success') {
        // tslint:disable-next-line:no-string-literal
        this.previousLeads = result['response'];
        console.log(this.previousLeads);
      }
    });

  }

   deleteUser(id) {
    this.adminService.delete(id)
    .subscribe(result => {
      if ( result['status'] === 'success') {
        this.displayPreviousLead();
      }
    });

  }


  submitCustomerForm() {
    this.adminService.storedata(this.loginForm.value)
    .subscribe(result => {
      // tslint:disable-next-line:no-string-literal
      if (result['status'] === 'success') {
        // tslint:disable-next-line:no-string-literal
        this.previousLeads = result['response'];
        this.displayPreviousLead();
      }
    });
  }

  edit(item) {
    console.log(item);
    this.loginForm.patchValue(item);
  }
}
