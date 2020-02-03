import request from 'supertest';
import '@babel/polyfill';
import {app} from './index';
import { response } from 'express';

describe('post', function() {
    it('test data', function(done) {
        const inputsentance = { inputdata:"I like the new football" };
        console.log(inputsentance);
        request(app).post('/add').send(inputsentance)
        .expect('Content-Type', /json/);
        done();
    });
});

