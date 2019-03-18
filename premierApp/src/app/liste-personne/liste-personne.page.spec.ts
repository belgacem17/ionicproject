import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePersonnePage } from './liste-personne.page';

describe('ListePersonnePage', () => {
  let component: ListePersonnePage;
  let fixture: ComponentFixture<ListePersonnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePersonnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePersonnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
