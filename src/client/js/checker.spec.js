import {postData} from './nameChecker';
import request from 'supertest';
import '@babel/polyfill';
import { response } from 'express';

test('test checker', async () => {
    const inputsentance = { inputdata:"I like the new football" };
    await expect(postData('http://localhost:8080/add',{ inputdata:"I like the new football" })).not.toBe({});
});

