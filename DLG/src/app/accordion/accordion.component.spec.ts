import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FaqsService } from '../shared/faqs.service';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  //let fixture: ComponentFixture<AccordionComponent>;
  let mockFaqsService;
  let faqs;
  
  beforeEach(() => {
    faqs = [
      {
        "id": "1",
        "question": "What vehicles are covered?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers:[
        FaqsService
      ]
    })
    .compileComponents();
  });

  mockFaqsService = jasmine.createSpyObj(['getFaqs']);
  component = new AccordionComponent(mockFaqsService)
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should get all faqs form faqs array', ()=> {
    mockFaqsService.getFaqs.and.returnValue(of(true));
    
    expect(mockFaqsService.getFaqs).toHaveBeenCalled();
    
  });
  
});
