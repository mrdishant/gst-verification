const axios = require('axios');
const api_url = "https://appyflow.in/api/";
const endpoints = {
    "verifyGST": "verifyGST",
    "hsn_code_details": "hsn_code_details",
    "filing-details": "GST/filing-details",
    "filing-frequecy": "GST/filing-frequency",
}
/**
* Creates a new GSTAPI instance
* @param {String} key_secret Appyflow key_secret - To Register: (https://dashboard.gstapi.appyflow.in/#/auth/register) - GST API : (https://gstapi.appyflow.in/)
*/
module.exports = function (key_secret) {

    if (key_secret == null || key_secret == "") {
        throw new Error("Appyflow Key Secret not provided.");
    }

    /**
     * Verify GST will get you the GST Details from GSTN DB
     *
     * @param {String} gstNo 15 digit GST Number
     */
    this.verifyGST = function (gstNo) {

        if (gstNo == null || gstNo == "") {
            throw new Error("gstNo not provided.");
        }

        const url = api_url + endpoints['verifyGST'];


        const data = {
            gstNo: gstNo,
        };

        return makeHTTPRequest(url, data);




    }

    /**
     * Get the details of a HSN Code
     *
     * @param {String} hsn_code HSN/SAC code
     */
    this.hsn_code_details = function (hsn_code) {

        if (hsn_code == null || hsn_code == "") {
            throw new Error("hsn_code not provided.");
        }

        const url = api_url + endpoints['hsn_code_details'];

        const data = {
            hsn_code: hsn_code,
        };

        return makeHTTPRequest(url, data);



    }


    /**
     * Get all the filing of a GST Number in a financial year
     *
     * @param {String} gstNo 15 digits GST Number
     * * @param {String} year Financial year (ex: 2020-21)
     */
    this.filing_details = function (gstNo, year) {

        if (gstNo == null || gstNo == "") {
            throw new Error("gstNo not provided.");
        }

        if (year == null || year == "") {
            throw new Error("Financial year not provided. ex: 2020-21");
        }

        const url = api_url + endpoints['filing-details'];

        const data = {

            gstNo: gstNo,
            year: year
        };

        return makeHTTPRequest(url, data);

    }


    /**
     * Get the filing frequency chosen for a GST Number in a financial year
     *
     * @param {String} gstNo 15 digits GST Number
     * * @param {String} year Financial year (ex: 2020-21)
     */
    this.filing_frequency = function (gstNo, year) {

        if (gstNo == null || gstNo == "") {
            throw new Error("gstNo not provided.");
        }

        if (year == null || year == "") {
            throw new Error("Financial year not provided. ex: 2020-21");
        }

        const url = api_url + endpoints['filing-frequecy'];

        const data = {

            gstNo: gstNo,
            year: year
        };

        return makeHTTPRequest(url, data);

    }

    
    function makeHTTPRequest(url, data) {

        data['key_secret'] = key_secret;
        return axios.post(url, data, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
                // console.log(response);
                return response.data;
            });

    }

};


