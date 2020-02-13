import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StudyguideComponent } from "./studyguide.component";
import { ThemeService } from "../services/theme.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-theme",
  templateUrl: "../partial/theme.component.html",
  styleUrls: ["../css/theme.component.css"]
})
export class ThemeComponent implements OnInit {
  studyGuide: any;
  themes: any[] = [];
  theme: any;
  list: any;

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  themeDetails = this.formBuilder.group({
    themeName: ["", Validators.required],
    themeDescription: [, Validators.required],
    themeGoal: [, Validators.required]
  });

  createTheme() {
    var theme = this.themeDetails.value;
    this.themeService
      .insertData(theme, this.studyGuide.studyGuideId)
      .subscribe(data => {
        console.log(data);
        if (this.themes != null || this.themes.length > 0) {
          this.themes.push(data);
          StudyguideComponent.studyGuide.themes = this.themes;
        } else this.themes = data;
      });
      this.toastrService.success("Theme Created...!","Success");
  }

  ngOnInit() {
    this.studyGuide = StudyguideComponent.studyGuide;
    if (this.studyGuide.themes != null)
      this.themes = this.studyGuide.themes.filter(data => data.active != false);
    if (this.themes != null) {
      if (this.themes[0] != null)
        this.themeService
          .findTheme(this.themes[0].themeId, this.studyGuide)
          .subscribe(data => {
            this.updatedata(data);
          });
    }
  }

  reset() {
    this.themeDetails.reset();
  }
  onUnits(theme) {
    console.log(theme);
  }

  onClick(lists) {
    this.list = lists;
  }
  deleteTheme() {
    console.log(this.list);
    this.themeService
      .deleteTheme(this.studyGuide, this.list)
      .subscribe(data => {
        this.themes = this.themes.filter(
          list => list.themeId != this.list.themeId
        );
        StudyguideComponent.studyGuide.themes = this.themes;
        if (this.themes != null && this.themes.length > 1) {
          this.router.navigate([
            "studyGuide/" +
              this.studyGuide.studyGuideId +
              "/theme/" +
              this.themes.filter(list => list.themeId != this.list.themeId)[0]
                .themeId +
              "/unit"
          ]);
        } else {
          this.router.navigate([
            "studyGuide/" + this.studyGuide.studyGuideId + "/theme/"
          ]);
        }
      });
      this.toastrService.success("Theme Deleted...!","Success");
  }

  updatedata(data) {
    this.theme = data;
    this.router.navigate([
      "studyGuide/" +
        this.studyGuide.studyGuideId +
        "/theme/" +
        this.theme.themeId +
        "/unit"
    ]);
  }
}
