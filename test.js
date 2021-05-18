var gstAPI = new (require("./index"))("key_secret");
var gstNo="GST Number Here";
var year="2020-21"

gstAPI.verifyGST(gstNo).then((response)=>{
    console.log(response);
});

gstAPI.hsn_code_details("998319").then((response)=>{
    console.log(response);
});

gstAPI.filing_details(gstNo,year).then((response)=>{
    console.log(response);
});

gstAPI.filing_frequency(gstNo,year).then((response)=>{
    console.log(response);
});