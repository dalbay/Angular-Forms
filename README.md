# Angular-Forms

**Angular Forms – Concepts:**

     Component Template: contains the HTML to collect the user data
     Component Class: handles data binding
     Service: sends the collected data to the Server

![ANGULAR Forms](./images/angular-forms.png)

To achieve this Angular provides two approaches:

1. _Template Driven Forms_  
   – Heavy on the component template  
   – Easy to use and like Angular JS forms
   – Two-way data binding with ngModel  
   – Bulky HTML and minimal code  
   – Automatically tracks the form and form elements state validity  
   – Unit testing is a challenge  
   – Readability decreases with complex forms and validations  
   – Suitable for simple scenarios

2. _Reactive Forms_
   - Heavy on the component class
   - Suitable or unit testing

## Template Driven Forms (TDF)

- Generate a new Project using the Angular CLI  
  <br/>
  • > ng -v : gives you the installed Angular CLI installed on the machine  
  • > npm install -g @angular/cli@latest : installs the latest Angular CLI version  
  • Generate the project -> Create a Folder navigate inside this folder and run command: >ng new ‘project name’  
  • Navigate inside this folder and run command: > ng serve -o  
   You will see the project up and running  
  • Add Bootstrap styling to the project: getbootstrap.com > Introduction > copy CSS.  
  Go back to VS Code open index.html and add the reference at the end of the head tag.
  Check if it works: Go to app.component.html file, delete all html and add a Bootstrap button with the class btn btn-outline-primary; this should display the bootstrap button.  
  <br/>

- Adding the Form  
  Add the following HTML in the Angular Template  
  • Add div tag of class container fluid `<div class="container-fluid"></div>`  
  • For the topics select create the array in app.component.ts  
  Create a new property (you can delete the default generated title property) - `topics = ['Angular', 'React', 'Vue'];`  
  • Bind the array to a select dropdown in the HTML  
  • To iterrate through the list of topics use the ngForm directive and display the list.  
  • Add a radiobutton group to select the time slot

```HTML
<div class="container-fluid">
  <h1>Form Header</h1>
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" />
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input type="tel" class="form-control" />
    </div>
    <div class="form-group">
      <select class="custom-select">
        <option selected>I am interested in</option>
        <option *ngFor="let topic of topics">{{ topic }}</option>
      </select>
    </div>
    <!--Radio Button-->
    <div class="mb-3">
      <label>Time Preferene</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="timePreference"
          value="morning"
        />
        <label class="form-check-label">Morning (9AM - 12PM)</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="timePreference"
          value="evening"
        />
        <label class="form-check-label">Evening (5PM - 8PM)</label>
      </div>
    </div>
    <!--Check Box Control-->
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" />
      <label class="form-check-label">Send me promotional offers</label>
    </div>
    <!--Submit Button-->
    <button class="btn btn-outline-primary" type="submit">Submit Form</button>
  </form>
</div>
```
