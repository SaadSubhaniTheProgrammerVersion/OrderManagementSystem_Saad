import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
declare var M: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(public orderService: OrderService) { }

  ngOnInit() {
    //  this.resetForm();
     this.refreshOrderList();

  }
  refreshOrderList() {
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.orders = res as Order[];
    });
  }


  // resetForm(form?: NgForm) {
  //   if (form)
  //     form.reset();
  //   this.studentService.selectedStudent = {
  //     _id: "",
  //     name: "",
  //     cms: 0,
  //     email: "",
  //     phone: "",
  //     address: ""

  //   }
  // }
   // onSubmit(form: NgForm) {
  //   if (this.studentService.selectedStudent._id == "") {
  //     this.studentService.postStudent(form.value).subscribe((res) => {
  //       this.resetForm(form);;
  //       this.refreshStudentList();
  //       if(res==true){
  //       M.toast({ html: 'Saved successfully', classes: 'rounded'});
  //       }
  //       else{
  //         alert('CMS already exists');
  //       }
  //     });
     
 
  // }
  //   else {
  //     this.studentService.putStudent(form.value).subscribe((res) => {
  //       this.resetForm(form);
  //       this.refreshStudentList();
  //       M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //     });
  //   }

  editOrder()
  {
    alert("Editing");
  }
  deleteOrder(ord: Order) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.orderService.deleteOrder(ord).subscribe((res) => {
        this.refreshOrderList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
  displayObject(obj: any) {
    return JSON.stringify(obj);
  }

}
