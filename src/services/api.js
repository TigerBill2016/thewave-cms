import request from '../utils/request'
import { stringify } from 'qs';

export async function queryBreakfast(params) {
    return request(`/cms/breakfast`)
}