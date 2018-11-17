import request from '../utils/request'
import { stringify } from 'qs';

export async function queryBreakfast(params) {
    return request(`/cms/breakfast`)
}

export async function queryTransfer(params) {
    return request(`/cms/transfer`)
}

export async function queryBus(params) {
    return request(`/cms/bus`)
}