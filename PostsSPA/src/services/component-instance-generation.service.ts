import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AnchoredItem } from 'src/services/models/anchored-item';
import { AnchorComponent } from 'src/services/interfaces/anchored-component';

@Injectable({
  providedIn: 'root'
})
export class ComponentInstanceGenerationService<T> {

  loadComponents(anchorHost: ViewContainerRef, anchorItems: AnchoredItem[]): T[] {
    let componentInstances: any[] = [];

    if (anchorItems && anchorItems.some(item => { return true;})) {
      anchorItems.forEach(item => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

        const componentRef = anchorHost.createComponent(componentFactory);
        (<AnchorComponent>componentRef.instance).data = item.data;
        componentInstances.push(componentRef.instance);
      });
    }

    return componentInstances;
  }

  loadComponent(anchorHost: ViewContainerRef, anchorItem: AnchoredItem): T {
    const viewContainerRef = anchorHost;

    if (anchorItem) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(anchorItem.component);

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<AnchorComponent>componentRef.instance).data = anchorItem.data;

        return componentRef.instance;
    };
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

}

