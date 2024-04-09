
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';


@Component({
  selector: 'app-employee-ragistration',
  templateUrl: './employee-ragistration.component.html',
  styleUrls: ['./employee-ragistration.component.css']
})
export class EmployeeRagistrationComponent implements OnInit {

  employeeForm!: FormGroup;
  submitted: boolean = false
  isLoading = false;  
  totalData: number = 2;
  employeeData:any[]= [{id:1, name:"vikas", fatherName:"raj kumar sharma", email:"vikas@gmail.com", mobile:"7548965814", department:"IT"},
    {id:2, name: "rohit", fatherName:"vijay", email:"rohit@gmail.com", mobile:"7415892563", department:"HR"}
  ]
 
  dataSource = new MatTableDataSource<any[]>();
   @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;
   pageSizes = [5, 10, 20];
   displayedColumns: string[] = [
    'name',
    'fatherName',
    'email',
    'mobile',
    'department',
    'action',
  ];
 
  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) { }

  ngOnInit(): void { 
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [ Validators.required,Validators.minLength(8), Validators.maxLength(15)]],
      department: ['', Validators.required],
      fatherName: ['', [Validators.required]]
    });
    let savedData:any = localStorage.getItem('employeeData');
   
    let savedArray = JSON.parse(savedData);

    debugger
    this.dataSource = new MatTableDataSource(savedArray);
  }


  get f() { return this.employeeForm.controls; }
  onSubmit() {
    this.submitted = true
    let formid = 0

    if (this.employeeForm.valid) {
     const value = this.employeeForm.value
      this.dataSource['data'].forEach((el:any) => {
        if(el['id'] > formid){
          formid = el['id']
        }
      })
      let employeeForm:any = {
        id:formid + 1, name:value.name, fatherName: value.fatherName, mobile:value.mobile, email:value.email, department:value.department
      }
      let data = this.dataSource['data']
      data.push(employeeForm)
      console.log(this.dataSource.data);
      let jsonData = JSON.stringify(data);
      localStorage.setItem('employeeData', jsonData);
      this.dataSource = new MatTableDataSource(data);
      this.employeeForm.reset();
      this.submitted = false
    }
  }
  delete(event:number){
    console.log(event);
    let data = this.dataSource['data']
    let index = data.findIndex((obj:any) => obj.id === event);
    if(index !== -1){
      data.splice(index,1)
    }
    let jsonData = JSON.stringify(data);
    localStorage.setItem('employeeData', jsonData);
    this.dataSource = new MatTableDataSource(data);
  }
  edit(element: any){
    let data = this.dataSource['data']
    let index = data.findIndex((obj:any) => obj.id === element.id);
    if(index !== -1){
      data.splice(index,1)
    }
    this.dataSource = new MatTableDataSource(data);
    let jsonData = JSON.stringify(data);
    localStorage.setItem('employeeData', jsonData);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
   this.employeeForm.patchValue({
    name: element.name,
    fatherName: element.fatherName,
    email: element.email,
    mobile: element.mobile,
    department: element.department,
   })
    
  }
  applyFilter(filterValue: any) {
    let value = filterValue.value
    filterValue = value.trim(); // Remove whitespace
    filterValue = value.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
  
}


