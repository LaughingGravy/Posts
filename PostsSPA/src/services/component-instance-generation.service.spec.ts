/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentInstanceGenerationService } from './component-instance-generation.service';

describe('Service: ComponentInstanceGeneration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentInstanceGenerationService]
    });
  });

  it('should ...', inject([ComponentInstanceGenerationService], (service: ComponentInstanceGenerationService) => {
    expect(service).toBeTruthy();
  }));
});
