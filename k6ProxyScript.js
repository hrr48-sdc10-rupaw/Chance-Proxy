import http from 'k6/http';

export let options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 1,
            timeUnit: '1000s', // 1000 iterations per second, i.e. 1000 RPS
            duration: '300s',
            preAllocatedVUs: 100, // how large the initial pool of VUs would be
            maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
        }
    }
};

export default function () {
    // GET Request
    http.get('http://localhost:3000/moist-air/reviews/?gameId=1');
}