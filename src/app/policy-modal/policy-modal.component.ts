import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WorkshopDto } from '../science-workshops/workshop-dto';

@Component({
  selector: 'app-policy-modal',
  templateUrl: './policy-modal.component.html',
  styleUrls: ['./policy-modal.component.css']
})
export class PolicyModalComponent implements OnInit {

  @Input() workshops = new Array<WorkshopDto>();

  constructor( public dialogRef: MatDialogRef<PolicyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  closeModal(): void {
    this.dialogRef.close();
  }
}
