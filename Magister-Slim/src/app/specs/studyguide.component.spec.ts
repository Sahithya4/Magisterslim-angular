import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";

import { StudyguideComponent } from "../typescripts/studyguide.component";
import { StudyGuideService } from "../services/study-guide.service";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { OfferingService } from "../services/offering.service";
import { AssignmentService } from "../services/assignment.service";
import { OfferinglevelService } from "../services/offeringlevel.service";
import { ToastrModule } from "ngx-toastr";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CourseComponent } from "../typescripts/course.component";
import { UnitComponent } from "../typescripts/unit.component";
import { Observable, of } from "rxjs";
import { ViewCompileResult } from "@angular/compiler/src/view_compiler/view_compiler";

fdescribe("StudyguideComponent", () => {
  let component: StudyguideComponent;
  let fixture: ComponentFixture<StudyguideComponent>;
  let fakeservice = {
    viewStudyGuide(): Observable<any> {
      let viewLists = [
        {
          studyGuideId: "24",
          studyGuideName: "sg1",
          offeringReference: {
            offeringName: "of"
          },
          offeringLevelReference: {
            offeringLevelName: "ol"
          },
          courseReference: {
            courseName: "English"
          },
          validOnwards: "06-04-2020",
          validUpto: "06-05-2020"
        }
      ];
      return of(viewLists);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudyguideComponent, CourseComponent, UnitComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        {
          provide: CookieService,
          OfferingService,
          OfferinglevelService,
          AssignmentService
        },
        { provide: StudyGuideService, useValue: fakeservice }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should have deleteStudyGuide", () => {
    expect(component.deleteStudyGuide).toBeTruthy();
  });
  describe("component to deleteStudyGuide",()=>{
    let service:StudyGuideService;
    beforeEach(inject([StudyGuideService],()=>{
      (serviceInjector: StudyGuideService) =>{
        service=serviceInjector;
        component.list=component.viewLists[0];
     }
  }));
  it("should have which studyguide to delete", () => {
    let spyObj = spyOn(component, "onClick");
    let button = document.getElementById("deleteSG");
    console.log(button);
    button.click();
    console.log(component.viewLists[0]);
    let spyObj2 = spyOn(component, "deleteStudyGuide");
    let button2 = document.getElementById("delete");
    button2.click();
    console.log(button2);
    //spyOn(service,"deleteStudyGuide")
    //service.deleteStudyGuide({studyGuideId:'24'})
    fixture.whenStable().then(() => {
      expect(spyObj).toHaveBeenCalled();
      expect(spyObj2).toHaveBeenCalled();
        //studyGuideId:'24'
      // });
      spyOn<any>(service,'deleteStudyGuide').and.returnValue(of(
        {
          studyGuideName:'sg1'
        }
      ));
      component.viewLists=[];
      console.log(component.viewLists);
    });
  });
  // it("call service with values",()=>{
  //   let spyObj2 = spyOn(service, "deleteStudyGuide");
  //   component.list=component.viewLists[0];
  //   component.deleteStudyGuide();
  //   //spyOn<any>(service,'deleteStudyGuide')
  //   component.viewLists=[];
  //   expect(spyObj2).toHaveBeenCalledWith({
  //     studyGuideId:'24'
  //   }) 
  // })
  it("should be deleted", () => {
    expect(component.viewLists).not.toContain({ studyGuideId: "24" });
  });
});
});
