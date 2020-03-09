import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HebergementsPage } from './hebergements.page';

describe('HebergementsPage', () => {
  let component: HebergementsPage;
  let fixture: ComponentFixture<HebergementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HebergementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HebergementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
