import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})
export class HomeComponent  {  
  @ViewChild("createTest", { read: ViewContainerRef }) childContainer:any;
  componentRef: ComponentRef<ChildComponent>;

  constructor(private resolver: ComponentFactoryResolver){}
  dataSet = {
                "Email": "vvangogh@gmail.com",
                "FirstName": "Vincent",
                "LastName": "van",
                "MiddleName": "Gogh",
                "Mobile": "86944965"
            };
 
   testSearch(){
      
        this.createComponent(this.dataSet); 
        return false;
   }

  createComponent(item:any){
      this.childContainer.clear()
      let factory  = this.resolver.resolveComponentFactory(ChildComponent)
      
      this.componentRef = this.childContainer.createComponent(factory);
      this.componentRef.instance.item = item;
  }

  ngOnDestroy() {
    this.componentRef.destroy();    
  }
  
}
