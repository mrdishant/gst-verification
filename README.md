# gst-verification

gst-verification is an npm package for using the [Appyflow](https://gstapi.appyflow.in/) GST Api.

## Installation

Use the node manager [npm](https://www.npmjs.com/get-npm) to install gst-verification.

```bash
npm i gst-verification
```
## Api Key Secret

This Package is a wrapper around [Appyflow](https://gstapi.appyflow.in/) GST API.

[Register here](https://dashboard.gstapi.appyflow.in/#/auth/register) for the key_secret


## Usage

```node
var gstAPI = new (require("gst-verification"))("key_secret");

//Available APIS
"Verify GST Number API"
"Filing Details API"
"Filing Frequency API"
"HSN Code Details API"

```
### Verify GST Number API
```node
// Verify GST Number (Get GST Details)

// gstNo is the 15 digit GST Number

gstAPI.verifyGST(gstNo).then((response)=>{
    console.log(response);
});

```

### Filing Details API
```node
// Get all the filing of a GST Number in a financial year

// year is the Financial year ex: 2020-211

gstAPI.filing_details(gstNo,year).then((response)=>{
    console.log(response);
});

```

### Filing Frequency API
```node
// Get the filing frequency chosen for a GST Number in a financial year

// year is the Financial year ex: 2020-211

gstAPI.filing_frequency(gstNo,year).then((response)=>{
    console.log(response);
});

```
### HSN Code Details API
```node
// Get the details of an HSN Code

// hsn_code -> HSN/SAC code ex: 998319

gstAPI.hsn_code_details(hsn_code).then((response)=>{
    console.log(response);
});

```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/mrdishant/gst-verification/blob/master/LICENSE)