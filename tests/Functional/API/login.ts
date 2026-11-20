// import {test,expect} from '@playwright/test'
// import {check,sleep} from 'k6'
// import http from "k6/http"
// export const options = {
//   stages: [
//     { duration: '10s', target: 10 }, // Ramp up to 10 virtual users
//     { duration: '20s', target: 10 }, // Stay at 10 users for 20 seconds
//     { duration: '10s', target: 0 },  // Ramp down to 0 users
//   ],
//   thresholds: {
//     http_req_duration: ['p(95)<500'], // 95% of requests must finish under 500ms
//     http_req_failed: ['rate<0.01'],   // Less than 1% error rate
//   },
// };


    // test("Login with Post request",async({request,page})=>{
    //     const response=await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
    //         data:{
    //         userEmail:"srinuvasreddy123@gmail.com",
    //        userPassword: "Srinu452@"
    //     }})
    //     const responsebody=await response.json()
       

    //     await expect(response.ok()).toBeTruthy()

    //     const token=responsebody.token
    //     const storagefilepath=test.info().outputPath("storage.json")
    //     await request.storageState({path:storagefilepath})
    //     await page.addInitScript(value=>{
    //         window.localStorage.setItem("token",value)
    //     },token)
    //     await test.step("home page",async()=>{
    //         await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    //         await expect(page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash")).toBeTruthy()

    //     })
    // })
// export default function(){
//      const url="https://rahulshettyacademy.com/api/ecom/auth/login"
//         const payload=JSON.stringify({
//             userEmail:"srinuvasreddy123@gmail.com",
//             userPassword:"Srinu452@"
//         })
//         const params={
//             headers:{
//                 "Content-Type":"application/json",
//             }
//         }
//         const res=http.post(url,payload,params)
//         check(res, {
//     'status is 200': (r) => r.status === 200,
//     'token is present': (r) => r.json('token') !== undefined && r.json('token') !== '',
// });
// sleep(1)



// }




// import http from 'k6/http';
// import { check, sleep } from 'k6';
// // 1. Import the HTML report generator
// import { htmlReport } from 'https://githubusercontent.com';
// import { textSummary } from 'https://k6.io';

// export const options = {
//   stages: [
//     { duration: '10s', target: 10 },
//     { duration: '20s', target: 10 },
//     { duration: '10s', target: 0 },
//   ],
//   thresholds: {
//     http_req_duration: ['p(95)<500'],
//     http_req_failed: ['rate<0.01'],
//   },
// };

// export default function () {
//   const url = 'https://rahulshettyacademy.com';
//   const payload = JSON.stringify({
//     userEmail: __ENV.USER_EMAIL || 'srinuvasreddy123@gmail.com',
//     userPassword: __ENV.USER_PASSWORD || 'Srinu452@',
//   });
//   const params = {
//     headers: { 'Content-Type': 'application/json' },
//   };

//   const res = http.post(url, payload, params);

//   check(res, {
//     'status is 200': (r) => r.status === 200,
//     'token is present': (r) => r.json('token') !== undefined && r.json('token') !== '',
//   });

//   sleep(1);
// }

// // 2. Generate the HTML report file AND keep the terminal output
// export function handleSummary(data) {
//   return {
//     'k6-report.html': htmlReport(data),
//     stdout: textSummary(data, { indent: ' ', enableColors: true }),
//   };
// }

