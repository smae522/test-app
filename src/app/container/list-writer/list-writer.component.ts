import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common-service/common.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CreateWriterComponent } from '../create-writer/create-writer.component';
import { UpdateWriterComponent } from '../update-writer/update-writer.component';
import { DeleteWriterComponent } from '../delete-writer/delete-writer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-writer',
  templateUrl: './list-writer.component.html',
  styleUrls: ['./list-writer.component.css']
})
export class ListWriterComponent implements OnInit {
  currentWritersList = [];
  constructor(public commonService: CommonService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router) { }
    
  ngOnInit() {
    this.getWritersList()
  }

  getWritersList() {
    this.commonService.get()
      .subscribe(res => {
        this.currentWritersList = res;
        console.log(this.currentWritersList);
      })
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CreateWriterComponent, {
      width: '400px',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.snackBar.open("Created Successfully", 'Dismiss', { duration: 3000 });
        this.getWritersList()
      }
    });
  }

  openEditDialog(item) {
    const dialogRef = this.dialog.open(UpdateWriterComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.snackBar.open("Updated Successfully", 'Dismiss', { duration: 3000 });
        this.getWritersList()
      }
    });
  }

  openDeleteDialog(item) {
    const dialogRef = this.dialog.open(DeleteWriterComponent, {
      width: '400px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined) {
        this.snackBar.open("Deleted Successfully", 'Dismiss', { duration: 3000 });
        this.getWritersList()
      }
    });
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }
}
