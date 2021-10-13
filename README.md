# REACT PHARMACY PROJECT

In this project, information is obtained from the API service where the pharmacies on duty are located, and it displays the list of guards by searching with the city and county information of that day. It contains information such as name, address, telephone. It is listed dynamically. Css and Bootstrap are used in the page design. After checking the value, an alert is sent in case of error.

## Languages and Technologies Used in this Project

| Language / Technology  | :mag_right:  | % |
| :------------ |:---------------:| -----:|
| React      | :arrow_right: | 90 |
| Typescript      | :arrow_right:       |   80 |
| Css | :arrow_right:        |    50 |
| Bootstrap | :arrow_right:        |    15 |


* Form elements are used. Operations are performed according to the onChange and onClick methods. UseStates are referenced in hook elements to dynamically store the entered value in a variable. The values taken from the input with onChange are taken dynamically with the set variable in the state. With the form submission process, the value in the state is taken and the listing process is performed.

* There are no number restrictions on the listed results. If the province and district information is not entered, a warning is given stating that it must be entered. If only the district information is included, a warning was given that the fields should be filled in the same way. If only the province information is included, no warning is given. The pharmacies on duty in all districts of the province are listed without applying the district filtering.

## Testing Step

- ### Prerequisites
1. Nodejs installed
2. Typescript npm module installed

- ### Running the app
1. In app directory , open cmd and type npm install (to install the dependencies defined in package.json file)
2. In app directory , open cmd and npm start and go to the browser and type localhost:3000 to run the application.

### Application Images

<p>
<a href="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane1.jpg" target="_blank">
<img src="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane1.jpg" width="300" style="max-width:100%;"></a>
  
<a href="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane2.jpg" target="_blank">
<img src="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane2.jpg" width="300" style="max-width:100%;"></a>
  
<a href="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane3.jpg" target="_blank">
<img src="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane3.jpg" width="300" style="max-width:100%;"></a>
  
 <a href="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane4.jpg" target="_blank">
<img src="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane4.jpg" width="300" style="max-width:100%;"></a>
  
 <a href="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane5.jpg" target="_blank">
<img src="https://github.com/gulsen28/React-Pharmacy-Project/blob/main/images/neczane5.jpg" width="300" style="max-width:100%;"></a>
</p>
