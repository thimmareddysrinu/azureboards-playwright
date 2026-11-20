// export const options = {
//   vus: 3,           // Only 3 virtual users
//   duration: '30s',  // Run for 30 seconds
//   thresholds: {
//     http_req_duration: ['p(95)<500'],
//     http_req_failed: ['rate==0'], // Zero errors allowed
//   },
// };
// export const options = {
//   stages: [
//     { duration: '1m', target: 20 }, // Ramp up to 20 normal users
//     { duration: '3m', target: 20 }, // Hold steady at 20 users
//     { duration: '1m', target: 0 },  // Ramp down to 0
//   ],
//   thresholds: {
//     http_req_duration: ['p(95)<800'],
//     http_req_failed: ['rate<0.01'],
//   },
// };
// export const options = {
//   stages: [
//     { duration: '1m', target: 20 },  // Below normal load
//     { duration: '2m', target: 50 },  // Normal load
//     { duration: '2m', target: 100 }, // Breaking point zone
//     { duration: '2m', target: 150 }, // Beyond breaking point
//     { duration: '1m', target: 0 },   // Recovery stage
//   ],
// };
// export const options = {
//   stages: [
//     { duration: '10s', target: 5 },   // Normal baseline
//     { duration: '10s', target: 150 }, // Sudden massive spike!
//     { duration: '30s', target: 150 }, // Hold peak surge
//     { duration: '10s', target: 5 },   // Sudden drop back to normal
//     { duration: '20s', target: 5 },   // Verify system recovers
//   ],
// };
// export const options = {
//   stages: [
//     { duration: '2m', target: 25 },  // Ramp up
//     { duration: '2h', target: 25 },  // Sustain load for 2 hours
//     { duration: '2m', target: 0 },   // Ramp down
//   ],
//   thresholds: {
//     http_req_duration: ['p(95)<1000'],
//     http_req_failed: ['rate<0.01'],
//   },
// };
// const scenarios = {
//   smoke: { vus: 3, duration: '30s' },
//   load: {
//     stages: [
//       { duration: '30s', target: 15 },
//       { duration: '1m', target: 15 },
//       { duration: '30s', target: 0 },
//     ],
//   },
//   spike: {
//     stages: [
//       { duration: '10s', target: 5 },
//       { duration: '10s', target: 80 },
//       { duration: '20s', target: 80 },
//       { duration: '10s', target: 0 },
//     ],
//   },
// };

// export const options = scenarios[__ENV.TEST_TYPE || 'smoke'];



// k6 run -e TEST_TYPE=smoke tests\API\login.ts
// k6 run -e TEST_TYPE=load tests\API\login.ts
// k6 run -e TEST_TYPE=spike tests\API\login.ts
