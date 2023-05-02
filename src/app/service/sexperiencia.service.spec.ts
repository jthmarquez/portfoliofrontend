import { TestBed } from '@angular/core/testing';

import { SexperienciaService } from './sexperiencia.service';

describe('SexperienciaService', () => {
  let service: SexperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SexperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
