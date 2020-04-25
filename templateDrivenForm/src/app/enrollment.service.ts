import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EnrollmentService {
  constructor(private _http: HttpClient) {}
}
