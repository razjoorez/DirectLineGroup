import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Faqs} from '../model/faqs';
import { FaqsService } from '../shared/faqs.service';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor(private faqsService: FaqsService) { }
  $faqs:Observable<Faqs[]>;
   status: boolean = false;
  

  ngOnInit(): void {
    let faqs: Faqs; 
    this.$faqs = this.faqsService.getFaqs();
  }

  toggleDiv() {
    //checking the expanded area after button click to change css 
    var hd1 = document.getElementById('headingOne');
    var bt1 = hd1.children[0].children[0];
    var abt1 = bt1.getAttribute('aria-expanded');
    if(abt1=='true') {
      hd1.classList.add('opened');
      hd1.classList.remove('closed')
    //  alert('1 true')
      
    }
    if(abt1=='false') {
      hd1.classList.remove('opened');
      hd1.classList.add('closed')
      //alert('1 false')
    }
    
    var hd2 = document.getElementById('headingTwo');
    var bt2 = hd2.children[0].children[0];
    var abt2 = bt2.getAttribute('aria-expanded');
    if(abt2=='true') {
      hd2.classList.add('opened');
      hd2.classList.remove('closed')
    }
    if(abt2=='false') {
      hd2.classList.remove('opened');
      hd2.classList.add('closed')
    }

    var hd3 = document.getElementById('headingThree');
    var bt3 = hd3.children[0].children[0];
    var abt3 = bt3.getAttribute('aria-expanded');
    if(abt3=='true') {
      hd3.classList.add('opened');
      hd3.classList.remove('closed')
    }
    if(abt3=='false') {
      hd3.classList.remove('opened');
      hd3.classList.add('closed');
    }

    var hd4 = document.getElementById('headingFour');
    var bt4 = hd4.children[0].children[0];
    var abt4 = bt4.getAttribute('aria-expanded');
    if(abt4=='true') {
      hd4.classList.add('opened');
      hd4.classList.remove('closed');
    }
    if(abt4=='false') {
      hd4.classList.remove('opened');
      hd4.classList.add('closed');
    }
  
    var hd5 = document.getElementById('headingFive');
   var bt5 = hd5.children[0].children[0];
   var abt5 = bt5.getAttribute('aria-expanded');
   if(abt5=='true') {
     hd5.classList.add('opened');
     hd5.classList.remove('closed');
   }
   if(abt5=='false') {
    hd5.classList.remove('opened');
    hd5.classList.add('closed');
   }

  }


  togClass(id1) {
    
    //adding and removing css classes for the svg transition in the clicked section
    var el = document.getElementById(id1);
   
   var bn = el.classList.contains('closed');
    if(bn) {
      el.classList.remove('closed');
      el.classList.add('collapsed');
    }
   
    
    if(!bn){
      el.classList.remove('collapsed');
      el.classList.add('closed'); 
    }
   setTimeout(()=> {
    this.toggleDiv()
   } , 100); this.toggleDiv();
}

  }


