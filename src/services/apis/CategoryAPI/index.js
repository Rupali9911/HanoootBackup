import { CATEGORY_LIST } from "../../../utility/apiUrls";
import sendRequest from "../../axios/AxiosApiRequest";

export const categoryList = (pageNumber, limit) => {
    return new Promise((resolve, _reject) => {
        sendRequest({
            url: CATEGORY_LIST,
            method: 'GET',
            params: {
                pageNumber: pageNumber,
                limit: limit
            }
        })
            .then((response) => {
        //         response =
        // {
        //   "success": true,
        //   "data": {
        //     "categories": [
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       },
        //       {
        //         "id": 1,
        //         "name": "apple",
        //         "slug": "apple",
        //         "parent_id": null,
        //         "brand_id": 1,
        //         "thumbnail_image": "",
        //         "description": null,
        //         "is_home": true,
        //         "createdAt": "2023-07-14T10:19:40.502Z",
        //         "updatedAt": "2023-07-14T11:05:53.287Z",
        //         "children": [
        //           {
        //             "id": 2,
        //             "name": "laptop",
        //             "slug": "laptop",
        //             "parent_id": 1,
        //             "brand_id": 1,
        //             "thumbnail_image": "",
        //             "description": null,
        //             "is_home": false,
        //             "createdAt": "2023-07-14T11:12:34.892Z",
        //             "updatedAt": "2023-07-14T11:12:34.893Z",
        //             "children": [
        //               {
        //                 "id": 4,
        //                 "name": "Andorid",
        //                 "slug": "android",
        //                 "parent_id": 2,
        //                 "brand_id": null,
        //                 "thumbnail_image": "https://hanoot-bucket-dev.s3.me-central-1.amazonaws.com/category/1689746663050-2340965.jpg",
        //                 "description": "android phone we have best ever",
        //                 "is_home": false,
        //                 "createdAt": "2023-07-19T06:04:24.000Z",
        //                 "updatedAt": "2023-07-19T06:04:24.000Z"
        //               }
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   "message": "categories added successfully"
       
        // };
                console.log('Response from CATEGORY_LIST api', response)
                resolve(response)
            })
            .catch(error => {
                console.log('Error from CATEGORY_LIST api', error)
                _reject(error)
            })
    })

};