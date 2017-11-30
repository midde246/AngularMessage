import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver/* , ComponentFactory */, ComponentRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
})
export class HomeComponent  {  
  @ViewChild("createTest", { read: ViewContainerRef }) childContainer:any;
  componentRef: ComponentRef<ChildComponent>;

  constructor(private resolver: ComponentFactoryResolver){}
 
   testSearch(seachItem:any){
      console.log(seachItem)
      if(seachItem == "midde"){
        alert("Search matched");
        this.createComponent(seachItem);
      }
      else{
        alert("Sorry request not found");
      }
   }



  createComponent(item:any){
      this.childContainer.clear()
      let factory  = this.resolver.resolveComponentFactory(ChildComponent)
      
      this.componentRef = this.childContainer.createComponent(factory);
      this.componentRef.instance.item = item;
      //this.componentRef.instance.output.subscribe(event => console.log(event)); 
  }

  ngOnDestroy() {
    this.componentRef.destroy();    
  }
  
}
