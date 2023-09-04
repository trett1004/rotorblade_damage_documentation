# Digital Rotorblade Damage Documentation
Application that helps automate manual processes during the documentation of damages at rotorblades of windpower plants.

## Background
For the documentation of the damage repair of rotor blades usually photos are taken by the technician including a handwritten log, that needs to be part of the photo (please see also picture below). Afterwards the technician sends all pictures to the administrative staff, who are creating the damage report. The administrative staff will manually include the pictures in a damage report (usually in a text file). This means a big workload for the administrative staff manually sorting the photos and making redundant work by manually copying all the data from the pictures.

This project is an approach to digitize the process of the handwritten log with the goal of avoiding redundant work.
In this approach the technician will use mobile device (e.g. cellphone, tablet) to fill out an inputform and take a picture. The picture and the inputform will be saved unseperable to a json file. In the end of the working day, the technician has the option to create a documement with all the damages, and send this document to the administrative staff.

This will save an substantial amount of time for creating the reports for the administrative staff.

<img src="https://github.com/trett1004/rotorblade_damage_documentation/blob/main/README_pictures/picture_of_damage_card.jpg?raw=true" alt="alt text" width="300" height="400">
Picture 1: Example of the conventianal documentation of a damage

## Instructions for using the software:
### Information before starting:
- Install Node Modules

### Usage
1. Allow camera access in the browser, then
2. Fill out the fields in the form
3. Click the "Capture Photo" button (a photo will be saved)
4. Click the "Save Damage" button
5. Repeat steps 2, 3 and 4 as often as needed (see also picture below)
6. In the navbar, click on "Create Report." In the background, a report will be saved.
7. Open the report (report.docx) in the path rotorblade_documentation/server/report.docx.

<img src="https://github.com/trett1004/rotorblade_damage_documentation/blob/main/README_pictures/workflow_digital_damage_card.jpg?raw=true" alt="Workflow" width="300" height="600">

Picture 2: Workflow of the digital damage card

