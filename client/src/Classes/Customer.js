class Customer {
    constructor(jsonObject) {
        this.id = jsonObject.cusId;
        this.fname = jsonObject.fname;
        this.lname = jsonObject.lname;
        this.email = jsonObject.email;
        this.password = jsonObject.password;
        this.address = jsonObject.location;
        this.city = jsonObject.city;
        this.state = jsonObject.state;
        this.pincode = jsonObject.pincode;
        this.mobile = jsonObject.mobile;
        this.aadhaar = jsonObject.aadhaar;
        this.className = "Customer";
    }
}

export default Customer;