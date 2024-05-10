import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMotocicletasComponent } from './tabla-motocicletas.component';

describe('TablaMotocicletasComponent', () => {
  let component: TablaMotocicletasComponent;
  let fixture: ComponentFixture<TablaMotocicletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaMotocicletasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaMotocicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
