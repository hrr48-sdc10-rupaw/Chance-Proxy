import http from 'k6/http';

export let options = {
    scenarios: {
        constant_request_rate: {
            executor: 'constant-arrival-rate',
            rate: 100,
            timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
            duration: '60s',
            preAllocatedVUs: 100, // how large the initial pool of VUs would be
            maxVUs: 1000, // if the preAllocatedVUs are not enough, we can initialize more
        }
    }
};

export default function () {
    // GET Request
    http.get('http://localhost:3000/moist-air/reviews/?gameId=1');
}