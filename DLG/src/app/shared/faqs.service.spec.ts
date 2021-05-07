import { TestBed } from '@angular/core/testing';

import { FaqsService } from './faqs.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpParams} from '@angular/common/http';

describe('FaqsService', () => {
  let service: FaqsService;
  let httpMock: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [

      ],
      providers:[
       FaqsService
      ]
    });
    service = TestBed.inject(FaqsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be able to get data from api', ()=> {
    service.getFaqs().subscribe(faqs => {
      expect(faqs.length).toBe(5);
    })
  });

  
  
});
