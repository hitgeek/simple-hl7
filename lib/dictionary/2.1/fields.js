var fields = {
    "AD": {
        "desc": "Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State Or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Country",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CE": {
        "desc": "Coded Element",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Coding System",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Alternate Coding System",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CK": {
        "desc": "Composite ID With Check Digit",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM": {
        "desc": "Composite",
        "subfields": []
    },
    "CM_MSG": {
        "desc": "Message Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Message Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Trigger Event",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CN": {
        "desc": "Composite ID Number And Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CQ": {
        "desc": "Composite Quantity With Units",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DT": {
        "desc": "Date",
        "subfields": []
    },
    "FT": {
        "desc": "Formatted Text Data",
        "subfields": []
    },
    "ID": {
        "desc": "Coded values for HL7 tables",
        "subfields": []
    },
    "IS": {
        "desc": "Coded value for user-defined tables",
        "subfields": []
    },
    "NM": {
        "desc": "Numeric",
        "subfields": []
    },
    "PN": {
        "desc": "Person Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SI": {
        "desc": "SET ID",
        "subfields": []
    },
    "ST": {
        "desc": "String Data",
        "subfields": []
    },
    "TN": {
        "desc": "Telephone Number",
        "subfields": []
    },
    "TS": {
        "desc": "Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Time Of An Event",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree Of Precision",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "TX": {
        "desc": "Text Data",
        "subfields": []
    },
    "VARIES": {
        "desc": "Variable Datatype",
        "subfields": []
    }
};

module.exports = fields;
