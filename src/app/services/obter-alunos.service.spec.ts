import { TestBed } from '@angular/core/testing';

import { ObterAlunosService } from './obter-alunos.service';

describe('ObterAlunosService', () => {
  let service: ObterAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObterAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
