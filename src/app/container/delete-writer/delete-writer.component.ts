import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CommonService } from '../common-service/common.service';

@Component({
  selector: 'app-delete-writer',
  templateUrl: './delete-writer.component.html',
  styleUrls: ['./delete-writer.component.css']
})
export class DeleteWriterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteWriterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public commonService: CommonService,
    public snackBar: MatSnackBar) {
    console.log(data)
  }

  onNoClick(data?): void {
    this.dialogRef.close(data);
  }

  deletePost() {
    this.commonService.delete(this.data.id)
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

  ngOnInit() {
  }

}
