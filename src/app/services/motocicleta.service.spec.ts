import { TestBed } from '@angular/core/testing';

import { MotocicletaService } from './motocicleta.service';

describe('MotocicletaService', () => {
  let service: MotocicletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotocicletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
