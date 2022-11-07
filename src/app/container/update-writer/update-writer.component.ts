import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../common-service/common.service';
import { IWriter } from '../model/writer/writer.model';

@Component({
  selector: 'app-update-writer',
  templateUrl: './update-writer.component.html',
  styleUrls: ['./update-writer.component.css']
})

export class UpdateWriterComponent implements OnInit {
  updatePostForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UpdateWriterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public commonService: CommonService,
    public snackBar: MatSnackBar) {
    console.log(data)
    this.loadForm();
  }
  loadForm() {
    this.updatePostForm = this.fb.group({
      name: [this.data.name, [Validators.required, Validators.maxLength(20)]],
      email: [this.data.email, [Validators.required, Validators.maxLength(20)]],
      created_at: [this.data.created_at, Validators.required],
      updated_at: [this.data.updated_at, Validators.required]
    })
  }
  updatePost(data : IWriter) {
    let item : IWriter = {
      id : data.id,
      name : data.name,
      email : data.email,
      created_at : data.created_at,
      updated_at : data.updated_at
    }
    console.log(item);
    this.commonService.put(this.data.id, item)
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

  get f() { return this.updatePostForm.controls; }

  ngOnInit() {
  }

}
