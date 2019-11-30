import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private service:ProductService) { }

  ngOnInit() { console.log("inside ngoninit1")
    var objres=this.service.getProducts()
    console.log(objres);
    objres.subscribe(response=>{
    
      console.log("inside ngoninit2")
     // this.product=response;
      if(response['status']==='success')
      {
          this.product=response['data']
          
          console.log(this.product)
      }
      else{
        console.log('error', response['error'])
      }
    })
  }

}
