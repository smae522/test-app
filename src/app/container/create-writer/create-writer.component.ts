import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common-service/common.service';
import { IWriter } from '../model/writer/writer.model';

@Component({
  selector: 'app-create-writer',
  templateUrl: './create-writer.component.html',
  styleUrls: ['./create-writer.component.css']
})

export class CreateWriterComponent implements OnInit {
  createWriterForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateWriterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public commonService: CommonService,
    public snackBar: MatSnackBar) {
    this.loadForm();
  }
  loadForm() {
    this.createWriterForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(30)]],
      created_at: ['', Validators.required],
      updated_at: ['', Validators.required]
    })
  }

  createWriter(data : IWriter) {
    let item : IWriter = {
      id : data.id,
      name : data.name,
      email : data.email,
      created_at : data.created_at,
      updated_at : data.updated_at
    }
    console.log(item);
    this.commonService.post(item)
      .subscribe(res => this.successResponse(res),
        err => this.errorhandle(err)
      )
  }

  successResponse(data) {
    this.onNoClick(data)
  }

  errorhandle(error) {
    console.log(error.error.message)
    this.snackBar.open(error.error.message, 'Dismiss', { duration: 3000 });
  }

  onNoClick(data?): void {
    this.dialogRef.close(data);
  }

  onlyAlphanumeric(event: any) {
    const pattern = /[a-zA-Z0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  get f() { return this.createWriterForm.controls; }

  ngOnInit() {
  }

}
