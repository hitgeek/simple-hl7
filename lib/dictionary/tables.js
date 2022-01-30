var tables = {
    "1": {
        "desc": "Administrative Sex",
        "values": {
            "A": "Ambiguous",
            "F": "Female",
            "M": "Male",
            "N": "Not applicable",
            "O": "Other",
            "U": "Unknown"
        }
    },
    "2": {
        "desc": "Marital Status",
        "values": {
            "A": "Separated",
            "B": "Unmarried",
            "C": "Common law",
            "D": "Divorced",
            "E": "Legally Separated",
            "G": "Living together",
            "I": "Interlocutory",
            "M": "Married",
            "N": "Annulled",
            "O": "Other",
            "P": "Domestic partner",
            "R": "Registered domestic partner",
            "S": "Single",
            "T": "Unreported",
            "U": "Unknown",
            "W": "Widowed"
        }
    },
    "3": {
        "desc": "Event type",
        "values": {
            "A01": "ADT/ACK - Admit/visit notification",
            "A02": "ADT/ACK - Transfer a patient",
            "A03": "ADT/ACK -  Discharge/end visit",
            "A04": "ADT/ACK -  Register a patient",
            "A05": "ADT/ACK -  Pre-admit a patient",
            "A06": "ADT/ACK -  Change an outpatient to an inpatient",
            "A07": "ADT/ACK -  Change an inpatient to an outpatient",
            "A08": "ADT/ACK -  Update patient information",
            "A09": "ADT/ACK -  Patient departing - tracking",
            "A10": "ADT/ACK -  Patient arriving - tracking",
            "A11": "ADT/ACK -  Cancel admit/visit notification",
            "A12": "ADT/ACK -  Cancel transfer",
            "A13": "ADT/ACK -  Cancel discharge/end visit",
            "A14": "ADT/ACK -  Pending admit",
            "A15": "ADT/ACK -  Pending transfer",
            "A16": "ADT/ACK -  Pending discharge",
            "A17": "ADT/ACK -  Swap patients",
            "A18": "ADT/ACK -  Merge patient information (for backward compatibility only)",
            "A19": "QRY/ADR -  Patient query",
            "A20": "ADT/ACK -  Bed status update",
            "A21": "ADT/ACK -  Patient goes on a \"leave of absence\"",
            "A22": "ADT/ACK -  Patient returns from a \"leave of absence\"",
            "A23": "ADT/ACK -  Delete a patient record",
            "A24": "ADT/ACK -  Link patient information",
            "A25": "ADT/ACK -  Cancel pending discharge",
            "A26": "ADT/ACK -  Cancel pending transfer",
            "A27": "ADT/ACK -  Cancel pending admit",
            "A28": "ADT/ACK -  Add person information",
            "A29": "ADT/ACK -  Delete person information",
            "A30": "ADT/ACK -  Merge person information (for backward compatibility only)",
            "A31": "ADT/ACK -  Update person information",
            "A32": "ADT/ACK -  Cancel patient arriving - tracking",
            "A33": "ADT/ACK -  Cancel patient departing - tracking",
            "A34": "ADT/ACK -  Merge patient information - patient ID only (for backward compatibility only)",
            "A35": "ADT/ACK -  Merge patient information - account number only (for backward compatibility only)",
            "A36": "ADT/ACK -  Merge patient information - patient ID and account number (for backward compatibility only)",
            "A37": "ADT/ACK -  Unlink patient information",
            "A38": "ADT/ACK - Cancel pre-admit",
            "A39": "ADT/ACK - Merge person - patient ID (for backward compatibility only)",
            "A40": "ADT/ACK - Merge patient - patient identifier list",
            "A41": "ADT/ACK - Merge account - patient account number",
            "A42": "ADT/ACK - Merge visit - visit number",
            "A43": "ADT/ACK - Move patient information - patient identifier list",
            "A44": "ADT/ACK - Move account information - patient account number",
            "A45": "ADT/ACK - Move visit information - visit number",
            "A46": "ADT/ACK - Change patient ID (for backward compatibility only)",
            "A47": "ADT/ACK - Change patient identifier list",
            "A48": "ADT/ACK - Change alternate patient ID (for backward compatibility only)",
            "A49": "ADT/ACK - Change patient account number",
            "A50": "ADT/ACK - Change visit number",
            "A51": "ADT/ACK - Change alternate visit ID",
            "A52": "ADT/ACK - Cancel leave of absence for a patient",
            "A53": "ADT/ACK - Cancel patient returns from a leave of absence",
            "A54": "ADT/ACK - Change attending doctor",
            "A55": "ADT/ACK - Cancel change attending doctor",
            "A60": "ADT/ACK - Update allergy information",
            "A61": "ADT/ACK - Change consulting doctor",
            "A62": "ADT/ACK - Cancel change consulting doctor",
            "B01": "PMU/ACK - Add personnel record",
            "B02": "PMU/ACK - Update personnel record",
            "B03": "PMU/ACK - Delete personnel re cord",
            "B04": "PMU/ACK - Active practicing person",
            "B05": "PMU/ACK - Deactivate practicing person",
            "B06": "PMU/ACK - Terminate practicing person",
            "B07": "PMU/ACK - Grant Certificate/Permission",
            "B08": "PMU/ACK - Revoke Certificate/Permission",
            "C01": "CRM - Register a patient on a clinical trial",
            "C02": "CRM - Cancel a patient registration on clinical trial (for clerical mistakes only)",
            "C03": "CRM - Correct/update registration information",
            "C04": "CRM - Patient has gone off a clinical trial",
            "C05": "CRM - Patient enters phase of clinical trial",
            "C06": "CRM - Cancel patient entering a phase (clerical mistake)",
            "C07": "CRM - Correct/update phase information",
            "C08": "CRM - Patient has gone off phase of clinical trial",
            "C09": "CSU - Automated time intervals for reporting, like monthly",
            "C10": "CSU - Patient completes the clinical trial",
            "C11": "CSU - Patient completes a phase of the clinical trial",
            "C12": "CSU - Update/correction of patient order/result information",
            "E01": "Submit HealthCare Services Invoice",
            "E02": "Cancel HealthCare Services Invoice",
            "E03": "HealthCare Services Invoice Status",
            "E04": "Re-Assess HealthCare Services Invoice Request",
            "E10": "Edit/Adjudication Results",
            "E12": "Request Additional Information",
            "E13": "Additional Information Response",
            "E15": "Payment/Remittance Advice",
            "E20": "Submit Authorization Request",
            "E21": "Cancel Authorization Request",
            "E22": "Authorization Request Status",
            "E24": "Authorization Response",
            "E30": "Submit Health Document related to Authorization Request",
            "E31": "Cancel Health Document related to Authorization Request",
            "I01": "RQI/RPI - Request for insurance information",
            "I02": "RQI/RPL - Request/receipt of patient selection display list",
            "I03": "RQI/RPR - Request/receipt of patient selection list",
            "I04": "RQD/RPI - Request for patient demographic data",
            "I05": "RQC/RCI - Request for patient clinical information",
            "I06": "RQC/RCL - Request/receipt of clinical data listing",
            "I07": "PIN/ACK - Unsolicited insurance information",
            "I08": "RQA/RPA - Request for treatment authorization information",
            "I09": "RQA/RPA - Request for modification to an authorization",
            "I10": "RQA/RPA - Request for resubmission of an authorization",
            "I11": "RQA/RPA - Request for cancellation of an authorization",
            "I12": "REF/RRI - Patient referral",
            "I13": "REF/RRI - Modify patient referral",
            "I14": "REF/RRI - Cancel patient referral",
            "I15": "REF/RRI - Request patient referral status",
            "J01": "QCN/ACK - Cancel query/acknowledge message",
            "J02": "QSX/ACK - Cancel subscription/acknowledge message",
            "K11": "RSP - Segment pattern response in response to QBP^Q11",
            "K13": "RTB - Tabular response in response to QBP^Q13",
            "K15": "RDY - Display response in response to QBP^Q15",
            "K21": "RSP - Get person demographics response",
            "K22": "RSP - Find candidates response",
            "K23": "RSP - Get corresponding identifiers response",
            "K24": "RSP - Allocate identifiers response",
            "K25": "RSP - Personnel Information by Segment Response",
            "K31": "RSP -Dispense History Response",
            "M01": "MFN/MFK - Master file not otherwise specified (for backward compatibility only)",
            "M02": "MFN/MFK - Master file - staff practitioner",
            "M03": "MFN/MFK - Master file - test/observation (for backward compatibility only)",
            "M04": "MFN/MFK - Master files charge description",
            "M05": "MFN/MFK - Patient location master file",
            "M06": "MFN/MFK - Clinical study with phases and schedules master file",
            "M07": "MFN/MFK - Clinical study without phases but with schedules master file",
            "M08": "MFN/MFK - Test/observation (numeric) master file",
            "M09": "MFN/MFK - Test/observation (categorical) master file",
            "M10": "MFN/MFK - Test /observation batteries master file",
            "M11": "MFN/MFK - Test/calculated observations master file",
            "M12": "MFN/MFK - Master file notification message",
            "M13": "MFN/MFK - Master file notification - general",
            "M14": "MFN/MFK - Master file notification - site defined",
            "M15": "MFN/MFK - Inventory item master file notification",
            "M16": "MFN/MFK - Master File Notification Inventory Item Enhanced",
            "M17": "DRG Master File Message",
            "N01": "NMQ/NMR - Application management query message",
            "N02": "NMD/ACK - Application management data message (unsolicited)",
            "O01": "ORM - Order message (also RDE, RDS, RGV, RAS)",
            "O02": "ORR - Order response (also RRE, RRD, RRG, RRA)",
            "O03": "OMD - Diet order",
            "O04": "ORD - Diet order acknowledgment",
            "O05": "OMS - Stock requisition order",
            "O06": "ORS - Stock requisition acknowledgment",
            "O07": "OMN - Non-stock requisition order",
            "O08": "ORN - Non-stock requisition acknowledgment",
            "O09": "OMP - Pharmacy/treatment order",
            "O10": "ORP - Pharmacy/treatment order acknowledgment",
            "O11": "RDE - Pharmacy/treatment encoded order",
            "O12": "RRE - Pharmacy/treatment encoded order acknowledgment",
            "O13": "RDS - Pharmacy/treatment dispense",
            "O14": "RRD - Pharmacy/treatment dispense acknowledgment",
            "O15": "RGV - Pharmacy/treatment give",
            "O16": "RRG - Pharmacy/treatment give acknowledgment",
            "O17": "RAS - Pharmacy/treatment administration",
            "O18": "RRA - Pharmacy/treatment administration acknowledgment",
            "O19": "OMG - General clinical order",
            "O20": "ORG/ORL - General clinical order response",
            "O21": "OML - Laboratory order",
            "O22": "ORL - General laboratory order response message to any OML",
            "O23": "OMI - Imaging order",
            "O24": "ORI - Imaging order response message to any OMI",
            "O25": "RDE - Pharmacy/treatment refill authorization request",
            "O26": "RRE - Pharmacy/Treatment Refill Authorization Acknowledgement",
            "O27": "OMB - Blood product order",
            "O28": "ORB - Blood product order acknowledgment",
            "O29": "BPS - Blood product dispense status",
            "O30": "BRP - Blood product dispense status acknowledgment",
            "O31": "BTS - Blood product transfusion/disposition",
            "O32": "BRT - Blood product transfusion/disposition acknowledgment",
            "O33": "OML - Laboratory order for multiple orders related to a single specimen",
            "O34": "ORL - Laboratory order response message to a multiple order related to single specimen OML",
            "O35": "OML - Laboratory order for multiple orders related to a single container of a specimen",
            "O36": "ORL - Laboratory order response message to a single container of a specimen OML",
            "O37": "OPL - Population/Location-Based Laboratory Order Message",
            "O38": "OPR - Population/Location-Based Laboratory Order Acknowledgment Message",
            "P01": "BAR/ACK - Add patient accounts",
            "P02": "BAR/ACK - Purge patient accounts",
            "P03": "DFT/ACK - Post detail financial transaction",
            "P04": "QRY/DSP - Generate bill and A/R statements",
            "P05": "BAR/ACK - Update account",
            "P06": "BAR/ACK - End account",
            "P07": "PEX - Unsolicited initial individual product experience report",
            "P08": "PEX - Unsolicited update individual product experience report",
            "P09": "SUR - Summary product experience report",
            "P10": "BAR/ACK -Transmit Ambulatory Payment  Classification(APC)",
            "P11": "DFT/ACK - Post Detail Financial Transactions - New",
            "P12": "BAR/ACK - Update Diagnosis/Procedure",
            "PC1": "PPR - PC/ problem add",
            "PC2": "PPR - PC/ problem update",
            "PC3": "PPR - PC/ problem delete",
            "PC4": "QRY - PC/ problem query",
            "PC5": "PRR - PC/ problem response",
            "PC6": "PGL - PC/ goal add",
            "PC7": "PGL - PC/ goal update",
            "PC8": "PGL - PC/ goal delete",
            "PC9": "QRY - PC/ goal query",
            "PCA": "PPV - PC/ goal response",
            "PCB": "PPP - PC/ pathway (problem-oriented) add",
            "PCC": "PPP - PC/ pathway (problem-oriented) update",
            "PCD": "PPP - PC/ pathway (problem-oriented) delete",
            "PCE": "QRY - PC/ pathway (problem-oriented) query",
            "PCF": "PTR - PC/ pathway (problem-oriented) query response",
            "PCG": "PPG - PC/ pathway (goal-oriented) add",
            "PCH": "PPG - PC/ pathway (goal-oriented) update",
            "PCJ": "PPG - PC/ pathway (goal-oriented) delete",
            "PCK": "QRY - PC/ pathway (goal-oriented) query",
            "PCL": "PPT - PC/ pathway (goal-oriented) query response",
            "Q01": "QRY/DSR - Query sent for immediate response",
            "Q02": "QRY/QCK - Query sent for deferred response",
            "Q03": "DSR/ACK - Deferred response to a query",
            "Q05": "UDM/ACK - Unsolicited display update message",
            "Q06": "OSQ/OSR - Query for order status",
            "Q11": "QBP - Query by parameter requesting an RSP segment pattern response",
            "Q13": "QBP - Query by parameter requesting an  RTB - tabular response",
            "Q15": "QBP - Query by parameter requesting an RDY display response",
            "Q16": "QSB - Create subscription",
            "Q17": "QVR - Query for previous events",
            "Q21": "QBP - Get person demographics",
            "Q22": "QBP - Find candidates",
            "Q23": "QBP - Get corresponding identifiers",
            "Q24": "QBP - Allocate identifiers",
            "Q25": "QBP - Personnel Information by Segment Query",
            "Q26": "ROR - Pharmacy/treatment order response",
            "Q27": "RAR - Pharmacy/treatment administration information",
            "Q28": "RDR - Pharmacy/treatment dispense information",
            "Q29": "RER - Pharmacy/treatment encoded order information",
            "Q30": "RGR - Pharmacy/treatment dose information",
            "Q31": "QBP Query Dispense history",
            "R01": "ORU/ACK - Unsolicited transmission of an observation message",
            "R02": "QRY - Query for results of observation",
            "R04": "ORF - Response to query; transmission of requested observation",
            "R21": "OUL - Unsolicited laboratory observation",
            "R22": "OUL - Unsolicited Specimen Oriented Observation Message",
            "R23": "OUL - Unsolicited Specimen Container Oriented Observation Message",
            "R24": "OUL - Unsolicited Order Oriented Observation Message",
            "R25": "OPU - Unsolicited Population/Location-Based Laboratory Observation Message",
            "R30": "ORU - Unsolicited Point-Of-Care Observation Message Without Existing Order - Place An Order",
            "R31": "ORU - Unsolicited New Point-Of-Care Observation Message - Search For An Order",
            "R32": "ORU - Unsolicited Pre-Ordered Point-Of-Care Observation",
            "ROR": "ROR - Pharmacy prescription order query response",
            "S01": "SRM/SRR - Request new appointment booking",
            "S02": "SRM/SRR - Request appointment rescheduling",
            "S03": "SRM/SRR - Request appointment modification",
            "S04": "SRM/SRR - Request appointment cancellation",
            "S05": "SRM/SRR - Request appointment discontinuation",
            "S06": "SRM/SRR - Request appointment deletion",
            "S07": "SRM/SRR - Request addition of service/resource on appointment",
            "S08": "SRM/SRR - Request modification of service/resource on appointment",
            "S09": "SRM/SRR - Request cancellation of service/resource on appointment",
            "S10": "SRM/SRR - Request discontinuation of service/resource on appointment",
            "S11": "SRM/SRR - Request deletion of service/resource on appointment",
            "S12": "SIU/ACK - Notification of new appointment booking",
            "S13": "SIU/ACK - Notification of appointment rescheduling",
            "S14": "SIU/ACK - Notification of appointment modification",
            "S15": "SIU/ACK - Notification of appointment cancellation",
            "S16": "SIU/ACK - Notification of appointment discontinuation",
            "S17": "SIU/ACK - Notification of appointment deletion",
            "S18": "SIU/ACK - Notification of addition of service/resource on appointment",
            "S19": "SIU/ACK - Notification of modification of service/resource on appointment",
            "S20": "SIU/ACK - Notification of cancellation of service/resource on appointment",
            "S21": "SIU/ACK - Notification of discontinuation of service/resource on appointment",
            "S22": "SIU/ACK - Notification of deletion of service/resource on appointment",
            "S23": "SIU/ACK - Notification of blocked schedule time slot(s)",
            "S24": "SIU/ACK - Notification of opened (\"unblocked\") schedule time slot(s)",
            "S25": "SQM/SQR - Schedule query message and response",
            "S26": "SIU/ACK Notification that patient did not show up for schedule appointment",
            "S28": "SLR/SLS - Request new sterilization lot",
            "S29": "SLR/SLS - Request Sterilization lot deletion",
            "S30": "STI/STS - Request item",
            "S31": "SDR/SDS - Request anti-microbial device data",
            "S32": "SMD/SMS - Request anti-microbial device cycle data",
            "S33": "STC/ACK - Notification of sterilization configuration",
            "S34": "SLN/ACK - Notification of sterilization lot",
            "S35": "SLN/ACK - Notification of sterilization lot deletion",
            "S36": "SDN/ACK - Notification of anti-microbial device data",
            "S37": "SCN/ACK - Notification of anti-microbial device cycle data",
            "T01": "MDM/ACK - Original document notification",
            "T02": "MDM/ACK - Original document notification and content",
            "T03": "MDM/ACK - Document status change notification",
            "T04": "MDM/ACK - Document status change notification and content",
            "T05": "MDM/ACK - Document addendum notification",
            "T06": "MDM/ACK - Document addendum notification and content",
            "T07": "MDM/ACK - Document edit notification",
            "T08": "MDM/ACK - Document edit notification and content",
            "T09": "MDM/ACK - Document replacement notification",
            "T10": "MDM/ACK - Document replacement notification and content",
            "T11": "MDM/ACK - Document cancel notification",
            "T12": "QRY/DOC - Document query",
            "U01": "ESU/ACK - Automated equipment status update",
            "U02": "ESR/ACK - Automated equipment status request",
            "U03": "SSU/ACK - Specimen status update",
            "U04": "SSR/ACK - specimen status request",
            "U05": "INU/ACK  - Automated equipment inventory update",
            "U06": "INR/ACK - Automated equipment inventory request",
            "U07": "EAC/ACK - Automated equipment command",
            "U08": "EAR/ACK - Automated equipment response",
            "U09": "EAN/ACK - Automated equipment notification",
            "U10": "TCU/ACK - Automated equipment test code settings update",
            "U11": "TCR/ACK - Automated equipment test code settings request",
            "U12": "LSU/ACK - Automated equipment log/service update",
            "U13": "LSR/ACK - Automated equipment log/service request",
            "V01": "VXQ - Query for vaccination record",
            "V02": "VXX - Response to vaccination query returning multiple PID matches",
            "V03": "VXR - Vaccination record response",
            "V04": "VXU - Unsolicited vaccination record update",
            "Varies": "MFQ/MFR - Master files query (use event same as asking for e.g., M05 - location)",
            "W01": "ORU - Waveform result, unsolicited transmission of requested information",
            "W02": "QRF - Waveform result, response to query"
        }
    },
    "4": {
        "desc": "Patient Class",
        "values": {
            "B": "Obstetrics",
            "C": "Commercial Account",
            "E": "Emergency",
            "I": "Inpatient",
            "N": "Not Applicable",
            "O": "Outpatient",
            "P": "Preadmit",
            "R": "Recurring patient",
            "U": "Unknown"
        }
    },
    "5": {
        "desc": "Race",
        "values": {
            "1002-5": "American Indian or Alaska Native",
            "2028-9": "Asian",
            "2054-5": "Black or African American",
            "2076-8": "Native Hawaiian or Other Pacific Islander",
            "2106-3": "White",
            "2131-1": "Other Race"
        }
    },
    "6": {
        "desc": "Religion",
        "values": {
            "ABC": "Christian: American Baptist Church",
            "AGN": "Agnostic",
            "AME": "Christian: African Methodist Episcopal Zion",
            "AMT": "Christian: African Methodist Episcopal",
            "ANG": "Christian: Anglican",
            "AOG": "Christian: Assembly of God",
            "ATH": "Atheist",
            "BAH": "Baha'i",
            "BAP": "Christian: Baptist",
            "BMA": "Buddhist: Mahayana",
            "BOT": "Buddhist: Other",
            "BRE": "Brethren",
            "BTA": "Buddhist: Tantrayana",
            "BTH": "Buddhist: Theravada",
            "BUD": "Buddhist",
            "CAT": "Christian: Roman Catholic",
            "CFR": "Chinese Folk Religionist",
            "CHR": "Christian",
            "CHS": "Christian: Christian Science",
            "CMA": "Christian: Christian Missionary Alliance",
            "CNF": "Confucian",
            "COC": "Christian: Church of Christ",
            "COG": "Christian: Church of God",
            "COI": "Christian: Church of God in Christ",
            "COL": "Christian: Congregational",
            "COM": "Christian: Community",
            "COP": "Christian: Other Pentecostal",
            "COT": "Christian: Other",
            "CRR": "Christian: Christian Reformed",
            "DOC": "Disciples of Christ",
            "EOT": "Christian: Eastern Orthodox",
            "EPI": "Christian: Episcopalian",
            "ERL": "Ethnic Religionist",
            "EVC": "Christian: Evangelical Church",
            "FRQ": "Christian: Friends",
            "FUL": "Christian: Full Gospel",
            "FWB": "Christian: Free Will Baptist",
            "GRE": "Christian: Greek Orthodox",
            "HIN": "Hindu",
            "HOT": "Hindu: Other",
            "HSH": "Hindu: Shaivites",
            "HVA": "Hindu: Vaishnavites",
            "JAI": "Jain",
            "JCO": "Jewish: Conservative",
            "JEW": "Jewish",
            "JOR": "Jewish: Orthodox",
            "JOT": "Jewish: Other",
            "JRC": "Jewish: Reconstructionist",
            "JRF": "Jewish: Reform",
            "JRN": "Jewish: Renewal",
            "JWN": "Christian: Jehovah's Witness",
            "LMS": "Christian: Lutheran Missouri Synod",
            "LUT": "Christian: Lutheran",
            "MEN": "Christian: Mennonite",
            "MET": "Christian: Methodist",
            "MOM": "Christian: Latter-day Saints",
            "MOS": "Muslim",
            "MOT": "Muslim: Other",
            "MSH": "Muslim: Shiite",
            "MSU": "Muslim: Sunni",
            "NAM": "Native American",
            "NAZ": "Christian: Church of the Nazarene",
            "NOE": "Nonreligious",
            "NRL": "New Religionist",
            "ORT": "Christian: Orthodox",
            "OTH": "Other",
            "PEN": "Christian: Pentecostal",
            "PRC": "Christian: Other Protestant",
            "PRE": "Christian: Presbyterian",
            "PRO": "Christian: Protestant",
            "REC": "Christian: Reformed Church",
            "REO": "Christian: Reorganized Church of Jesus Christ-LDS",
            "SAA": "Christian: Salvation Army",
            "SEV": "Christian: Seventh Day Adventist",
            "SHN": "Shintoist",
            "SIK": "Sikh",
            "SOU": "Christian: Southern Baptist",
            "SPI": "Spiritist",
            "UCC": "Christian: United Church of Christ",
            "UMD": "Christian: United Methodist",
            "UNI": "Christian: Unitarian",
            "UNU": "Christian: Unitarian Universalist",
            "VAR": "Unknown",
            "WES": "Christian: Wesleyan",
            "WMC": "Christian: Wesleyan Methodist"
        }
    },
    "7": {
        "desc": "Admission Type",
        "values": {
            "A": "Accident",
            "C": "Elective",
            "E": "Emergency",
            "L": "Labor and Delivery",
            "N": "Newborn (Birth in healthcare facility)",
            "R": "Routine",
            "U": "Urgent"
        }
    },
    "8": {
        "desc": "Acknowledgment code",
        "values": {
            "AA": "Original mode: Application Accept - Enhanced mode: Application acknowledgment: Accept",
            "AE": "Original mode: Application Error - Enhanced mode: Application acknowledgment: Error",
            "AR": "Original mode: Application Reject - Enhanced mode: Application acknowledgment: Reject",
            "CA": "Enhanced mode: Accept acknowledgment: Commit Accept",
            "CE": "Enhanced mode: Accept acknowledgment: Commit Error",
            "CR": "Enhanced mode: Accept acknowledgment: Commit Reject"
        }
    },
    "9": {
        "desc": "Ambulatory Status",
        "values": {
            "A0": "No functional limitations",
            "A1": "Ambulates with assistive device",
            "A2": "Wheelchair/stretcher bound",
            "A3": "Comatose; non-responsive",
            "A4": "Disoriented",
            "A5": "Vision impaired",
            "A6": "Hearing impaired",
            "A7": "Speech impaired",
            "A8": "Non-English speaking",
            "A9": "Functional level unknown",
            "B1": "Oxygen therapy",
            "B2": "Special equipment (tubes, IVs, catheters)",
            "B3": "Amputee",
            "B4": "Mastectomy",
            "B5": "Paraplegic",
            "B6": "Pregnant"
        }
    },
    "17": {
        "desc": "Transaction Type",
        "values": {
            "AJ": "Adjustment",
            "CD": "Credit",
            "CG": "Charge",
            "CO": "Co-payment",
            "PY": "Payment"
        }
    },
    "23": {
        "desc": "Admit Source",
        "values": {
            "1": "Physician referral",
            "2": "Clinic referral",
            "3": "HMO referral",
            "4": "Transfer from a hospital",
            "5": "Transfer from a skilled nursing facility",
            "6": "Transfer from another health care facility",
            "7": "Emergency room",
            "8": "Court/law enforcement",
            "9": "Information not available"
        }
    },
    "27": {
        "desc": "Priority",
        "values": {
            "A": "As soon as possible (a priority lower than stat)",
            "P": "Preoperative (to be done prior to surgery)",
            "R": "Routine",
            "S": "Stat (do immediately)",
            "T": "Timing critical (do as near as possible to requested time)"
        }
    },
    "38": {
        "desc": "Order status",
        "values": {
            "A": "Some, but not all, results available",
            "CA": "Order was canceled",
            "CM": "Order is completed",
            "DC": "Order was discontinued",
            "ER": "Error, order not found",
            "HD": "Order is on hold",
            "IP": "In process, unspecified",
            "RP": "Order has been replaced",
            "SC": "In process, scheduled"
        }
    },
    "48": {
        "desc": "What subject filter",
        "values": {
            "ADV": "Advice/diagnosis",
            "ANU": "Nursing unit lookup (returns patients in beds, excluding empty beds)",
            "APA": "Account number query, return matching visit",
            "APM": "Medical record number query, returns visits for a medical record number",
            "APN": "Patient name lookup",
            "APP": "Physician lookup",
            "ARN": "Nursing unit lookup (returns patients in beds, including empty beds)",
            "CAN": "Cancel.  Used to cancel a query",
            "DEM": "Demographics",
            "FIN": "Financial",
            "GID": "Generate new identifier",
            "GOL": "Goals",
            "MRI": "Most recent inpatient",
            "MRO": "Most recent outpatient",
            "NCK": "Network clock",
            "NSC": "Network status change",
            "NST": "Network statistic",
            "ORD": "Order",
            "OTH": "Other",
            "PRB": "Problems",
            "PRO": "Procedure",
            "RAR": "Pharmacy administration information",
            "RDR": "Pharmacy dispense information",
            "RER": "Pharmacy encoded order information",
            "RES": "Result",
            "RGR": "Pharmacy give information",
            "ROR": "Pharmacy prescription information",
            "SAL": "All schedule related information, including open slots, booked slots, blocked slots",
            "SBK": "Booked slots on the identified schedule",
            "SBL": "Blocked slots on the identified schedule",
            "SOF": "First open slot on the identified schedule after the start date/tiem",
            "SOP": "Open slots on the identified schedule between the begin and end of the start date/time range",
            "SSA": "Time slots available for a single appointment",
            "SSR": "Time slots available for a recurring appointment",
            "STA": "Status",
            "VXI": "Vaccine Information",
            "XID": "Get cross-referenced identifiers"
        }
    },
    "52": {
        "desc": "Diagnosis Type",
        "values": {
            "A": "Admitting",
            "F": "Final",
            "W": "Working"
        }
    },
    "61": {
        "desc": "Check digit scheme",
        "values": {
            "BCV": "Bank Card Validation Number",
            "ISO": "ISO 7064: 1983",
            "M10": "Mod 10 algorithm",
            "M11": "Mod 11 algorithm",
            "NPI": "Check digit algorithm in the US National Provider Identifier"
        }
    },
    "62": {
        "desc": "Event reason",
        "values": {
            "01": "Patient request",
            "02": "Physician/health practitioner order",
            "03": "Census management",
            "O": "Other",
            "U": "Unknown"
        }
    },
    "63": {
        "desc": "Relationship",
        "values": {
            "ASC": "Associate",
            "BRO": "Brother",
            "CGV": "Care giver",
            "CHD": "Child",
            "DEP": "Handicapped dependent",
            "DOM": "Life partner",
            "EMC": "Emergency contact",
            "EME": "Employee",
            "EMR": "Employer",
            "EXF": "Extended family",
            "FCH": "Foster child",
            "FND": "Friend",
            "FTH": "Father",
            "GCH": "Grandchild",
            "GRD": "Guardian",
            "GRP": "Grandparent",
            "MGR": "Manager",
            "MTH": "Mother",
            "NCH": "Natural child",
            "NON": "None",
            "OAD": "Other adult",
            "OTH": "Other",
            "OWN": "Owner",
            "PAR": "Parent",
            "SCH": "Stepchild",
            "SEL": "Self",
            "SIB": "Sibling",
            "SIS": "Sister",
            "SPO": "Spouse",
            "TRA": "Trainer",
            "UNK": "Unknown",
            "WRD": "Ward of court"
        }
    },
    "65": {
        "desc": "Specimen Action Code",
        "values": {
            "A": "Add ordered tests to the existing specimen",
            "G": "Generated order; reflex order",
            "L": "Lab to obtain specimen from patient",
            "O": "Specimen obtained by service other than Lab",
            "P": "Pending specimen; Order sent prior to delivery",
            "R": "Revised order",
            "S": "Schedule the tests specified below"
        }
    },
    "66": {
        "desc": "Employment Status",
        "values": {
            "1": "Full time employed",
            "2": "Part time employed",
            "3": "Unemployed",
            "4": "Self-employed,",
            "5": "Retired",
            "6": "On active military duty",
            "9": "Unknown",
            "C": "Contract, per diem",
            "L": "Leave of absence (e.g., family leave, sabbatical, etc.)",
            "O": "Other",
            "T": "Temporarily unemployed"
        }
    },
    "69": {
        "desc": "Hospital Service",
        "values": {
            "CAR": "Cardiac Service",
            "MED": "Medical Service",
            "PUL": "Pulmonary Service",
            "SUR": "Surgical Service",
            "URO": "Urology Service"
        }
    },
    "70": {
        "desc": "Specimen Source Codes",
        "values": {
            "ABS": "Abscess",
            "AMN": "Amniotic fluid",
            "ASP": "Aspirate",
            "BBL": "Blood bag",
            "BDY": "Whole body",
            "BIFL": "Bile fluid",
            "BLD": "Whole blood",
            "BLDA": "Blood  arterial",
            "BLDC": "Blood  capillary",
            "BLDCO": "Cord blood",
            "BLDV": "Blood  venous",
            "BON": "Bone",
            "BPH": "Basophils",
            "BPU": "Blood product unit",
            "BRN": "Burn",
            "BRO": "Bronchial",
            "BRTH": "Breath (use EXHLD)",
            "CALC": "Calculus (=Stone)",
            "CDM": "Cardiac muscle",
            "CNJT": "Conjunctiva",
            "CNL": "Cannula",
            "COL": "Colostrum",
            "CSF": "Cerebral spinal fluid",
            "CTP": "Catheter tip",
            "CUR": "Curettage",
            "CVM": "Cervical mucus",
            "CVX": "Cervix",
            "CYST": "Cyst",
            "DIAF": "Dialysis fluid",
            "DOSE": "Dose med or substance",
            "DRN": "Drain",
            "DUFL": "Duodenal fluid",
            "EAR": "Ear",
            "EARW": "Ear wax (cerumen)",
            "ELT": "Electrode",
            "ENDC": "Endocardium",
            "ENDM": "Endometrium",
            "EOS": "Eosinophils",
            "EXG": "Exhaled gas (=breath)",
            "EYE": "Eye",
            "FIB": "Fibroblasts",
            "FIST": "Fistula",
            "FLT": "Filter",
            "FLU": "Body fluid, unsp",
            "GAS": "Gas",
            "GAST": "Gastric fluid/contents",
            "GEN": "Genital",
            "GENC": "Genital cervix",
            "GENL": "Genital lochia",
            "GENV": "Genital vaginal",
            "HAR": "Hair",
            "IHG": "Inhaled Gas",
            "ISLT": "Isolate",
            "IT": "Intubation tube",
            "LAM": "Lamella",
            "LIQ": "Liquid NOS",
            "LN": "Line",
            "LNA": "Line arterial",
            "LNV": "Line venous",
            "LYM": "Lymphocytes",
            "MAC": "Macrophages",
            "MAR": "Marrow",
            "MBLD": "Menstrual blood",
            "MEC": "Meconium",
            "MILK": "Breast milk",
            "MLK": "Milk",
            "NAIL": "Nail",
            "NOS": "Nose (nasal passage)",
            "ORH": "Other",
            "PAFL": "Pancreatic fluid",
            "PAT": "Patient",
            "PLAS": "Plasma",
            "PLB": "Plasma bag",
            "PLC": "Placenta",
            "PLR": "Pleural fluid (thoracentesis fld)",
            "PMN": "Polymorphonuclear neutrophils",
            "PPP": "Platelet poor plasma",
            "PRP": "Platelet rich plasma",
            "PRT": "Peritoneal fluid /ascites",
            "PUS": "Pus",
            "RBC": "Erythrocytes",
            "RT": "Route of medicine",
            "SAL": "Saliva",
            "SER": "Serum",
            "SKM": "Skeletal muscle",
            "SKN": "Skin",
            "SMN": "Seminal fluid",
            "SNV": "Synovial fluid (Joint fluid)",
            "SPRM": "Spermatozoa",
            "SPT": "Sputum",
            "SPTC": "Sputum - coughed",
            "SPTT": "Sputum - tracheal aspirate",
            "STL": "Stool = Fecal",
            "STON": "Stone (use CALC)",
            "SWT": "Sweat",
            "TEAR": "Tears",
            "THRB": "Thrombocyte (platelet)",
            "THRT": "Throat",
            "TISG": "Tissue gall bladder",
            "TISPL": "Tissue placenta",
            "TISS": "Tissue",
            "TISU": "Tissue ulcer",
            "TLGI": "Tissue large intestine",
            "TLNG": "Tissue lung",
            "TSMI": "Tissue small intestine",
            "TUB": "Tube NOS",
            "ULC": "Ulcer",
            "UMB": "Umbilical blood",
            "UMED": "Unknown medicine",
            "UR": "Urine",
            "URC": "Urine clean catch",
            "URNS": "Urine sediment",
            "URT": "Urine catheter",
            "URTH": "Urethra",
            "USUB": "Unknown substance",
            "VITF": "Vitreous Fluid",
            "VOM": "Vomitus",
            "WAT": "Water",
            "WBC": "Leukocytes",
            "WICK": "Wick",
            "WND": "Wound",
            "WNDA": "Wound abscess",
            "WNDD": "Wound drainage",
            "WNDE": "Wound exudate",
            "XXX": "To be specified in another part of the message"
        }
    },
    "74": {
        "desc": "Diagnostic Service Section ID",
        "values": {
            "AU": "Audiology",
            "BG": "Blood Gases",
            "BLB": "Blood Bank",
            "CH": "Chemistry",
            "CP": "Cytopathology",
            "CT": "CAT Scan",
            "CTH": "Cardiac Catheterization",
            "CUS": "Cardiac Ultrasound",
            "EC": "Electrocardiac (e.g., EKG,  EEC, Holter)",
            "EN": "Electroneuro (EEG, EMG,EP,PSG)",
            "HM": "Hematology",
            "ICU": "Bedside ICU Monitoring",
            "IMM": "Immunology",
            "LAB": "Laboratory",
            "MB": "Microbiology",
            "MCB": "Mycobacteriology",
            "MYC": "Mycology",
            "NMR": "Nuclear Magnetic Resonance",
            "NMS": "Nuclear Medicine Scan",
            "NRS": "Nursing Service Measures",
            "OSL": "Outside Lab",
            "OT": "Occupational Therapy",
            "OTH": "Other",
            "OUS": "OB Ultrasound",
            "PF": "Pulmonary Function",
            "PHR": "Pharmacy",
            "PHY": "Physician (Hx. Dx, admission note, etc.)",
            "PT": "Physical Therapy",
            "RAD": "Radiology",
            "RC": "Respiratory Care (therapy)",
            "RT": "Radiation Therapy",
            "RUS": "Radiology Ultrasound",
            "RX": "Radiograph",
            "SP": "Surgical Pathology",
            "SR": "Serology",
            "TX": "Toxicology",
            "VR": "Virology",
            "VUS": "Vascular Ultrasound",
            "XRC": "Cineradiograph"
        }
    },
    "76": {
        "desc": "Message type",
        "values": {
            "ACK": "General acknowledgment message",
            "ADR": "ADT response",
            "ADT": "ADT message",
            "BAR": "Add/change billing account",
            "BPS": "Blood product dispense status message",
            "BRP": "Blood product dispense status acknowledgement message",
            "BRT": "Blood product transfusion/disposition acknowledgement message",
            "BTS": "Blood product transfusion/disposition message",
            "CRM": "Clinical study registration message",
            "CSU": "Unsolicited study data message",
            "DFT": "Detail financial transactions",
            "DOC": "Document response",
            "DSR": "Display response",
            "EAC": "Automated equipment command message",
            "EAN": "Automated equipment notification message",
            "EAR": "Automated equipment response message",
            "EHC": "Health Care Invoice",
            "ESR": "Automated equipment status update acknowledgment message",
            "ESU": "Automated equipment status update message",
            "INR": "Automated equipment inventory request message",
            "INU": "Automated equipment inventory update message",
            "LSR": "Automated equipment log/service request message",
            "LSU": "Automated equipment log/service update message",
            "MDM": "Medical document management",
            "MFD": "Master files delayed application acknowledgment",
            "MFK": "Master files application acknowledgment",
            "MFN": "Master files notification",
            "MFQ": "Master files query",
            "MFR": "Master files response",
            "NMD": "Application management data message",
            "NMQ": "Application management query message",
            "NMR": "Application management response message",
            "OMB": "Blood product order message",
            "OMD": "Dietary order",
            "OMG": "General clinical order message",
            "OMI": "Imaging order",
            "OML": "Laboratory order message",
            "OMN": "Non-stock requisition order message",
            "OMP": "Pharmacy/treatment order message",
            "OMS": "Stock requisition order message",
            "OPL": "Population/Location-Based Laboratory Order Message",
            "OPR": "Population/Location-Based Laboratory Order Acknowledgment Message",
            "OPU": "Unsolicited Population/Location-Based Laboratory Observation Message",
            "ORB": "Blood product order acknowledgement message",
            "ORD": "Dietary order acknowledgment message",
            "ORF": "Query for results of observation",
            "ORG": "General clinical order acknowledgment message",
            "ORI": "Imaging order acknowledgement message",
            "ORL": "Laboratory acknowledgment message (unsolicited)",
            "ORM": "Pharmacy/treatment order message",
            "ORN": "Non-stock requisition - General order acknowledgment message",
            "ORP": "Pharmacy/treatment order acknowledgment message",
            "ORR": "General order response message response to any ORM",
            "ORS": "Stock requisition - Order acknowledgment message",
            "ORU": "Unsolicited transmission of an observation message",
            "OSQ": "Query response for order status",
            "OSR": "Query response for order status",
            "OUL": "Unsolicited laboratory observation message",
            "PEX": "Product experience message",
            "PGL": "Patient goal message",
            "PIN": "Patient insurance information",
            "PMU": "Add personnel record",
            "PPG": "Patient pathway message (goal-oriented)",
            "PPP": "Patient pathway message (problem-oriented)",
            "PPR": "Patient problem message",
            "PPT": "Patient pathway goal-oriented response",
            "PPV": "Patient goal response",
            "PRR": "Patient problem response",
            "PTR": "Patient pathway problem-oriented response",
            "QBP": "Query by parameter",
            "QCK": "Deferred query",
            "QCN": "Cancel query",
            "QRY": "Query, original mode",
            "QSB": "Create subscription",
            "QSX": "Cancel subscription/acknowledge message",
            "QVR": "Query for previous events",
            "RAR": "Pharmacy/treatment administration information",
            "RAS": "Pharmacy/treatment administration message",
            "RCI": "Return clinical information",
            "RCL": "Return clinical list",
            "RDE": "Pharmacy/treatment encoded order message",
            "RDR": "Pharmacy/treatment dispense information",
            "RDS": "Pharmacy/treatment dispense message",
            "RDY": "Display based response",
            "REF": "Patient referral",
            "RER": "Pharmacy/treatment encoded order information",
            "RGR": "Pharmacy/treatment dose information",
            "RGV": "Pharmacy/treatment give message",
            "ROR": "Pharmacy/treatment order response",
            "RPA": "Return patient authorization",
            "RPI": "Return patient information",
            "RPL": "Return patient display list",
            "RPR": "Return patient list",
            "RQA": "Request patient authorization",
            "RQC": "Request clinical information",
            "RQI": "Request patient information",
            "RQP": "Request patient demographics",
            "RRA": "Pharmacy/treatment administration acknowledgment message",
            "RRD": "Pharmacy/treatment dispense acknowledgment message",
            "RRE": "Pharmacy/treatment encoded order acknowledgment message",
            "RRG": "Pharmacy/treatment give acknowledgment message",
            "RRI": "Return referral information",
            "RSP": "Segment pattern response",
            "RTB": "Tabular response",
            "SCN": "Notification of Anti-Microbial Device Cycle Data",
            "SDN": "Notification of Anti-Microbial Device Data",
            "SDR": "Sterilization anti-microbial device data request",
            "SIU": "Schedule information unsolicited",
            "SLN": "Notification of New Sterilization Lot",
            "SLR": "Sterilization lot request",
            "SMD": "Sterilization anti-microbial device cycle data request",
            "SQM": "Schedule query message",
            "SQR": "Schedule query response",
            "SRM": "Schedule request message",
            "SRR": "Scheduled request response",
            "SSR": "Specimen status request message",
            "SSU": "Specimen status update message",
            "STC": "Notification of Sterilization Configuration",
            "STI": "Sterilization item request",
            "SUR": "Summary product experience report",
            "TBR": "Tabular data response",
            "TCR": "Automated equipment test code settings request message",
            "TCU": "Automated equipment test code settings update message",
            "UDM": "Unsolicited display update message",
            "VXQ": "Query for vaccination record",
            "VXR": "Vaccination record response",
            "VXU": "Unsolicited vaccination record update",
            "VXX": "Response for vaccination query with multiple PID matches"
        }
    },
    "78": {
        "desc": "Abnormal flags",
        "values": {
            "<": "Below absolute low-off instrument scale",
            ">": "Above absolute high-off instrument scale",
            "A": "Abnormal (applies to non-numeric results)",
            "AA": "Very abnormal (applies to non-numeric units, analogous to panic limits for numeric units)",
            "B": "Better--use when direction not relevant",
            "D": "Significant change down",
            "H": "Above high normal",
            "HH": "Above upper panic limits",
            "I": "Intermediate. Indicates for microbiology susceptibilities only.",
            "L": "Below low normal",
            "LL": "Below lower panic limits",
            "MS": "Moderately susceptible. Indicates for microbiology susceptibilities only.",
            "N": "Normal (applies to non-numeric results)",
            "null": "No range defined, or normal ranges don't apply",
            "R": "Resistant. Indicates for microbiology susceptibilities only.",
            "S": "Susceptible. Indicates for microbiology susceptibilities only.",
            "U": "Significant change up",
            "VS": "Very susceptible. Indicates for microbiology susceptibilities only.",
            "W": "Worse--use when direction not relevant"
        }
    },
    "80": {
        "desc": "Nature of Abnormal Testing",
        "values": {
            "A": "An age-based population",
            "B": "Breed",
            "N": "None - generic normal range",
            "R": "A race-based population",
            "S": "A sex-based population",
            "SP": "Species",
            "ST": "Strain"
        }
    },
    "83": {
        "desc": "Outlier Type",
        "values": {
            "C": "Outlier cost",
            "D": "Outlier days"
        }
    },
    "85": {
        "desc": "Observation result status codes interpretation",
        "values": {
            "C": "Record coming over is a correction and thus replaces a final result",
            "D": "Deletes the OBX record",
            "F": "Final results; Can only be changed with a corrected result.",
            "I": "Specimen in lab; results pending",
            "N": "Not asked; used to affirmatively document that the observation identified in the OBX was not sought when the universal service ID in OBR-4 implies that it would be sought.",
            "O": "Order detail description only (no result)",
            "P": "Preliminary results",
            "R": "Results entered -- not verified",
            "S": "Partial results.   Deprecated. Retained only for backward compatibility as of V2.6.",
            "U": "Results status change to final without retransmitting results already sent as 'preliminary.'  E.g., radiology changes status from preliminary to final",
            "W": "Post original as wrong, e.g., transmitted for wrong patient",
            "X": "Results cannot be obtained for this observation"
        }
    },
    "91": {
        "desc": "Query priority",
        "values": {
            "D": "Deferred",
            "I": "Immediate"
        }
    },
    "92": {
        "desc": "Re-Admission Indicator",
        "values": {
            "R": "Re-admission"
        }
    },
    "93": {
        "desc": "Release Information",
        "values": {
            "N": "No",
            "Y": "Yes"
        }
    },
    "98": {
        "desc": "Type of Agreement",
        "values": {
            "M": "Maternity",
            "S": "Standard",
            "U": "Unified"
        }
    },
    "100": {
        "desc": "Invocation event",
        "values": {
            "D": "On discharge",
            "O": "On receipt of order",
            "R": "At time service is completed",
            "S": "At time service is started",
            "T": "At a designated date/time"
        }
    },
    "103": {
        "desc": "Processing ID",
        "values": {
            "D": "Debugging",
            "P": "Production",
            "T": "Training"
        }
    },
    "104": {
        "desc": "Version ID",
        "values": {
            "2.0": "Release 2.0",
            "2.0D": "Demo 2.0",
            "2.1": "Release 2. 1",
            "2.2": "Release 2.2",
            "2.3": "Release 2.3",
            "2.3.1": "Release 2.3.1",
            "2.4": "Release 2.4",
            "2.5": "Release 2.5",
            "2.5.1": "Release 1.5.1",
            "2.6": "Release 2.6"
        }
    },
    "105": {
        "desc": "Source of comment",
        "values": {
            "L": "Ancillary (filler) department is source of comment",
            "O": "Other system is source of comment",
            "P": "Orderer (placer) is source of comment"
        }
    },
    "106": {
        "desc": "Query/response format code",
        "values": {
            "D": "Response is in display format",
            "R": "Response is in record-oriented format",
            "T": "Response is in tabular format"
        }
    },
    "107": {
        "desc": "Deferred response type",
        "values": {
            "B": "Before the Date/Time specified",
            "L": "Later than the Date/Time specified"
        }
    },
    "108": {
        "desc": "Query results level",
        "values": {
            "O": "Order plus order status",
            "R": "Results without bulk text",
            "S": "Status only",
            "T": "Full results"
        }
    },
    "109": {
        "desc": "Report priority",
        "values": {
            "R": "Routine",
            "S": "Stat"
        }
    },
    "112": {
        "desc": "Discharge Disposition",
        "values": {
            "10": "Discharge",
            "11": "Discharge",
            "12": "Discharge",
            "13": "Discharge",
            "14": "Discharge",
            "15": "Discharge",
            "16": "Discharge",
            "17": "Discharge",
            "18": "Discharge",
            "19": "Discharge",
            "20": "Expired (i.e. dead)",
            "21": "Expired",
            "22": "Expired",
            "23": "Expired",
            "24": "Expired",
            "25": "Expired",
            "26": "Expired",
            "27": "Expired",
            "28": "Expired",
            "29": "Expired",
            "30": "Still patient or expected to return for outpatient services (i.e. still a patient)",
            "31": "Still a patient",
            "32": "Still a patient",
            "33": "Still a patient",
            "34": "Still a patient",
            "35": "Still a patient",
            "36": "Still a patient",
            "37": "Still a patient",
            "38": "Still a patient",
            "39": "Still a patient",
            "40": "Expired (i.e. died) at home",
            "41": "Expired (i.e. died) in a medical facility; e.g., hospital, SNF, ICF, or free standing hospice",
            "42": "Expired (i.e. died)  - place unknown",
            "01": "Discharged to home or self care (routine discharge)",
            "02": "Discharged/transferred to another short term general hospital for inpatient care",
            "03": "Discharged/transferred to skilled nursing facility (SNF)",
            "04": "Discharged/transferred to an intermediate care facility (ICF)",
            "05": "Discharged/transferred to another type of institution for inpatient care or referred for outpatient services to another institution",
            "06": "Discharged/transferred to home under care of organized home health service organization",
            "07": "Left against medical advice or discontinued care",
            "08": "Discharged/transferred to home under care of Home IV provider",
            "09": "Admitted as an inpatient to this hospital"
        }
    },
    "116": {
        "desc": "Bed Status",
        "values": {
            "C": "Closed",
            "H": "Housekeeping",
            "I": "Isolated",
            "K": "Contaminated",
            "O": "Occupied",
            "U": "Unoccupied"
        }
    },
    "119": {
        "desc": "Order control codes",
        "values": {
            "AF": "Order/service refill request approval",
            "CA": "Cancel order/service request",
            "CH": "Child order/service",
            "CN": "Combined result",
            "CR": "Canceled as requested",
            "DC": "Discontinue order/service request",
            "DE": "Data errors",
            "DF": "Order/service refill request denied",
            "DR": "Discontinued as requested",
            "FU": "Order/service refilled, unsolicited",
            "HD": "Hold order request",
            "HR": "On hold as requested",
            "LI": "Link order/service to patient care problem or goal",
            "MC": "Miscellaneous Charge - not associated with an order",
            "NA": "Number assigned",
            "NW": "New order/service",
            "OC": "Order/service canceled",
            "OD": "Order/service discontinued",
            "OE": "Order/service released",
            "OF": "Order/service refilled as requested",
            "OH": "Order/service held",
            "OK": "Order/service accepted & OK",
            "OP": "Notification of order for outside dispense",
            "OR": "Released as requested",
            "PA": "Parent order/service",
            "PR": "Previous Results with new order/service",
            "PY": "Notification of replacement order for outside dispense",
            "RE": "Observations/Performed Service to follow",
            "RF": "Refill order/service request",
            "RL": "Release previous hold",
            "RO": "Replacement order",
            "RP": "Order/service replace request",
            "RQ": "Replaced as requested",
            "RR": "Request received",
            "RU": "Replaced unsolicited",
            "SC": "Status changed",
            "SN": "filler application",
            "SR": "Response to send order/service status request",
            "SS": "Send order/service status request",
            "UA": "Unable to accept order/service",
            "UC": "Unable to cancel",
            "UD": "Unable to discontinue",
            "UF": "Unable to refill",
            "UH": "Unable to put on hold",
            "UM": "Unable to replace",
            "UN": "Unlink order/service from patient care problem or goal",
            "UR": "Unable to release",
            "UX": "Unable to change",
            "XO": "Change order/service request",
            "XR": "Changed as requested",
            "XX": "Order/service changed, unsol."
        }
    },
    "121": {
        "desc": "Response flag",
        "values": {
            "D": "Same as R, also other associated segments",
            "E": "Report exceptions only",
            "F": "Same as D, plus confirmations explicitly",
            "N": "Only the MSA segment is returned",
            "R": "Same as E, also Replacement and Parent-Child"
        }
    },
    "122": {
        "desc": "Charge type",
        "values": {
            "CH": "Charge",
            "CO": "Contract",
            "CR": "Credit",
            "DP": "Department",
            "GR": "Grant",
            "NC": "No Charge",
            "PC": "Professional",
            "RS": "Research"
        }
    },
    "123": {
        "desc": "Result Status",
        "values": {
            "A": "Some, but not all, results available",
            "C": "Correction to results",
            "F": "Final results; results stored and verified.  Can only be changed with a corrected result.",
            "I": "No results available; specimen received, procedure incomplete",
            "O": "Order received; specimen not yet received",
            "P": "Preliminary: A verified early result is available, final results not yet obtained",
            "R": "Results stored; not yet verified",
            "S": "No results available; procedure scheduled, but not done",
            "X": "No results available; Order canceled.",
            "Y": "No order on record for this test.  (Used only on queries)",
            "Z": "No record of this patient. (Used only on queries)"
        }
    },
    "124": {
        "desc": "Transportation Mode",
        "values": {
            "CART": "Cart - patient travels on cart or gurney",
            "PORT": "The examining device goes to patient's location",
            "WALK": "Patient walks to diagnostic service",
            "WHLC": "Wheelchair"
        }
    },
    "125": {
        "desc": "Value type",
        "values": {
            "AD": "Address",
            "CF": "Coded Element With Formatted Values",
            "CK": "Composite ID With Check Digit",
            "CN": "Composite ID And Name",
            "CP": "Composite Price",
            "CWE": "Coded Entry",
            "CX": "Extended Composite ID With Check Digit",
            "DT": "Date",
            "DTM": "Time Stamp (Date & Time)",
            "ED": "Encapsulated Data",
            "FT": "Formatted Text (Display)",
            "MO": "Money",
            "NM": "Numeric",
            "PN": "Person Name",
            "RP": "Reference Pointer",
            "SN": "Structured Numeric",
            "ST": "String Data.",
            "TM": "Time",
            "TN": "Telephone Number",
            "TX": "Text Data (Display)",
            "XAD": "Extended Address",
            "XCN": "Extended Composite Name And Number For Persons",
            "XON": "Extended Composite Name And Number For Organizations",
            "XPN": "Extended Person Name",
            "XTN": "Extended Telecommunications Number"
        }
    },
    "126": {
        "desc": "Quantity limited request",
        "values": {
            "CH": "Characters",
            "LI": "Lines",
            "PG": "Pages",
            "RD": "Records",
            "ZO": "Locally defined"
        }
    },
    "127": {
        "desc": "Allergen Type",
        "values": {
            "AA": "Animal Allergy",
            "DA": "Drug allergy",
            "EA": "Environmental Allergy",
            "FA": "Food allergy",
            "LA": "Pollen Allergy",
            "MA": "Miscellaneous allergy",
            "MC": "Miscellaneous contraindication",
            "PA": "Plant Allergy"
        }
    },
    "128": {
        "desc": "Allergy Severity",
        "values": {
            "MI": "Mild",
            "MO": "Moderate",
            "SV": "Severe",
            "U": "Unknown"
        }
    },
    "130": {
        "desc": "Visit User Code",
        "values": {
            "HO": "Home",
            "MO": "Mobile Unit",
            "PH": "Phone",
            "TE": "Teaching"
        }
    },
    "131": {
        "desc": "Contact Role",
        "values": {
            "C": "Emergency Contact",
            "E": "Employer",
            "F": "Federal Agency",
            "I": "Insurance Company",
            "N": "Next-of-Kin",
            "O": "Other",
            "S": "State Agency",
            "U": "Unknown"
        }
    },
    "135": {
        "desc": "Assignment of Benefits",
        "values": {
            "M": "Modified assignment",
            "N": "No",
            "Y": "Yes"
        }
    },
    "136": {
        "desc": "Yes/no indicator",
        "values": {
            "N": "No",
            "Y": "Yes"
        }
    },
    "137": {
        "desc": "Mail Claim Party",
        "values": {
            "E": "Employer",
            "G": "Guarantor",
            "I": "Insurance company",
            "O": "Other",
            "P": "Patient"
        }
    },
    "140": {
        "desc": "Military Service",
        "values": {
            "AUSA": "Australian Army",
            "AUSAF": "Australian Air Force",
            "AUSN": "Australian Navy",
            "NATO": "North Atlantic Treaty Organization",
            "NOAA": "National Oceanic and Atmospheric Administration",
            "USA": "US Army",
            "USAF": "US Air Force",
            "USCG": "US Coast Guard",
            "USMC": "US Marine Corps",
            "USN": "US Navy",
            "USPHS": "US Public Health Service"
        }
    },
    "141": {
        "desc": "Military Rank/Grade",
        "values": {
            "E1": "Enlisted",
            "E2": "Enlisted",
            "E3": "Enlisted",
            "E4": "Enlisted",
            "E5": "Enlisted",
            "E6": "Enlisted",
            "E7": "Enlisted",
            "E8": "Enlisted",
            "E9": "Enlisted",
            "O1": "Officers",
            "O2": "Officers",
            "O3": "Officers",
            "O4": "Officers",
            "O5": "Officers",
            "O6": "Officers",
            "O7": "Officers",
            "O8": "Officers",
            "O9": "Officers",
            "W1": "Warrant Officers",
            "W2": "Warrant Officers",
            "W3": "Warrant Officers",
            "W4": "Warrant Officers"
        }
    },
    "142": {
        "desc": "Military Status",
        "values": {
            "ACT": "Active duty",
            "DEC": "Deceased",
            "RET": "Retired"
        }
    },
    "144": {
        "desc": "Eligibility Source",
        "values": {
            "1": "Insurance company",
            "2": "Employer",
            "3": "Insured presented policy",
            "4": "Insured presented card",
            "5": "Signed statement on file",
            "6": "Verbal information",
            "7": "None"
        }
    },
    "145": {
        "desc": "Room type",
        "values": {
            "2ICU": "Second intensive care unit",
            "2PRI": "Second private room",
            "2SPR": "Second semi-private room",
            "ICU": "Intensive care unit",
            "PRI": "Private room",
            "SPR": "Semi-private room"
        }
    },
    "146": {
        "desc": "Amount type",
        "values": {
            "DF": "Differential",
            "LM": "Limit",
            "PC": "Percentage",
            "RT": "Rate",
            "UL": "Unlimited"
        }
    },
    "147": {
        "desc": "Policy type",
        "values": {
            "2ANC": "Second ancillary",
            "2MMD": "Second major medical",
            "3MMD": "Third major medical",
            "ANC": "Ancillary",
            "MMD": "Major medical"
        }
    },
    "148": {
        "desc": "Money or percentage indicator",
        "values": {
            "AT": "Currency amount",
            "PC": "Percentage"
        }
    },
    "149": {
        "desc": "Day type",
        "values": {
            "AP": "Approved",
            "DE": "Denied",
            "PE": "Pending"
        }
    },
    "150": {
        "desc": "Certification patient type",
        "values": {
            "ER": "Emergency",
            "IPE": "Inpatient elective",
            "OPE": "Outpatient elective",
            "UR": "Urgent"
        }
    },
    "155": {
        "desc": "Accept/application acknowledgment conditions",
        "values": {
            "AL": "Always",
            "ER": "Error/reject conditions only",
            "NE": "Never",
            "SU": "Successful completion only"
        }
    },
    "156": {
        "desc": "Which date/time qualifier",
        "values": {
            "ANY": "Any date/time within a range",
            "COL": "Collection date/time, equivalent to film or sample collection date/time",
            "ORD": "Order date/time",
            "RCT": "Specimen receipt date/time, receipt of specimen in filling ancillary (Lab)",
            "REP": "Report date/time, report date/time at filing ancillary (i.e., Lab)",
            "SCHED": "Schedule date/time"
        }
    },
    "157": {
        "desc": "Which date/time status qualifier",
        "values": {
            "ANY": "Any status",
            "CFN": "Current final value, whether final or corrected",
            "COR": "Corrected only (no final with corrections)",
            "FIN": "Final only (no corrections)",
            "PRE": "Preliminary",
            "REP": "Report completion date/time"
        }
    },
    "158": {
        "desc": "Date/time selection qualifier",
        "values": {
            "1ST": "First value within range",
            "ALL": "All values within the range",
            "LST": "Last value within the range",
            "REV": "All values within the range returned in reverse chronological order (This is the default if not otherwise specified.)"
        }
    },
    "159": {
        "desc": "Diet Code Specification Type",
        "values": {
            "D": "Diet",
            "P": "Preference",
            "S": "Supplement"
        }
    },
    "160": {
        "desc": "Tray Type",
        "values": {
            "EARLY": "Early tray",
            "GUEST": "Guest tray",
            "LATE": "Late tray",
            "MSG": "Tray message only",
            "NO": "No tray"
        }
    },
    "161": {
        "desc": "Allow Substitution",
        "values": {
            "G": "Allow generic substitutions.",
            "N": "Substitutions are NOT authorized.  (This is the default - null.)",
            "T": "Allow therapeutic substitutions"
        }
    },
    "162": {
        "desc": "Route of Administration",
        "values": {
            "AP": "Apply Externally",
            "B": "Buccal",
            "DT": "Dental",
            "EP": "Epidural",
            "ET": "Endotrachial Tube*",
            "GTT": "Gastrostomy Tube",
            "GU": "GU Irrigant",
            "IA": "Intra-arterial",
            "IB": "Intrabursal",
            "IC": "Intracardiac",
            "ICV": "Intracervical (uterus)",
            "ID": "Intradermal",
            "IH": "Inhalation",
            "IHA": "Intrahepatic Artery",
            "IM": "Intramuscular",
            "IMR": "Immerse (Soak) Body Part",
            "IN": "Intranasal",
            "IO": "Intraocular",
            "IP": "Intraperitoneal",
            "IS": "Intrasynovial",
            "IT": "Intrathecal",
            "IU": "Intrauterine",
            "IV": "Intravenous",
            "MM": "Mucous Membrane",
            "MTH": "Mouth/Throat",
            "NG": "Nasogastric",
            "NP": "Nasal Prongs*",
            "NS": "Nasal",
            "NT": "Nasotrachial Tube",
            "OP": "Ophthalmic",
            "OT": "Otic",
            "OTH": "Other/Miscellaneous",
            "PF": "Perfusion",
            "PO": "Oral",
            "PR": "Rectal",
            "RM": "Rebreather Mask*",
            "SC": "Subcutaneous",
            "SD": "Soaked Dressing",
            "SL": "Sublingual",
            "TD": "Transdermal",
            "TL": "Translingual",
            "TP": "Topical",
            "TRA": "Tracheostomy*",
            "UR": "Urethral",
            "VG": "Vaginal",
            "VM": "Ventimask",
            "WND": "Wound"
        }
    },
    "163": {
        "desc": "Body site",
        "values": {
            "BE": "Bilateral Ears",
            "BN": "Bilateral Nares",
            "BU": "Buttock",
            "CT": "Chest Tube",
            "LA": "Left Arm",
            "LAC": "Left Anterior Chest",
            "LACF": "Left Antecubital Fossa",
            "LD": "Left Deltoid",
            "LE": "Left Ear",
            "LEJ": "Left External Jugular",
            "LF": "Left Foot",
            "LG": "Left Gluteus Medius",
            "LH": "Left Hand",
            "LIJ": "Left Internal Jugular",
            "LLAQ": "Left Lower Abd Quadrant",
            "LLFA": "Left Lower Forearm",
            "LMFA": "Left Mid Forearm",
            "LN": "Left Naris",
            "LPC": "Left Posterior Chest",
            "LSC": "Left Subclavian",
            "LT": "Left Thigh",
            "LUA": "Left Upper Arm",
            "LUAQ": "Left Upper Abd Quadrant",
            "LUFA": "Left Upper Forearm",
            "LVG": "Left Ventragluteal",
            "LVL": "Left Vastus Lateralis",
            "NB": "Nebulized",
            "OD": "Right Eye",
            "OS": "Left Eye",
            "OU": "Bilateral Eyes",
            "PA": "Perianal",
            "PERIN": "Perineal",
            "RA": "Right Arm",
            "RAC": "Right Anterior Chest",
            "RACF": "Right Antecubital Fossa",
            "RD": "Right Deltoid",
            "RE": "Right Ear",
            "REJ": "Right External Jugular",
            "RF": "Right Foot",
            "RG": "Right Gluteus Medius",
            "RH": "Right Hand",
            "RIJ": "Right Internal Jugular",
            "RLAQ": "Rt Lower Abd Quadrant",
            "RLFA": "Right Lower Forearm",
            "RMFA": "Right Mid Forearm",
            "RN": "Right Naris",
            "RPC": "Right Posterior Chest",
            "RSC": "Right Subclavian",
            "RT": "Right Thigh",
            "RUA": "Right Upper Arm",
            "RUAQ": "Right Upper Abd Quadrant",
            "RUFA": "Right Upper Forearm",
            "RVG": "Right Ventragluteal",
            "RVL": "Right Vastus Lateralis"
        }
    },
    "164": {
        "desc": "Administration Device",
        "values": {
            "AP": "Applicator",
            "BT": "Buretrol",
            "HL": "Heparin Lock",
            "IPPB": "IPPB",
            "IVP": "IV Pump",
            "IVS": "IV Soluset",
            "MI": "Metered Inhaler",
            "NEB": "Nebulizer",
            "PCA": "PCA Pump"
        }
    },
    "165": {
        "desc": "Administration Method",
        "values": {
            "CH": "Chew",
            "DI": "Dissolve",
            "DU": "Dust",
            "IF": "Infiltrate",
            "IR": "Irrigate",
            "IS": "Insert",
            "IVP": "IV Push",
            "IVPB": "IV Piggyback",
            "NB": "Nebulized",
            "PF": "Perfuse",
            "PT": "Paint",
            "SH": "Shampoo",
            "SO": "Soak",
            "WA": "Wash",
            "WI": "Wipe"
        }
    },
    "166": {
        "desc": "RX Component Type",
        "values": {
            "A": "Additive",
            "B": "Base"
        }
    },
    "167": {
        "desc": "Substitution Status",
        "values": {
            "0": "No product selection indicated",
            "1": "Substitution not allowed by prescriber",
            "2": "Substitution allowed - patient requested product dispensed",
            "3": "Substitution allowed - pharmacist selected product dispensed",
            "4": "Substitution allowed - generic drug not in stock",
            "5": "Substitution allowed - brand drug dispensed as a generic",
            "7": "Substitution not allowed - brand drug mandated by law",
            "8": "Substitution allowed - generic drug not available in marketplace",
            "G": "A generic substitution was dispensed.",
            "N": "No substitute was dispensed.  This is equivalent to the default (null) value.",
            "T": "A therapeutic substitution was dispensed."
        }
    },
    "168": {
        "desc": "Processing priority",
        "values": {
            "A": "As soon as possible (a priority lower than stat)",
            "B": "Do at bedside or portable (may be used with other codes)",
            "C": "Measure continuously (e.g., arterial line blood pressure)",
            "P": "Preoperative (to be done prior to surgery)",
            "R": "Routine",
            "S": "Stat (do immediately)",
            "T": "Timing critical (do as near as possible to requested time)"
        }
    },
    "169": {
        "desc": "Reporting priority",
        "values": {
            "C": "Call back results",
            "R": "Rush reporting"
        }
    },
    "170": {
        "desc": "Derived specimen",
        "values": {
            "C": "Child Observation",
            "N": "Not Applicable",
            "P": "Parent Observation"
        }
    },
    "173": {
        "desc": "Coordination of Benefits",
        "values": {
            "CO": "Coordination",
            "IN": "Independent"
        }
    },
    "174": {
        "desc": "Nature of Service/Test/Observation",
        "values": {
            "A": "Atomic service/test/observation (test code or treatment code)",
            "C": "Single observation calculated via a rule or formula from other independent observations (e.g., Alveolar-arterial ratio, cardiac output)",
            "F": "Functional procedure that may consist of one or more interrelated measures (e.g., glucose tolerance test, creatinine clearance), usually done at different times and/or on different specimens",
            "P": "Profile or battery consisting of many independent atomic observations (e.g., SMA12, electrolytes), usually done at one instrument on one specimen",
            "S": "Superset-a set of batteries or procedures ordered under a single code unit but processed as separate batteries (e.g., routines = CBC, UA, electrolytes)<p>This set indicates that the code being described is used to order multiple service/test/observation b"
        }
    },
    "175": {
        "desc": "Master file identifier code",
        "values": {
            "CDM": "Charge description master file",
            "CLN": "Clinic master file",
            "CMA": "Clinical study with phases and scheduled master file",
            "CMB": "Clinical study without phases but with scheduled master file",
            "INV": "Inventory master file",
            "LOC": "Location master file",
            "OMA": "Numerical observation master file",
            "OMB": "Categorical observation master file",
            "OMC": "Observation batteries master file",
            "OMD": "Calculated observations master file",
            "OME": "Other Observation/Service Item master file",
            "PRA": "Practitioner master file",
            "STF": "Staff master file"
        }
    },
    "177": {
        "desc": "Confidentiality code",
        "values": {
            "AID": "AIDS patient",
            "EMP": "Employee",
            "ETH": "Alcohol/drug treatment patient",
            "HIV": "HIV(+) patient",
            "PSY": "Psychiatric patient",
            "R": "Restricted",
            "U": "Usual control",
            "UWM": "Unwed mother",
            "V": "Very restricted",
            "VIP": "Very important person or celebrity"
        }
    },
    "178": {
        "desc": "File level event code",
        "values": {
            "REP": "Replace current version of this master file with the version contained in this message",
            "UPD": "Change file records as defined in the record-level event codes for each record that follows"
        }
    },
    "179": {
        "desc": "Response level",
        "values": {
            "AL": "Always.  All MFA segments (whether denoting errors or not) must be returned via the application-level acknowledgment message",
            "ER": "Error/Reject conditions only.  Only MFA segments denoting errors must be returned via the application-level acknowledgment for this message",
            "NE": "Never.  No application-level response needed",
            "SU": "Success.  Only MFA segments denoting success must be returned via the application-level acknowledgment for this message"
        }
    },
    "180": {
        "desc": "Record-level event code",
        "values": {
            "MAC": "Reactivate deactivated record",
            "MAD": "Add record to master file",
            "MDC": "Deactivate: discontinue using record in master file, but do not delete from database",
            "MDL": "Delete record from master file",
            "MUP": "Update record for master file"
        }
    },
    "181": {
        "desc": "MFN record-level error return",
        "values": {
            "S": "Successful posting of the record defined by the MFE segment",
            "U": "Unsuccessful posting of the record defined by the MFE segment"
        }
    },
    "183": {
        "desc": "Active/Inactive",
        "values": {
            "A": "Active Staff",
            "I": "Inactive Staff"
        }
    },
    "185": {
        "desc": "Preferred method of contact",
        "values": {
            "B": "Beeper Number",
            "C": "Cellular Phone Number",
            "E": "E-Mail Address (for backward compatibility)",
            "F": "FAX Number",
            "H": "Home Phone Number",
            "O": "Office Phone Number"
        }
    },
    "187": {
        "desc": "Provider billing",
        "values": {
            "I": "Institution bills for provider",
            "P": "Provider does own billing"
        }
    },
    "189": {
        "desc": "Ethnic Group",
        "values": {
            "H": "Hispanic or Latino",
            "N": "Not Hispanic or Latino",
            "U": "Unknown"
        }
    },
    "190": {
        "desc": "Address type",
        "values": {
            "B": "Firm/Business",
            "BA": "Bad address",
            "BDL": "Birth delivery location  (address where birth occurred)",
            "BI": "Billing Address",
            "BR": "Residence at birth (home address at time of birth)",
            "C": "Current Or Temporary",
            "F": "Country Of Origin",
            "H": "Home",
            "L": "Legal Address",
            "M": "Mailing",
            "N": "Birth (nee)  (birth address, not otherwise specified)",
            "O": "Office/Business",
            "P": "Permanent",
            "RH": "Registry home. Refers to the information system, typically managed by a public health agency, that stores patient information such as immunization histories or cancer data, regardless of where the patient obtains services.",
            "S": "Service Location",
            "SH": "Shipping Address",
            "V": "Vacation"
        }
    },
    "191": {
        "desc": "Type of referenced data",
        "values": {
            "AP": "Other application data, typically uninterpreted binary data (HL7 V2.3 and later)",
            "AU": "Audio data (HL7 V2.3 and later)",
            "FT": "Formatted text (HL7 V2.2 only)",
            "IM": "Image data (HL7 V2.3 and later)",
            "multipart": "MIME multipart package",
            "NS": "Non-scanned image (HL7 V2.2 only)",
            "SD": "Scanned document (HL7 V2.2 only)",
            "SI": "Scanned image (HL7 V2.2 only)",
            "TEXT": "Machine readable text document (HL7 V2.3.1 and later)",
            "TX": "Machine readable text document (HL7 V2.2 only)"
        }
    },
    "193": {
        "desc": "Amount class",
        "values": {
            "AT": "Amount",
            "LM": "Limit",
            "PC": "Percentage",
            "UL": "Unlimited"
        }
    },
    "200": {
        "desc": "Name type",
        "values": {
            "A": "Alias Name",
            "B": "Name at Birth",
            "C": "Adopted Name",
            "D": "Display Name",
            "I": "Licensing Name",
            "K": "Artist Name",
            "L": "Legal Name",
            "M": "Maiden Name",
            "N": "Nickname /\"Call me\" Name/Street Name",
            "P": "Name of Partner/Spouse (retained for backward compatibility only)",
            "R": "Registered Name (animals only)",
            "S": "Coded Pseudo-Name to ensure anonymity",
            "T": "Indigenous/Tribal/Community Name",
            "U": "Unspecified"
        }
    },
    "201": {
        "desc": "Telecommunication use code",
        "values": {
            "ASN": "Answering Service Number",
            "BPN": "Beeper Number",
            "EMR": "Emergency Number",
            "NET": "Network (email) Address",
            "ORN": "Other Residence Number",
            "PRN": "Primary Residence Number",
            "PRS": "Personal",
            "VHN": "Vacation Home Number",
            "WPN": "Work Number"
        }
    },
    "202": {
        "desc": "Telecommunication equipment type",
        "values": {
            "BP": "Beeper",
            "CP": "Cellular or Mobile Phone",
            "FX": "Fax",
            "Internet": "Internet Address",
            "MD": "Modem",
            "PH": "Telephone",
            "SAT": "Satellite Phone",
            "TDD": "Telecommunications Device for the Deaf",
            "TTY": "Teletypewriter",
            "X.400": "X.400 email address"
        }
    },
    "203": {
        "desc": "Identifier type",
        "values": {
            "AM": "American Express",
            "AMA": "American Medical Association Number",
            "AN": "Account number",
            "ANC": "Account number Creditor",
            "AND": "Account number debitor",
            "ANON": "Anonymous identifier",
            "ANT": "Temporary Account Number",
            "APRN": "Advanced Practice Registered Nurse number",
            "BA": "Bank Account Number",
            "BC": "Bank Card Number",
            "BCT": "Birth Certificate",
            "BR": "Birth registry number",
            "BRN": "Breed Registry Number",
            "CC": "Cost Center number",
            "CONM": "Change of Name Document",
            "CY": "County number",
            "CZ": "Citizenship Card",
            "DDS": "Dentist license number",
            "DEA": "Drug Enforcement Administration registration number",
            "DFN": "Drug Furnishing or prescriptive authority Number",
            "DI": "Diner's Club card",
            "DL": "Driver's license number",
            "DN": "Doctor number",
            "DO": "Osteopathic License number",
            "DP": "Diplomatic Passport",
            "DPM": "Podiatrist license number",
            "DR": "Donor Registration Number",
            "DS": "Discover Card",
            "EI": "Employee number",
            "EN": "Employer number",
            "ESN": "Staff Enterprise Number",
            "FI": "Facility ID",
            "GI": "Guarantor internal identifier",
            "GL": "General ledger number",
            "GN": "Guarantor external  identifier",
            "HC": "Health Card Number",
            "IND": "Indigenous/Aboriginal",
            "JHN": "Jurisdictional health number (Canada)",
            "LI": "Labor and industries number",
            "LN": "License number",
            "LR": "Local Registry ID",
            "MA": "Patient Medicaid number",
            "MB": "Member Number",
            "MC": "Patient's Medicare number",
            "MCD": "Practitioner Medicaid number",
            "MCN": "Microchip Number",
            "MCR": "Practitioner Medicare number",
            "MCT": "Marriage Certificate",
            "MD": "Medical License number",
            "MI": "Military ID number",
            "MR": "Medical record number",
            "MRT": "Temporary Medical Record Number",
            "MS": "MasterCard",
            "NCT": "Naturalization Certificate",
            "NE": "National employer identifier",
            "NH": "National Health Plan Identifier",
            "NI": "National unique individual identifier",
            "NII": "National Insurance Organization Identifier",
            "NIIP": "National Insurance Payor Identifier (Payor)",
            "NP": "Nurse practitioner number",
            "NPI": "National provider identifier",
            "OD": "Optometrist license number",
            "PA": "Physician Assistant number",
            "PC": "Parole Card",
            "PCN": "Penitentiary/correctional institution Number",
            "PE": "Living Subject Enterprise Number",
            "PEN": "Pension Number",
            "PI": "Patient internal identifier",
            "PN": "Person number",
            "PNT": "Temporary Living Subject Number",
            "PPIN": "Medicare/CMS Performing Provider Identification Number",
            "PPN": "Passport number",
            "PRC": "Permanent Resident Card Number",
            "PRN": "Provider number",
            "PT": "Patient external identifier",
            "QA": "QA number",
            "RI": "Resource identifier",
            "RN": "Registered Nurse Number",
            "RPH": "Pharmacist license number",
            "RR": "Railroad Retirement number",
            "RRI": "Regional registry ID",
            "RRP": "Railroad Retirement Provider",
            "SL": "State license",
            "SN": "Subscriber Number",
            "SP": "Study Permit",
            "SR": "State registry ID",
            "SS": "Social Security number",
            "TAX": "Tax ID number",
            "TN": "Treaty Number/ (Canada)",
            "TPR": "Temporary Permanent Resident (Canada)",
            "U": "Unspecified identifier",
            "UPIN": "Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers",
            "VN": "Visit number",
            "VP": "Visitor Permit",
            "VS": "VISA",
            "WC": "WIC identifier",
            "WCN": "Workers' Comp Number",
            "WP": "Work Permit",
            "XX": "Organization identifier"
        }
    },
    "204": {
        "desc": "Organizational name type",
        "values": {
            "A": "Alias name",
            "D": "Display name",
            "L": "Legal name",
            "SL": "Stock exchange listing name"
        }
    },
    "205": {
        "desc": "Price type",
        "values": {
            "AP": "administrative price or handling fee",
            "DC": "direct unit cost",
            "IC": "indirect unit cost",
            "PF": "professional fee for performing provider",
            "TF": "technology fee for use of equipment",
            "TP": "total price",
            "UP": "unit price, may be based on length of procedure or service"
        }
    },
    "206": {
        "desc": "Segment action code",
        "values": {
            "A": "Add/Insert",
            "D": "Delete",
            "U": "Update",
            "X": "No Change"
        }
    },
    "207": {
        "desc": "Processing mode",
        "values": {
            "A": "Archive",
            "I": "Initial load",
            "R": "Restore from archive",
            "T": "Current processing, transmitted at intervals (scheduled or on demand)"
        }
    },
    "208": {
        "desc": "Query Response Status",
        "values": {
            "AE": "Application error",
            "AR": "Application reject",
            "NF": "No data found, no errors",
            "OK": "Data found, no errors (this is the default)"
        }
    },
    "209": {
        "desc": "Relational operator",
        "values": {
            "CT": "Contains",
            "EQ": "Equal",
            "GE": "Greater than or equal",
            "GN": "Generic",
            "GT": "Greater than",
            "LE": "Less than or equal",
            "LT": "Less than",
            "NE": "Not Equal"
        }
    },
    "210": {
        "desc": "Relational conjunction",
        "values": {
            "AND": "And",
            "OR": "Or"
        }
    },
    "211": {
        "desc": "Alternate character sets",
        "values": {
            "8859/1": "The printable characters from the ISO 8859/1 Character set",
            "8859/15": "The printable characters from the ISO 8859/15 (Latin-15)",
            "8859/2": "The printable characters from the ISO 8859/2 Character set",
            "8859/3": "The printable characters from the ISO 8859/3 Character set",
            "8859/4": "The printable characters from the ISO 8859/4 Character set",
            "8859/5": "The printable characters from the ISO 8859/5 Character set",
            "8859/6": "The printable characters from the ISO 8859/6 Character set",
            "8859/7": "The printable characters from the ISO 8859/7 Character set",
            "8859/8": "The printable characters from the ISO 8859/8 Character set",
            "8859/9": "The printable characters from the ISO 8859/9 Character set",
            "ASCII": "The printable 7-bit ASCII character set.",
            "BIG-5": "Code for Taiwanese Character Set (BIG-5)",
            "CNS 11643-1992": "Code for Taiwanese Character Set (CNS 11643-1992)",
            "GB 18030-2000": "Code for Chinese Character Set (GB 18030-2000)",
            "ISO IR14": "Code for Information Exchange (one byte)(JIS X 0201-1976).",
            "ISO IR159": "Code of the supplementary Japanese Graphic Character set for information interchange (JIS X 0212-1990).",
            "ISO IR87": "Code for the Japanese Graphic Character set for information interchange (JIS X 0208-1990),",
            "KS X 1001": "Code for Korean Character Set (KS X 1001)",
            "UNICODE": "The world wide character standard from ISO/IEC 10646-1-1993",
            "UNICODE UTF-16": "UCS Transformation Format, 16-bit form",
            "UNICODE UTF-32": "UCS Transformation Format, 32-bit form",
            "UNICODE UTF-8": "UCS Transformation Format, 8-bit form"
        }
    },
    "213": {
        "desc": "Purge Status Code",
        "values": {
            "D": "The visit is marked for deletion and the user cannot enter new data against it.",
            "I": "The visit is marked inactive and the user cannot enter new data against it.",
            "P": "Marked for purge.  User is no longer able to update the visit."
        }
    },
    "214": {
        "desc": "Special Program Code",
        "values": {
            "CH": "Child Health Assistance",
            "ES": "Elective Surgery Program",
            "FP": "Family Planning",
            "O": "Other",
            "U": "Unknown"
        }
    },
    "215": {
        "desc": "Publicity Code",
        "values": {
            "F": "Family only",
            "N": "No Publicity",
            "O": "Other",
            "U": "Unknown"
        }
    },
    "216": {
        "desc": "Patient Status Code",
        "values": {
            "AI": "Active Inpatient",
            "DI": "Discharged Inpatient"
        }
    },
    "217": {
        "desc": "Visit Priority Code",
        "values": {
            "1": "Emergency",
            "2": "Urgent",
            "3": "Elective"
        }
    },
    "220": {
        "desc": "Living Arrangement",
        "values": {
            "A": "Alone",
            "F": "Family",
            "I": "Institution",
            "R": "Relative",
            "S": "Spouse Only",
            "U": "Unknown"
        }
    },
    "223": {
        "desc": "Living Dependency",
        "values": {
            "C": "Small Children Dependent",
            "M": "Medical Supervision Required",
            "O": "Other",
            "S": "Spouse Dependent",
            "U": "Unknown"
        }
    },
    "224": {
        "desc": "Transport Arranged",
        "values": {
            "A": "Arranged",
            "N": "Not Arranged",
            "U": "Unknown"
        }
    },
    "225": {
        "desc": "Escort Required",
        "values": {
            "N": "Not Required",
            "R": "Required",
            "U": "Unknown"
        }
    },
    "227": {
        "desc": "Manufacturers of Vaccines (code=MVX)",
        "values": {
            "AB": "Abbott Laboratories",
            "AD": "Adams Laboratories, Inc.",
            "ALP": "Alpha Therapeutic Corporation",
            "AR": "Armour",
            "AVB": "Aventis Behring L.L.C.",
            "AVI": "Aviron",
            "BA": "Baxter Healthcare Corporation",
            "BAH": "Baxter Healthcare Corporation",
            "BAY": "Bayer Corporation",
            "BP": "Berna Products",
            "BPC": "Berna Products Corporation",
            "CEN": "Centeon L.L.C.",
            "CHI": "Chiron Corporation",
            "CMP": "Celltech Medeva Pharmaceuticals",
            "CNJ": "Cangene Corporation",
            "CON": "Connaught",
            "DVC": "DynPort Vaccine Company, LLC",
            "EVN": "Evans Medical Limited",
            "GEO": "GeoVax Labs, Inc.",
            "GRE": "Greer Laboratories, Inc.",
            "IAG": "Immuno International AG",
            "IM": "Merieux",
            "IUS": "Immuno-U.S., Inc.",
            "JPN": "The Research Foundation for Microbial Diseases of Osaka University",
            "KGC": "Korea Green Cross Corporation",
            "LED": "Lederle",
            "MA": "Massachusetts Public Health Biologic Laboratories",
            "MBL": "Massachusetts Biologic Laboratories",
            "MED": "MedImmune, Inc.",
            "MIL": "Miles",
            "MIP": "Bioport Corporation",
            "MSD": "Merck & Co., Inc.",
            "NAB": "NABI",
            "NAV": "North American Vaccine, Inc.",
            "NOV": "Novartis Pharmaceutical Corporation",
            "NVX": "Novavax, Inc.",
            "NYB": "New York Blood Center",
            "ORT": "Ortho-Clinical Diagnostics",
            "OTC": "Organon Teknika Corporation",
            "OTH": "Other manufacturer",
            "PD": "Parkedale Pharmaceuticals",
            "PMC": "sanofi pasteur",
            "PRX": "Praxis Biologics",
            "PWJ": "PowderJect Pharmaceuticals",
            "SCL": "Sclavo, Inc.",
            "SI": "Swiss Serum and Vaccine Inst.",
            "SKB": "GlaxoSmithKline",
            "SOL": "Solvay Pharmaceuticals",
            "TAL": "Talecris Biotherapeutics",
            "UNK": "Unknown manufacturer",
            "USA": "United States Army Medical Research and Material Command",
            "VXG": "VaxGen",
            "WA": "Wyeth-Ayerst",
            "WAL": "Wyeth-Ayerst",
            "ZLB": "ZLB Behring"
        }
    },
    "228": {
        "desc": "Diagnosis Classification",
        "values": {
            "C": "Consultation",
            "D": "Diagnosis",
            "I": "Invasive procedure not classified elsewhere (I.V., catheter, etc.)",
            "M": "Medication (antibiotic)",
            "O": "Other",
            "R": "Radiological scheduling (not using ICDA codes)",
            "S": "Sign and symptom",
            "T": "Tissue diagnosis"
        }
    },
    "229": {
        "desc": "DRG Payor",
        "values": {
            "C": "Champus",
            "G": "Managed Care Organization",
            "M": "Medicare"
        }
    },
    "230": {
        "desc": "Procedure Functional Type",
        "values": {
            "A": "Anesthesia",
            "D": "Diagnostic procedure",
            "I": "Invasive procedure not classified elsewhere (e.g., IV, catheter, etc.)",
            "P": "Procedure for treatment (therapeutic, including operations)"
        }
    },
    "231": {
        "desc": "Student Status",
        "values": {
            "F": "Full-time student",
            "N": "Not a student",
            "P": "Part-time student"
        }
    },
    "232": {
        "desc": "Insurance Company Contact Reason",
        "values": {
            "01": "Medicare claim status",
            "02": "Medicaid claim status",
            "03": "Name/address change"
        }
    },
    "234": {
        "desc": "Report timing",
        "values": {
            "10D": "10 day report",
            "15D": "15 day report",
            "30D": "30 day report",
            "3D": "3 day report",
            "7D": "7 day report",
            "AD": "Additional information",
            "CO": "Correction",
            "DE": "Device evaluation",
            "PD": "Periodic",
            "RQ": "Requested information"
        }
    },
    "235": {
        "desc": "Report source",
        "values": {
            "C": "Clinical trial",
            "D": "Database/registry/poison control center",
            "E": "Distributor",
            "H": "Health professional",
            "L": "Literature",
            "M": "Manufacturer/marketing authority holder",
            "N": "Non-healthcare professional",
            "O": "Other",
            "P": "Patient",
            "R": "Regulatory agency"
        }
    },
    "236": {
        "desc": "Event Reported To",
        "values": {
            "D": "Distributor",
            "L": "Local facility/user facility",
            "M": "Manufacturer",
            "R": "Regulatory agency"
        }
    },
    "237": {
        "desc": "Event Qualification",
        "values": {
            "A": "Abuse",
            "B": "Unexpected beneficial effect",
            "D": "Dependency",
            "I": "Interaction",
            "L": "Lack of expect therapeutic effect",
            "M": "Misuse",
            "O": "Overdose",
            "W": "Drug withdrawal"
        }
    },
    "238": {
        "desc": "Event Seriousness",
        "values": {
            "N": "No",
            "S": "Significant",
            "Y": "Yes"
        }
    },
    "239": {
        "desc": "Event Expected",
        "values": {
            "N": "No",
            "U": "Unknown",
            "Y": "Yes"
        }
    },
    "240": {
        "desc": "Event Consequence",
        "values": {
            "C": "Congenital anomaly/birth defect",
            "D": "Death",
            "H": "Caused hospitalized",
            "I": "Incapacity which is significant, persistent or permanent",
            "J": "Disability which is significant, persistent or permanent",
            "L": "Life threatening",
            "O": "Other",
            "P": "Prolonged hospitalization",
            "R": "Required intervention to prevent permanent impairment/damage"
        }
    },
    "241": {
        "desc": "Patient Outcome",
        "values": {
            "D": "Died",
            "F": "Fully recovered",
            "N": "Not recovering/unchanged",
            "R": "Recovering",
            "S": "Sequelae",
            "U": "Unknown",
            "W": "Worsening"
        }
    },
    "242": {
        "desc": "Primary Observer's Qualification",
        "values": {
            "C": "Health care consumer/patient",
            "H": "Other health professional",
            "L": "Lawyer/attorney",
            "M": "Mid-level professional (nurse, nurse practitioner, physician's assistant)",
            "O": "Other non-health professional",
            "P": "Physician (osteopath, homeopath)",
            "R": "Pharmacist"
        }
    },
    "243": {
        "desc": "Identity May Be Divulged",
        "values": {
            "N": "No",
            "NA": "Not applicable",
            "Y": "Yes"
        }
    },
    "247": {
        "desc": "Status of Evaluation",
        "values": {
            "A": "Evaluation anticipated, but not yet begun",
            "C": "Product received in condition which made analysis impossible",
            "D": "Product discarded -- unable to follow up",
            "I": "Product remains implanted -- unable to follow up",
            "K": "Problem already known, no evaluation necessary",
            "O": "Other",
            "P": "Evaluation in progress",
            "Q": "Product under quarantine -- unable to follow up",
            "R": "Product under recall/corrective action",
            "U": "Product unavailable for follow up investigation",
            "X": "Product not made by company",
            "Y": "Evaluation completed"
        }
    },
    "248": {
        "desc": "Product source",
        "values": {
            "A": "Actual product involved in incident was evaluated",
            "L": "A product from the same lot as the actual product involved was evaluated",
            "N": "A product from a controlled/non-related inventory was evaluated",
            "R": "A product from a reserve sample was evaluated"
        }
    },
    "250": {
        "desc": "Relatedness Assessment",
        "values": {
            "H": "Highly probable",
            "I": "Improbable",
            "M": "Moderately probable",
            "N": "Not related",
            "S": "Somewhat probable"
        }
    },
    "251": {
        "desc": "Action Taken in Response to the Event",
        "values": {
            "DI": "Product dose or frequency of use increased",
            "DR": "Product dose or frequency of use reduced",
            "N": "None",
            "OT": "Other",
            "WP": "Product withdrawn permanently",
            "WT": "Product withdrawn temporarily"
        }
    },
    "252": {
        "desc": "Causality Observations",
        "values": {
            "AW": "Abatement of event after product withdrawn",
            "BE": "Event recurred after product reintroduced",
            "DR": "Dose response observed",
            "EX": "Alternative explanations for the event available",
            "IN": "Event occurred after product introduced",
            "LI": "Literature reports association of product with event",
            "OE": "Occurrence of event was confirmed by objective evidence",
            "OT": "Other",
            "PL": "Effect observed when patient receives placebo",
            "SE": "Similar events in past for this patient",
            "TC": "Toxic levels of product documented in blood or body fluids"
        }
    },
    "253": {
        "desc": "Indirect exposure mechanism",
        "values": {
            "B": "Breast milk",
            "F": "Father",
            "O": "Other",
            "P": "Transplacental",
            "X": "Blood product"
        }
    },
    "254": {
        "desc": "Kind of quantity",
        "values": {
            "ABS": "Absorbance",
            "ACNC": "Concentration, Arbitrary Substance",
            "ACT": "*Activity",
            "APER": "Appearance",
            "ARB": "*Arbitrary",
            "AREA": "Area",
            "ASPECT": "Aspect",
            "CACT": "*Catalytic Activity",
            "CCNT": "*Catalytic Content",
            "CCRTO": "Catalytic Concentration Ratio",
            "CFR": "*Catalytic Fraction",
            "CLAS": "Class",
            "CNC": "*Catalytic Concentration",
            "CNST": "*Constant",
            "COEF": "*Coefficient",
            "COLOR": "Color",
            "CONS": "Consistency",
            "CRAT": "*Catalytic Rate",
            "CRTO": "Catalytic Ratio",
            "DEN": "Density",
            "DEV": "Device",
            "DIFF": "*Difference",
            "ELAS": "Elasticity",
            "ELPOT": "Electrical Potential (Voltage)",
            "ELRAT": "Electrical current (amperage)",
            "ELRES": "Electrical Resistance",
            "ENGR": "Energy",
            "ENT": "*Entitic",
            "ENTCAT": "*Entitic Catalytic Activity",
            "ENTNUM": "*Entitic Number",
            "ENTSUB": "*Entitic Substance of Amount",
            "ENTVOL": "*Entitic Volume",
            "EQL": "Equilibrium",
            "FORCE": "Mechanical force",
            "FREQ": "Frequency",
            "IMP": "Impression/ interpretation of study",
            "KINV": "*Kinematic Viscosity",
            "LEN": "Length",
            "LINC": "*Length Increment",
            "LIQ": "*Liquefaction",
            "MASS": "*Mass",
            "MCNC": "*Mass Concentration",
            "MCNT": "Mass Content",
            "MCRTO": "*Mass Concentration Ratio",
            "MFR": "*Mass Fraction",
            "MGFLUX": "Magnetic flux",
            "MINC": "*Mass Increment",
            "MORPH": "Morphology",
            "MOTIL": "Motility",
            "MRAT": "*Mass Rate",
            "MRTO": "*Mass Ratio",
            "NCNC": "*Number Concentration",
            "NCNT": "*Number Content",
            "NFR": "*Number Fraction",
            "NRTO": "*Number Ratio",
            "NUM": "*Number",
            "OD": "Optical density",
            "OSMOL": "*Osmolality",
            "PRES": "*Pressure (Partial)",
            "PRID": "Presence/Identity/Existence",
            "PWR": "Power (wattage)",
            "RANGE": "*Ranges",
            "RATIO": "*Ratios",
            "RCRLTM": "*Reciprocal Relative Time",
            "RDEN": "*Relative Density",
            "REL": "*Relative",
            "RLMCNC": "*Relative Mass Concentration",
            "RLSCNC": "*Relative Substance Concentration",
            "RLTM": "*Relative Time",
            "SATFR": "*Saturation Fraction",
            "SCNC": "*Substance Concentration",
            "SCNCIN": "*Substance Concentration Increment",
            "SCNT": "*Substance Content",
            "SCNTR": "*Substance Content Rate",
            "SCRTO": "*Substance Concentration Ratio",
            "SFR": "*Substance Fraction",
            "SHAPE": "Shape",
            "SMELL": "Smell",
            "SRAT": "*Substance Rate",
            "SRTO": "*Substance Ratio",
            "SUB": "*Substance Amount",
            "SUSC": "*Susceptibility",
            "TASTE": "Taste",
            "TEMP": "*Temperature",
            "TEMPDF": "*Temperature Difference",
            "TEMPIN": "*Temperature Increment",
            "THRMCNC": "*Threshold Mass Concentration",
            "THRSCNC": "*Threshold Substance Concentration",
            "TIME": "*Time (e.g. seconds)",
            "TITR": "*Dilution Factor (Titer)",
            "TMDF": "*Time Difference",
            "TMSTP": "*Time Stamp-Date and Time",
            "TRTO": "*Time Ratio",
            "TYPE": "*Type",
            "VCNT": "*Volume Content",
            "VEL": "*Velocity",
            "VELRT": "*Velocity Ratio",
            "VFR": "*Volume Fraction",
            "VISC": "*Viscosity",
            "VOL": "*Volume",
            "VRAT": "*Volume Rate",
            "VRTO": "*Volume Ratio"
        }
    },
    "255": {
        "desc": "Duration categories",
        "values": {
            "*": "(asterisk) Life of the \"unit.\"  Used for blood products.",
            "12H": "12 hours",
            "1H": "1 hour",
            "1L": "1 months (30 days)",
            "1W": "1 week",
            "2.5H": "2?? hours",
            "24H": "24 hours",
            "2D": "2 days",
            "2H": "2 hours",
            "2L": "2 months",
            "2W": "2 weeks",
            "30M": "30 minutes",
            "3D": "3 days",
            "3H": "3 hours",
            "3L": "3 months",
            "3W": "3 weeks",
            "4D": "4 days",
            "4H": "4 hours",
            "4W": "4 weeks",
            "5D": "5 days",
            "5H": "5 hours",
            "6D": "6 days",
            "6H": "6 hours",
            "7H": "7 hours",
            "8H": "8 hours",
            "PT": "To identify measures at a point in time.  This is a synonym for \"spot\" or \"random\" as applied to urine measurements."
        }
    },
    "256": {
        "desc": "Time delay post challenge",
        "values": {
            "10D": "10 days",
            "10M": "10 minutes post challenge",
            "12H": "12 hours post challenge",
            "15M": "15 minutes post challenge",
            "1H": "1 hour post challenge",
            "1L": "1 month (30 days) post challenge",
            "1M": "1 minute post challenge",
            "1W": "1 week",
            "2.5H": "2 ?? hours post challenge",
            "20M": "20 minutes post challenge",
            "24H": "24 hours post challenge",
            "25M": "25 minutes post challenge",
            "2D": "2 days",
            "2H": "2 hours post challenge",
            "2L": "2 months (60 days) post challenge",
            "2M": "2 minutes post challenge",
            "2W": "2 weeks",
            "30M": "30 minutes post challenge",
            "3D": "3 days",
            "3H": "3 hours post challenge",
            "3L": "3 months (90 days) post challenge",
            "3M": "3 minutes post challenge",
            "3W": "3 weeks",
            "4D": "4 days",
            "4H": "4 hours post challenge",
            "4M": "4 minutes post challenge",
            "4W": "4 weeks",
            "5D": "5 days",
            "5H": "5  hours post challenge",
            "5M": "5 minutes post challenge",
            "6D": "6 days",
            "6H": "6 hours post challenge",
            "6M": "6 minutes post challenge",
            "7D": "7 days",
            "7H": "7 hours post challenge",
            "7M": "7 minutes post challenge",
            "8H": "8 hours post challenge",
            "8H SHIFT": "8 hours aligned on nursing shifts",
            "8M": "8 minutes post challenge",
            "9M": "9 minutes post challenge",
            "BS": "Baseline (time just before the challenge)",
            "PEAK": "The time post drug dose at which the highest drug level is reached (differs by drug)",
            "RANDOM": "Time from the challenge, or dose not specified. (random)",
            "TROUGH": "The time post drug dose at which the lowest drug level is reached (varies with drug)"
        }
    },
    "257": {
        "desc": "Nature of challenge",
        "values": {
            "CFST": "Fasting (no calorie intake) for the period specified in the time component of the term, e.g., 1H POST CFST",
            "EXCZ": "Exercise undertaken as challenge (can be quantified)",
            "FFST": "No fluid intake for the period specified in the time component of the term"
        }
    },
    "258": {
        "desc": "Relationship modifier",
        "values": {
            "BPU": "Blood product unit",
            "CONTROL": "Control",
            "DONOR": "Donor",
            "PATIENT": "Patient"
        }
    },
    "259": {
        "desc": "Modality",
        "values": {
            "AS": "Angioscopy",
            "BS": "Biomagnetic imaging",
            "CD": "Color flow Doppler",
            "CP": "Colposcopy",
            "CR": "Computed radiography",
            "CS": "Cystoscopy",
            "CT": "Computed tomography",
            "DD": "Duplex Doppler",
            "DG": "Diapanography",
            "DM": "Digital microscopy",
            "EC": "Echocardiography",
            "ES": "Endoscopy",
            "FA": "Fluorescein angiography",
            "FS": "Fundoscopy",
            "LP": "Laparoscopy",
            "LS": "Laser surface scan",
            "MA": "Magnetic resonance angiography",
            "MS": "Magnetic resonance spectroscopy",
            "NM": "Nuclear Medicine (radioisotope study)",
            "OT": "Other",
            "PT": "Positron emission tomography (PET)",
            "RF": "Radio fluoroscopy",
            "ST": "Single photon emission computed tomography (SPECT)",
            "TG": "Thermography",
            "US": "Ultrasound",
            "XA": "X-ray Angiography"
        }
    },
    "260": {
        "desc": "Patient location type",
        "values": {
            "B": "Bed",
            "C": "Clinic",
            "D": "Department",
            "E": "Exam Room",
            "L": "Other Location",
            "N": "Nursing Unit",
            "O": "Operating Room",
            "R": "Room"
        }
    },
    "261": {
        "desc": "Location Equipment",
        "values": {
            "EEG": "Electro-Encephalogram",
            "EKG": "Electro-Cardiogram",
            "INF": "Infusion pump",
            "IVP": "IV pump",
            "OXY": "Oxygen",
            "SUC": "Suction",
            "VEN": "Ventilator",
            "VIT": "Vital signs monitor"
        }
    },
    "262": {
        "desc": "Privacy Level",
        "values": {
            "F": "Isolation",
            "J": "Private room - medically justified",
            "P": "Private room",
            "Q": "Private room - due to overflow",
            "S": "Semi-private room",
            "W": "Ward"
        }
    },
    "263": {
        "desc": "Level of Care",
        "values": {
            "A": "Ambulatory",
            "C": "Critical care",
            "E": "Emergency",
            "F": "Isolation",
            "N": "Intensive care",
            "R": "Routine",
            "S": "Surgery"
        }
    },
    "265": {
        "desc": "Specialty Type",
        "values": {
            "ALC": "Allergy",
            "AMB": "Ambulatory",
            "CAN": "Cancer",
            "CAR": "Coronary/cardiac care",
            "CCR": "Critical care",
            "CHI": "Chiropractic",
            "EDI": "Education",
            "EMR": "Emergency",
            "FPC": "Family planning",
            "INT": "Intensive care",
            "ISO": "Isolation",
            "NAT": "Naturopathic",
            "NBI": "Newborn, nursery, infants",
            "OBG": "Obstetrics, gynecology",
            "OBS": "Observation",
            "OTH": "Other specialty",
            "PED": "Pediatrics",
            "PHY": "General/family practice",
            "PIN": "Pediatric/neonatal intensive care",
            "PPS": "Pediatric psychiatric",
            "PRE": "Pediatric rehabilitation",
            "PSI": "Psychiatric intensive care",
            "PSY": "Psychiatric",
            "REH": "Rehabilitation",
            "SUR": "Surgery",
            "WIC": "Walk-in clinic"
        }
    },
    "267": {
        "desc": "Days of the week",
        "values": {
            "FRI": "Friday",
            "MON": "Monday",
            "SAT": "Saturday",
            "SUN": "Sunday",
            "THU": "Thursday",
            "TUE": "Tuesday",
            "WED": "Wednesday"
        }
    },
    "268": {
        "desc": "Override",
        "values": {
            "A": "Override allowed",
            "R": "Override required",
            "X": "Override not allowed"
        }
    },
    "269": {
        "desc": "Charge On Indicator",
        "values": {
            "O": "Charge on Order",
            "R": "Charge on Result"
        }
    },
    "270": {
        "desc": "Document Type",
        "values": {
            "AR": "Autopsy report",
            "CD": "Cardiodiagnostics",
            "CN": "Consultation",
            "DI": "Diagnostic imaging",
            "DS": "Discharge summary",
            "ED": "Emergency department report",
            "HP": "History and physical examination",
            "OP": "Operative report",
            "PC": "Psychiatric consultation",
            "PH": "Psychiatric history and physical examination",
            "PN": "Procedure note",
            "PR": "Progress note",
            "SP": "Surgical pathology",
            "TS": "Transfer summary"
        }
    },
    "271": {
        "desc": "Document completion status",
        "values": {
            "AU": "Authenticated",
            "DI": "Dictated",
            "DO": "Documented",
            "IN": "Incomplete",
            "IP": "In Progress",
            "LA": "Legally authenticated",
            "PA": "Pre-authenticated"
        }
    },
    "272": {
        "desc": "Document Confidentiality Status",
        "values": {
            "R": "Restricted",
            "U": "Usual control",
            "V": "Very restricted"
        }
    },
    "273": {
        "desc": "Document Availability Status",
        "values": {
            "AV": "Available for patient care",
            "CA": "Deleted",
            "OB": "Obsolete",
            "UN": "Unavailable for patient care"
        }
    },
    "275": {
        "desc": "Document Storage Status",
        "values": {
            "AA": "Active and archived",
            "AC": "Active",
            "AR": "Archived (not active)",
            "PU": "Purged"
        }
    },
    "276": {
        "desc": "Appointment reason codes",
        "values": {
            "CHECKUP": "A routine check-up, such as an annual physical",
            "EMERGENCY": "Emergency appointment",
            "FOLLOWUP": "A follow up visit from a previous appointment",
            "ROUTINE": "Routine appointment - default if not valued",
            "WALKIN": "A previously unscheduled walk-in visit"
        }
    },
    "277": {
        "desc": "Appointment Type Codes",
        "values": {
            "Complete": "A request to add a completed appointment, used to maintain records of completed appointments that did not appear in the schedule (e.g., STAT, walk-in, etc.)",
            "Normal": "Routine schedule request type - default if not valued",
            "Tentative": "A request for a tentative (e.g., \"penciled in\") appointment"
        }
    },
    "278": {
        "desc": "Filler status codes",
        "values": {
            "Blocked": "The indicated time slot(s) is(are) blocked",
            "Booked": "The indicated appointment is booked",
            "Cancelled": "The indicated appointment was stopped from occurring (canceled prior to starting)",
            "Complete": "The indicated appointment has completed normally (was not discontinued, canceled, or deleted)",
            "Dc": "The indicated appointment was discontinued (DC'ed while in progress, discontinued parent appointment, or discontinued child appointment)",
            "Deleted": "The indicated appointment was deleted from the filler application",
            "Noshow": "The patient did not show up for the appointment",
            "Overbook": "The appointment has been confirmed; however it is confirmed in an overbooked state",
            "Pending": "Appointment has not yet been confirmed",
            "Started": "The indicated appointment has begun and is currently in progress",
            "Waitlist": "Appointment has been placed on a waiting list for a particular slot, or set of slots"
        }
    },
    "279": {
        "desc": "Allow Substitution Codes",
        "values": {
            "Confirm": "Contact the Placer Contact Person prior to making any substitutions of this resource",
            "No": "Substitution of this resource is not allowed",
            "Notify": "Notify the Placer Contact Person, through normal institutional procedures, that a substitution of this resource has been made",
            "Yes": "Substitution of this resource is allowed"
        }
    },
    "280": {
        "desc": "Referral priority",
        "values": {
            "A": "ASAP",
            "R": "Routine",
            "S": "STAT"
        }
    },
    "281": {
        "desc": "Referral type",
        "values": {
            "Hom": "Home Care",
            "Lab": "Laboratory",
            "Med": "Medical",
            "Psy": "Psychiatric",
            "Rad": "Radiology",
            "Skn": "Skilled Nursing"
        }
    },
    "282": {
        "desc": "Referral disposition",
        "values": {
            "AM": "Assume Management",
            "RP": "Return Patient After Evaluation",
            "SO": "Second Opinion",
            "WR": "Send Written Report"
        }
    },
    "283": {
        "desc": "Referral status",
        "values": {
            "A": "Accepted",
            "E": "Expired",
            "P": "Pending",
            "R": "Rejected"
        }
    },
    "284": {
        "desc": "Referral category",
        "values": {
            "A": "Ambulatory",
            "E": "Emergency",
            "I": "Inpatient",
            "O": "Outpatient"
        }
    },
    "286": {
        "desc": "Provider role",
        "values": {
            "CP": "Consulting Provider",
            "PP": "Primary Care Provider",
            "RP": "Referring Provider",
            "RT": "Referred to Provider"
        }
    },
    "287": {
        "desc": "Problem/goal action code",
        "values": {
            "AD": "ADD",
            "CO": "CORRECT",
            "DE": "DELETE",
            "LI": "LINK",
            "UC": "UNCHANGED *",
            "UN": "UNLINK",
            "UP": "UPDATE"
        }
    },
    "291": {
        "desc": "Subtype of referenced data",
        "values": {
            "x-hl7-cda-level-one": "HL7 Clinical Document Architecture Level One document"
        }
    },
    "292": {
        "desc": "Vaccines administered (code = CVX) (parenteral, unless oral is noted)",
        "values": {
            "10": "IPV",
            "11": "pertussis",
            "12": "diphtheria antitoxin",
            "13": "TIG",
            "14": "IG, NOS",
            "15": "influenza, split (incl. purified surface antigen)",
            "16": "influenza, whole",
            "17": "Hib, NOS",
            "18": "rabies, intramuscular injection",
            "19": "BCG",
            "20": "DTaP",
            "21": "varicella",
            "22": "DTP-Hib",
            "23": "plague",
            "24": "anthrax",
            "25": "typhoid, oral",
            "26": "cholera",
            "27": "botulinum antitoxin",
            "28": "DT (pediatric)",
            "29": "CMVIG",
            "30": "HBIG",
            "31": "Hep A, pediatric, NOS",
            "32": "meningococcal",
            "33": "pneumococcal",
            "34": "RIG",
            "35": "tetanus toxoid",
            "36": "VZIG",
            "37": "yellow fever",
            "38": "rubella/mumps",
            "39": "Japanese encephalitis",
            "40": "rabies, intradermal injection",
            "41": "typhoid, parenteral",
            "42": "Hep B, adolescent/high risk infant2",
            "43": "Hep B, adult4",
            "44": "Hep B, dialysis",
            "45": "Hep B, NOS",
            "46": "Hib (PRP-D)",
            "47": "Hib (HbOC)",
            "48": "Hib (PRP-T)",
            "49": "Hib (PRP-OMP)",
            "50": "DTaP-Hib",
            "51": "Hib-Hep B",
            "52": "Hep A, adult",
            "53": "typhoid, parenteral, AKD (U.S. military)",
            "54": "adenovirus, type 4",
            "55": "adenovirus, type 7",
            "56": "dengue fever",
            "57": "hantavirus",
            "58": "Hep C",
            "59": "Hep E",
            "60": "herpes simplex 2",
            "61": "HIV",
            "62": "HPV, quadrivalent",
            "63": "Junin virus",
            "64": "leishmaniasis",
            "65": "leprosy",
            "66": "Lyme disease",
            "67": "malaria",
            "68": "melanoma",
            "69": "parainfluenza-3",
            "70": "Q fever",
            "71": "RSV-IGIV",
            "72": "rheumatic fever",
            "73": "Rift Valley fever",
            "74": "rotavirus, tetravalent",
            "75": "vaccinia (smallpox)",
            "76": "Staphylococcus bacterio lysate",
            "77": "tick-borne encephalitis",
            "78": "tularemia vaccine",
            "79": "vaccinia immune globulin",
            "80": "VEE, live",
            "81": "VEE, inactivated",
            "82": "adenovirus, NOS1",
            "83": "Hep A, ped/adol, 2 dose",
            "84": "Hep A, ped/adol, 3 dose",
            "85": "Hep A, NOS",
            "86": "IG",
            "87": "IGIV",
            "88": "influenza, NOS",
            "89": "polio, NOS",
            "90": "rabies, NOS",
            "91": "typhoid, NOS",
            "92": "VEE, NOS",
            "93": "RSV-MAb",
            "94": "MMRV",
            "95": "TST-OT tine test",
            "96": "TST-PPD intradermal",
            "97": "TST-PPD tine test",
            "98": "TST, NOS",
            "99": "RESERVED - do not use3",
            "100": "pneumococcal conjugate",
            "101": "typhoid, ViCPs",
            "102": "DTP-Hib-Hep B",
            "103": "meningococcal C conjugate",
            "104": "Hep A-Hep B",
            "105": "vaccinia (smallpox) diluted",
            "106": "DTaP, 5 pertussis antigens6",
            "107": "DTaP, NOS",
            "108": "meningococcal, NOS",
            "109": "pneumococcal, NOS",
            "110": "DTaP-Hep B-IPV",
            "111": "influenza, live, intranasal",
            "112": "tetanus toxoid, NOS",
            "113": "Td (adult)",
            "114": "meningococcal A,C,Y,W-135 diphtheria conjugate",
            "115": "Tdap",
            "116": "rotavirus, pentavalent",
            "117": "VZIG (IND)",
            "118": "HPV, bivalent",
            "119": "rotavirus, monovalent",
            "120": "DTaP-Hib-IPV",
            "121": "zoster",
            "122": "rotavirus, NOS1",
            "998": "no vaccine administered5",
            "999": "unknown",
            "01": "DTP",
            "02": "OPV",
            "03": "MMR",
            "04": "M/R",
            "05": "measles",
            "06": "rubella",
            "07": "mumps",
            "08": "Hep B, adolescent or pediatric",
            "09": "Td (adult)"
        }
    },
    "294": {
        "desc": "Time selection criteria parameter class codes",
        "values": {
            "Fri": "An indicator that Friday is or is not preferred for the day on which the appointment will occur.",
            "Mon": "An indicator that Monday is or is not preferred for the day on which the appointment will occur.",
            "Prefend": "An indicator that there is a preferred end time for the appointment request, service or resource.",
            "Prefstart": "An indicator that there is a preferred start time for the appointment request, service or resource.",
            "Sat": "An indicator that Saturday is or is not preferred for the day on which the appointment will occur.",
            "Sun": "An indicator that Sunday is or is not preferred for the day on which the appointment will occur.",
            "Thu": "An indicator that Thursday is or is not preferred for the day on which the appointment will occur.",
            "Tue": "An indicator that Tuesday is or is not preferred for the day on which the appointment will occur.",
            "Wed": "An indicator that Wednesday is or is not preferred for the day on which the appointment will occur."
        }
    },
    "298": {
        "desc": "CP range type",
        "values": {
            "F": "Flat-rate. Apply the entire price to this interval, do not pro-rate the price if the full interval has not occurred/been consumed",
            "P": "Pro-rate. Apply this price to this interval, pro-rated by whatever portion of the interval has occurred/been consumed"
        }
    },
    "299": {
        "desc": "Encoding",
        "values": {
            "A": "No encoding - data are displayable ASCII characters.",
            "Base64": "Encoding as defined by MIME (Multipurpose Internet Mail Extensions) standard RFC 1521. Four consecutive ASCII characters represent three consecutive octets of binary data. Base64 utilizes a 65-character subset of US-ASCII, consisting of both the upper and",
            "Hex": "Hexadecimal encoding - consecutive pairs of hexadecimal digits represent consecutive single octets."
        }
    },
    "301": {
        "desc": "Universal ID type",
        "values": {
            "DNS": "An Internet dotted name. Either in ASCII or as integers",
            "GUID": "Same as UUID.",
            "HCD": "The CEN Healthcare Coding Scheme Designator. (Identifiers used in DICOM follow this assignment scheme.)",
            "HL7": "Reserved for future HL7 registration schemes",
            "ISO": "An International Standards Organization Object Identifier",
            "L": "Reserved for locally defined coding schemes.",
            "M": "Reserved for locally defined coding schemes.",
            "N": "Reserved for locally defined coding schemes.",
            "Random": "Usually a base64 encoded string of random bits.<p>The uniqueness depends on the length of the bits. Mail systems often generate ASCII string \"unique names,\" from a combination of random bits and system names. Obviously, such identifiers will not be constr",
            "URI": "Uniform Resource Identifier",
            "UUID": "The DCE Universal Unique Identifier",
            "x400": "An X.400 MHS format identifier",
            "x500": "An X.500 directory name"
        }
    },
    "305": {
        "desc": "Person location type",
        "values": {
            "C": "Clinic",
            "D": "Department",
            "H": "Home",
            "N": "Nursing Unit",
            "O": "Provider's Office",
            "P": "Phone",
            "S": "SNF"
        }
    },
    "309": {
        "desc": "Coverage Type",
        "values": {
            "B": "Both hospital and physician",
            "H": "Hospital/institutional",
            "P": "Physician/professional",
            "RX": "Pharmacy"
        }
    },
    "311": {
        "desc": "Job Status",
        "values": {
            "O": "Other",
            "P": "Permanent",
            "T": "Temporary",
            "U": "Unknown"
        }
    },
    "315": {
        "desc": "Living Will Code",
        "values": {
            "F": "Yes, patient has a living will but it is not on file",
            "I": "No, patient does not have a living will but information was provided",
            "N": "No, patient does not have a living will and no information was provided",
            "U": "Unknown",
            "Y": "Yes, patient has a living will"
        }
    },
    "316": {
        "desc": "Organ Donor Code",
        "values": {
            "F": "Yes, patient is a documented donor, but documentation is not on file",
            "I": "No, patient is not a documented donor, but information was provided",
            "N": "No, patient has not agreed to be a donor",
            "P": "Patient leaves organ donation decision to a specific person",
            "R": "Patient leaves organ donation decision to relatives",
            "U": "Unknown",
            "Y": "Yes, patient is a documented donor and documentation is on file"
        }
    },
    "317": {
        "desc": "Annotations",
        "values": {
            "9900": "Pace spike",
            "9901": "SAS marker",
            "9902": "Sense marker",
            "9903": "Beat marker",
            "9904": "etc."
        }
    },
    "321": {
        "desc": "Dispense Method",
        "values": {
            "AD": "Automatic Dispensing",
            "F": "Floor Stock",
            "TR": "Traditional",
            "UD": "Unit Dose"
        }
    },
    "322": {
        "desc": "Completion Status",
        "values": {
            "CP": "Complete",
            "NA": "Not Administered",
            "PA": "Partially Administered",
            "RE": "Refused"
        }
    },
    "324": {
        "desc": "Location characteristic ID",
        "values": {
            "GEN": "Gender of patient(s)",
            "IMP": "Implant: can be used for radiation implant patients",
            "INF": "Infectious disease: this location can be used for isolation",
            "LCR": "Level of care",
            "LIC": "Licensed",
            "OVR": "Overflow",
            "PRL": "Privacy level: indicating the level of private versus non-private room",
            "SET": "Bed is set up",
            "SHA": "Shadow: a temporary holding location that does not physically exist",
            "SMK": "Smoking",
            "STF": "Bed is staffed",
            "TEA": "Teaching location"
        }
    },
    "325": {
        "desc": "Location Relationship ID",
        "values": {
            "ALI": "Location Alias(es)",
            "DTY": "Nearest  dietary location",
            "LAB": "Nearest  lab",
            "LB2": "Second nearest lab",
            "PAR": "Parent location",
            "RX": "Nearest  pharmacy",
            "RX2": "Second nearest pharmacy"
        }
    },
    "326": {
        "desc": "Visit Indicator",
        "values": {
            "A": "Account level (default)",
            "V": "Visit level"
        }
    },
    "329": {
        "desc": "Quantity method",
        "values": {
            "A": "Actual count",
            "E": "Estimated (see comment)"
        }
    },
    "330": {
        "desc": "Marketing basis",
        "values": {
            "510E": "510 (K) exempt",
            "510K": "510 (K)",
            "522S": "Post marketing study (522)",
            "PMA": "Premarketing authorization",
            "PRE": "Preamendment",
            "TXN": "Transitional"
        }
    },
    "331": {
        "desc": "Facility type",
        "values": {
            "A": "Agent for a foreign manufacturer",
            "D": "Distributor",
            "M": "Manufacturer",
            "U": "User"
        }
    },
    "332": {
        "desc": "Source type",
        "values": {
            "A": "Accept",
            "I": "Initiate"
        }
    },
    "334": {
        "desc": "Disabled Person Code",
        "values": {
            "AP": "Associated party",
            "GT": "Guarantor",
            "IN": "Insured",
            "PT": "Patient"
        }
    },
    "335": {
        "desc": "Repeat pattern",
        "values": {
            "A": "Ante (before)",
            "BID": "twice a day at institution-specified times",
            "C": "service is provided continuously between start time and stop time",
            "D": "Cibus Diurnus (lunch)",
            "I": "Inter",
            "M": "Cibus Matutinus (breakfast)",
            "Once": "one time only.",
            "P": "Post (after)",
            "PRN": "given as needed",
            "QAM": "in the morning at institution-specified time",
            "QHS": "every day before the hour of sleep",
            "QID": "four times a day at institution-specified times",
            "QOD": "every other day",
            "QPM": "in the evening at institution-specified time",
            "QSHIFT": "during each of three eight-hour shifts at institution-specified times",
            "TID": "three times a day at institution-specified times",
            "V": "Cibus Vespertinus (dinner)"
        }
    },
    "336": {
        "desc": "Referral reason",
        "values": {
            "O": "Provider Ordered",
            "P": "Patient Preference",
            "S": "Second Opinion",
            "W": "Work Load"
        }
    },
    "337": {
        "desc": "Certification status",
        "values": {
            "C": "Certified",
            "E": "Eligible"
        }
    },
    "338": {
        "desc": "Practitioner ID number type",
        "values": {
            "CY": "County number",
            "DEA": "Drug Enforcement Agency no.",
            "GL": "General ledger number",
            "L&I": "Labor and industries number",
            "LI": "Labor and industries number",
            "MCD": "Medicaid number",
            "MCR": "Medicare number",
            "QA": "QA number",
            "SL": "State license number",
            "TAX": "Tax ID number",
            "TRL": "Training license number",
            "UPIN": "Unique physician ID no."
        }
    },
    "339": {
        "desc": "Advanced Beneficiary Notice Code",
        "values": {
            "1": "Service is subject to medical necessity procedures",
            "2": "Patient has been informed of responsibility, and agrees to pay for service",
            "3": "Patient has been informed of responsibility, and asks that the payer be billed",
            "4": "Advanced Beneficiary Notice has not been signed"
        }
    },
    "344": {
        "desc": "Patient's Relationship to Insured",
        "values": {
            "10": "Handicapped dependent",
            "11": "Organ donor",
            "12": "Cadaver donor",
            "13": "Grandchild",
            "14": "Niece/nephew",
            "15": "Injured plaintiff",
            "16": "Sponsored dependent",
            "17": "Minor dependent of a minor dependent",
            "18": "Parent",
            "19": "Grandparent",
            "01": "Patient is insured",
            "02": "Spouse",
            "03": "Natural child/insured financial responsibility",
            "04": "Natural child/Insured does not have financial responsibility",
            "05": "Step child",
            "06": "Foster child",
            "07": "Ward of the court",
            "08": "Employee",
            "09": "Unknown"
        }
    },
    "347": {
        "desc": "State/province",
        "values": {
            "AB": "Alberta  (US and Canada)",
            "MI": "Michigan  (US)"
        }
    },
    "353": {
        "desc": "CWE statuses",
        "values": {
            "NA": "Not applicable",
            "NASK": "Not asked",
            "NAV": "Not available",
            "U": "Unknown",
            "UASK": "Asked but Unknown"
        }
    },
    "354": {
        "desc": "Message structure",
        "values": {
            "ACK": "Varies",
            "ADR_A19": "A19",
            "ADT_A01": "A01, A04, A08, A13",
            "ADT_A02": "A02",
            "ADT_A03": "A03",
            "ADT_A05": "A05, A14, A28, A31",
            "ADT_A06": "A06, A07",
            "ADT_A09": "A09, A10, A11",
            "ADT_A12": "A12",
            "ADT_A15": "A15",
            "ADT_A16": "A16",
            "ADT_A17": "A17",
            "ADT_A18": "A18",
            "ADT_A20": "A20",
            "ADT_A21": "A21, A22, A23, A25, A26, A27, A29, A32, A33",
            "ADT_A24": "A24",
            "ADT_A30": "A30, A34, A35, A36, A46, A47, A48, A49",
            "ADT_A37": "A37",
            "ADT_A38": "A38",
            "ADT_A39": "A39, A40, A41, A42",
            "ADT_A43": "A43, A44",
            "ADT_A45": "A45",
            "ADT_A50": "A50, A51",
            "ADT_A52": "A52, A53",
            "ADT_A54": "A54, A55",
            "ADT_A60": "A60",
            "ADT_A61": "A61, A62",
            "BAR_P01": "P01",
            "BAR_P02": "P02",
            "BAR_P05": "P05",
            "BAR_P06": "P06",
            "BAR_P10": "P10",
            "BAR_P12": "P12",
            "BPS_O29": "O29",
            "BRP_O30": "O30",
            "BRT_O32": "O32",
            "BTS_O31": "O31",
            "CRM_C01": "C01, C02, C03, C04, C05, C06, C07, C08",
            "CSU_C09": "C09, C10, C11, C12",
            "DFT_P03": "P03",
            "DFT_P11": "P11",
            "DOC_T12": "T12",
            "DSR_Q01": "Q01",
            "DSR_Q03": "Q03",
            "EAC_U07": "U07",
            "EAN_U09": "U09",
            "EAR_U08": "U08",
            "EHC_E01": "E01",
            "EHC_E02": "E02",
            "EHC_E04": "E04",
            "EHC_E10": "E10",
            "EHC_E12": "E12",
            "EHC_E13": "E13",
            "EHC_E15": "E15",
            "EHC_E20": "E20",
            "EHC_E21": "E21",
            "EHC_E24": "E24",
            "ESR_U02": "U02",
            "ESU_U01": "U01",
            "INR_U06": "U06",
            "INU_U05": "U05",
            "LSU_U12": "U12, U13",
            "MDM_T01": "T01, T03, T05, T07, T09, T11",
            "MDM_T02": "T02, T04, T06, T08, T10",
            "MFK_M01": "M01, M02, M03, M04, M05, M06, M07, M08, M09, M10, M11",
            "MFN_M01": "M01",
            "MFN_M02": "M02",
            "MFN_M03": "M03",
            "MFN_M04": "M04",
            "MFN_M05": "M05",
            "MFN_M06": "M06",
            "MFN_M07": "M07",
            "MFN_M08": "M08",
            "MFN_M09": "M09",
            "MFN_M10": "M10",
            "MFN_M11": "M11",
            "MFN_M12": "M12",
            "MFN_M13": "M13",
            "MFN_M15": "M15",
            "MFN_M16": "M16",
            "MFN_M17": "M17",
            "MFQ_M01": "M01, M02, M03, M04, M05, M06",
            "MFR_M01": "M01, M02, M03,",
            "MFR_M04": "M04",
            "MFR_M05": "M05",
            "MFR_M06": "M06",
            "MFR_M07": "M07",
            "NMD_N02": "N02",
            "NMQ_N01": "N01",
            "NMR_N01": "N01",
            "OMB_O27": "O27",
            "OMD_O03": "O03",
            "OMG_O19": "O19",
            "OMI_O23": "O23",
            "OML_O21": "O21",
            "OML_O33": "O33",
            "OML_O35": "O35",
            "OMN_O07": "O07",
            "OMP_O09": "O09",
            "OMS_O05": "O05",
            "OPL_O37": "O37",
            "OPR_O38": "O38",
            "OPU_R25": "R25",
            "ORB_O28": "O28",
            "ORD_O04": "O04",
            "ORF_R04": "R04",
            "ORG_O20": "O20",
            "ORI_O24": "O24",
            "ORL_O22": "O22",
            "ORL_O34": "O34",
            "ORL_O36": "O36",
            "ORM_O01": "O01",
            "ORN_O08": "O08",
            "ORP_O10": "O10",
            "ORR_O02": "O02",
            "ORS_O06": "O06",
            "ORU_R01": "R01",
            "ORU_R30": "R30",
            "ORU_W01": "W01",
            "OSQ_Q06": "Q06",
            "OSR_Q06": "Q06",
            "OUL_R21": "R21",
            "OUL_R22": "R22",
            "OUL_R23": "R23",
            "OUL_R24": "R24",
            "PEX_P07": "P07, P08",
            "PGL_PC6": "PC6, PC7, PC8",
            "PMU_B01": "B01, B02",
            "PMU_B03": "B03",
            "PMU_B04": "B04, B05, B06",
            "PMU_B07": "B07",
            "PMU_B08": "B08",
            "PPG_PCG": "PCC, PCG, PCH, PCJ",
            "PPP_PCB": "PCB, PCD",
            "PPR_PC1": "PC1, PC2, PC3",
            "PPT_PCL": "PCL",
            "PPV_PCA": "PCA",
            "PRR_PC5": "PC5",
            "PTR_PCF": "PCF",
            "QBP_E03": "E03",
            "QBP_E22": "E22",
            "QBP_Q11": "Q11",
            "QBP_Q13": "Q13",
            "QBP_Q15": "Q15",
            "QBP_Q21": "Q21, Q22, Q23,Q24, Q25",
            "QCK_Q02": "Q02",
            "QCN_J01": "J01, J02",
            "QRF_W02": "W02",
            "QRY_A19": "A19",
            "QRY_PC4": "PC4, PC9, PCE, PCK",
            "QRY_Q01": "Q01, Q26, Q27, Q28, Q29, Q30",
            "QRY_Q02": "Q02",
            "QRY_R02": "R02",
            "QRY_T12": "T12",
            "QSB_Q16": "Q16",
            "QVR_Q17": "Q17",
            "RAR_RAR": "RAR",
            "RAS_O17": "O17",
            "RCI_I05": "I05",
            "RCL_I06": "I06",
            "RDE_O11": "O11, O25",
            "RDR_RDR": "RDR",
            "RDS_O13": "O13",
            "RDY_K15": "K15",
            "REF_I12": "I12, I13, I14, I15",
            "RER_RER": "RER",
            "RGR_RGR": "RGR",
            "RGV_O15": "O15",
            "ROR_ROR": "ROR",
            "RPA_I08": "I08, I09. I10, I11",
            "RPI_I01": "I01, I04",
            "RPI_I04": "I04",
            "RPL_I02": "I02",
            "RPR_I03": "I03",
            "RQA_I08": "I08, I09, I10, I11",
            "RQC_I05": "I05, I06",
            "RQI_I01": "I01, I02, I03, I07",
            "RQP_I04": "I04",
            "RRA_O18": "O18",
            "RRD_O14": "O14",
            "RRE_O12": "O12, O26",
            "RRG_O16": "O16",
            "RRI_I12": "I12, I13, I14, I15",
            "RSP_E03": "E03",
            "RSP_E22": "E22",
            "RSP_K11": "K11",
            "RSP_K21": "K21",
            "RSP_K23": "K23, K24",
            "RSP_K25": "K25",
            "RSP_K31": "K31",
            "RSP_Q11": "Q11",
            "RTB_K13": "K13",
            "SDR_S31": "S31, S36",
            "SDR_S32": "S32, S37",
            "SIU_S12": "S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23, S24, S26",
            "SLR_S28": "S28, S29, S30, S34, S35",
            "SQM_S25": "S25",
            "SQR_S25": "S25",
            "SRM_S01": "S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11",
            "SRR_S01": "S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11",
            "SSR_U04": "U04",
            "SSU_U03": "U03",
            "STC_S33": "S33",
            "SUR_P09": "P09",
            "TCU_U10": "U10, U11",
            "UDM_Q05": "Q05",
            "VXQ_V01": "V01",
            "VXR_V03": "V03",
            "VXU_V04": "V04",
            "VXX_V02": "V02"
        }
    },
    "355": {
        "desc": "Primary key value type",
        "values": {
            "CE": "Coded element",
            "CWE": "Coded with Exceptions",
            "PL": "Person location"
        }
    },
    "356": {
        "desc": "Alternate character set handling scheme",
        "values": {
            "2.3": "The character set switching mode specified in HL7 2.5, section 2.7.2, \"Escape sequences supporting multiple character sets\" and section 2.A.46, \"XPN - extended person name\".",
            "ISO 2022-1994": "This standard is titled \"Information Technology - Character Code Structure and Extension Technique\". ."
        }
    },
    "357": {
        "desc": "Message error condition codes",
        "values": {
            "0": "Message accepted",
            "100": "Segment sequence error",
            "101": "Required field missing",
            "102": "Data type error",
            "103": "Table value not found",
            "200": "Unsupported message type",
            "201": "Unsupported event code",
            "202": "Unsupported processing id",
            "203": "Unsupported version id",
            "204": "Unknown key identifier",
            "205": "Duplicate key identifier",
            "206": "Application record locked",
            "207": "Application internal error"
        }
    },
    "359": {
        "desc": "Diagnosis Priority",
        "values": {
            "0": "Not included in diagnosis ranking",
            "1": "The primary diagnosis",
            "2": "For ranked secondary diagnoses"
        }
    },
    "360": {
        "desc": "Degree/license/certificate",
        "values": {
            "AA": "Associate of Arts",
            "AAS": "Associate of Applied Science",
            "ABA": "Associate of Business Administration",
            "AE": "Associate of Engineering",
            "AS": "Associate of Science",
            "BA": "Bachelor of Arts",
            "BBA": "Bachelor of Business Administration",
            "BE": "Bachelor or Engineering",
            "BFA": "Bachelor of Fine Arts",
            "BN": "Bachelor of Nursing",
            "BS": "Bachelor of Science",
            "BSL": "Bachelor of Science - Law",
            "BSN": "Bachelor on Science - Nursing",
            "BT": "Bachelor of Theology",
            "CANP": "Certified Adult Nurse Practitioner",
            "CER": "Certificate",
            "CMA": "Certified Medical Assistant",
            "CNM": "Certified Nurse Midwife",
            "CNP": "Certified Nurse Practitioner",
            "CNS": "Certified Nurse Specialist",
            "CPNP": "Certified Pediatric Nurse Practitioner",
            "CRN": "Certified Registered Nurse",
            "DBA": "Doctor of Business Administration",
            "DED": "Doctor of Education",
            "DIP": "Diploma",
            "DO": "Doctor of Osteopathy",
            "EMT": "Emergency Medical Technician",
            "EMTP": "Emergency Medical Technician - Paramedic",
            "FPNP": "Family Practice Nurse Practitioner",
            "HS": "High School Graduate",
            "JD": "Juris Doctor",
            "MA": "Master of Arts",
            "MBA": "Master of Business Administration",
            "MCE": "Master of Civil Engineering",
            "MD": "Doctor of Medicine",
            "MDA": "Medical Assistant",
            "MDI": "Master of Divinity",
            "ME": "Master of Engineering",
            "MED": "Master of Education",
            "MEE": "Master of Electrical Engineering",
            "MFA": "Master of Fine Arts",
            "MME": "Master of Mechanical Engineering",
            "MS": "Master of Science",
            "MSL": "Master of Science - Law",
            "MSN": "Master of Science - Nursing",
            "MT": "Master of Theology",
            "NG": "Non-Graduate",
            "NP": "Nurse Practitioner",
            "PA": "Physician Assistant",
            "PharmD": "Doctor of Pharmacy",
            "PHD": "Doctor of Philosophy",
            "PHE": "Doctor of Engineering",
            "PHS": "Doctor of Science",
            "PN": "Advanced Practice Nurse",
            "RMA": "Registered Medical Assistant",
            "RPH": "Registered Pharmacist",
            "SEC": "Secretarial Certificate",
            "TS": "Trade School Graduate"
        }
    },
    "364": {
        "desc": "Comment type",
        "values": {
            "1R": "Primary Reason",
            "2R": "Secondary Reason",
            "AI": "Ancillary Instructions",
            "DR": "Duplicate/Interaction Reason",
            "GI": "General Instructions",
            "GR": "General Reason",
            "PI": "Patient Instructions",
            "RE": "Remark"
        }
    },
    "365": {
        "desc": "Equipment state",
        "values": {
            "CL": "Clearing",
            "CO": "Configuring",
            "ES": "E-stopped",
            "ID": "Idle",
            "IN": "Initializing",
            "OP": "Normal Operation",
            "PA": "Pausing",
            "PD": "Paused",
            "PU": "Powered Up"
        }
    },
    "366": {
        "desc": "Local/remote control state",
        "values": {
            "L": "Local",
            "R": "Remote"
        }
    },
    "367": {
        "desc": "Alert level",
        "values": {
            "C": "Critical",
            "N": "Normal",
            "S": "Serious",
            "W": "Warning"
        }
    },
    "368": {
        "desc": "Remote control command",
        "values": {
            "AB": "Abort",
            "CL": "Clear",
            "CN": "Clear Notification",
            "DI": "Disable Sending Events",
            "EN": "Enable Sending Events",
            "ES": "Emergency -stop",
            "EX": "Execute (command specified in field Parameters (ST) 01394)",
            "IN": "Initialize/Initiate",
            "LC": "Local Control Request",
            "LK": "Lock",
            "LO": "Load",
            "PA": "Pause",
            "RC": "Remote Control Request",
            "RE": "Resume",
            "SA": "Sampling",
            "SU": "Setup",
            "TT": "Transport To",
            "UC": "Unlock",
            "UN": "Unload"
        }
    },
    "369": {
        "desc": "Specimen Role",
        "values": {
            "B": "Blind Sample",
            "C": "Calibrator, used for initial setting of calibration",
            "E": "Electronic QC, used with manufactured reference providing signals that simulate QC results",
            "F": "Specimen used for testing proficiency of the organization performing the testing (Filler)",
            "G": "Group (where a specimen consists of multiple individual elements that are not individually identified)",
            "L": "Pool (aliquots of individual specimens combined to form a single specimen representing all of the components.)",
            "O": "Specimen used for testing Operator Proficiency",
            "P": "Patient (default if blank component value)",
            "Q": "Control specimen",
            "R": "Replicate (of patient sample as a control)",
            "V": "Verifying Calibrator, used for periodic calibration checks"
        }
    },
    "370": {
        "desc": "Container status",
        "values": {
            "I": "Identified",
            "L": "Left Equipment",
            "M": "Missing",
            "O": "In Process",
            "P": "In Position",
            "R": "Process Completed",
            "U": "Unknown",
            "X": "Container Unavailable"
        }
    },
    "371": {
        "desc": "Additive/Preservative",
        "values": {
            "ACDA": "ACD Solution A",
            "ACDB": "ACD Solution B",
            "ACET": "Acetic Acid",
            "AMIES": "Amies transport medium",
            "BACTM": "Bacterial Transport medium",
            "BF10": "Buffered 10% formalin",
            "BOR": "Borate Boric Acid",
            "BOUIN": "Bouin's solution",
            "BSKM": "Buffered skim milk",
            "C32": "3.2%  Citrate",
            "C38": "3.8% Citrate",
            "CARS": "Carson's Modified 10% formalin",
            "CARY": "Cary Blair Medium",
            "CHLTM": "Chlamydia transport medium",
            "CTAD": "CTAD (this should be spelled out if not universally understood)",
            "EDTK": "Potassium/K EDTA",
            "EDTK15": "Potassium/K EDTA 15%",
            "EDTK75": "Potassium/K EDTA 7.5%",
            "EDTN": "Sodium/Na EDTA",
            "ENT": "Enteric bacteria transport medium",
            "ENT+": "Enteric plus",
            "F10": "10% Formalin",
            "FDP": "Thrombin NIH; soybean trypsin inhibitor (Fibrin Degradation Products)",
            "FL10": "Sodium Fluoride, 10mg",
            "FL100": "Sodium Fluoride, 100mg",
            "HCL6": "6N HCL",
            "HEPA": "Ammonium heparin",
            "HEPL": "Lithium/Li  Heparin",
            "HEPN": "Sodium/Na  Heparin",
            "HNO3": "Nitric Acid",
            "JKM": "Jones Kendrick Medium",
            "KARN": "Karnovsky's fixative",
            "KOX": "Potassium Oxalate",
            "LIA": "Lithium iodoacetate",
            "M4": "M4",
            "M4RT": "M4-RT",
            "M5": "M5",
            "MICHTM": "Michel's transport medium",
            "MMDTM": "MMD transport medium",
            "NAF": "Sodium Fluoride",
            "NAPS": "Sodium polyanethol sulfonate 0.35% in 0.85% sodium chloride",
            "NONE": "None",
            "PAGE": "Pages's Saline",
            "PHENOL": "Phenol",
            "PVA": "PVA (polyvinylalcohol)",
            "RLM": "Reagan Lowe Medium",
            "SILICA": "Siliceous earth, 12 mg",
            "SPS": "SPS(this should be spelled out if not universally understood)",
            "SST": "Serum Separator Tube (Polymer Gel)",
            "STUTM": "Stuart transport medium",
            "THROM": "Thrombin",
            "THYMOL": "Thymol",
            "THYO": "Thyoglycollate broth",
            "TOLU": "Toluene",
            "URETM": "Ureaplasma transport medium",
            "VIRTM": "Viral Transport medium",
            "WEST": "Buffered Citrate (Westergren Sedimentation Rate)"
        }
    },
    "372": {
        "desc": "Specimen component",
        "values": {
            "BLD": "Whole blood, homogeneous",
            "BSEP": "Whole blood, separated",
            "PLAS": "Plasma, NOS (not otherwise specified)",
            "PPP": "Platelet poor plasma",
            "PRP": "Platelet rich plasma",
            "SED": "Sediment",
            "SER": "Serum, NOS (not otherwise specified)",
            "SUP": "Supernatant"
        }
    },
    "373": {
        "desc": "Treatment",
        "values": {
            "ACID": "Acidification",
            "ALK": "Alkalization",
            "DEFB": "Defibrination",
            "FILT": "Filtration",
            "LDLP": "LDL Precipitation",
            "NEUT": "Neutralization",
            "RECA": "Recalification",
            "UFIL": "Ultrafiltration"
        }
    },
    "374": {
        "desc": "System induced contaminants",
        "values": {
            "CNTM": "Present, type of contamination unspecified"
        }
    },
    "375": {
        "desc": "Artificial blood",
        "values": {
            "FLUR": "Fluorocarbons",
            "SFHB": "Stromal free hemoglobin preparations"
        }
    },
    "376": {
        "desc": "Special Handling Code",
        "values": {
            "AMB": "Ambient temperature",
            "C37": "Body temperature",
            "CAMB": "Critical ambient temperature",
            "CATM": "Protect from air",
            "CFRZ": "Critical frozen temperature",
            "CREF": "Critical refrigerated temperature",
            "DFRZ": "Deep frozen",
            "DRY": "Dry",
            "FRZ": "Frozen temperature",
            "MTLF": "Metal Free",
            "NTR": "Liquid nitrogen",
            "PRTL": "Protect from light",
            "PSA": "Do not shake",
            "PSO": "No shock",
            "REF": "Refrigerated temperature",
            "UFRZ": "Ultra frozen",
            "UPR": "Upright"
        }
    },
    "377": {
        "desc": "Other environmental factors",
        "values": {
            "A60": "Opened container, indoor atmosphere, 60 minutes duration",
            "ATM": "Opened container, atmosphere and duration unspecified"
        }
    },
    "383": {
        "desc": "Substance status",
        "values": {
            "CE": "Calibration Error",
            "CW": "Calibration Warning",
            "EE": "Expired Error",
            "EW": "Expired Warning",
            "NE": "Not Available Error",
            "NW": "Not Available Warning",
            "OE": "Other Error",
            "OK": "OK Status",
            "OW": "Other Warning",
            "QE": "QC Error",
            "QW": "QC Warning"
        }
    },
    "384": {
        "desc": "Substance type",
        "values": {
            "CO": "Control",
            "DI": "Diluent",
            "LI": "Measurable Liquid Item",
            "LW": "Liquid Waste",
            "MR": "Multiple Test Reagent",
            "OT": "Other",
            "PT": "Pretreatment",
            "PW": "Purified Water",
            "RC": "Reagent Calibrator",
            "SC": "Countable Solid Item",
            "SR": "Single Test Reagent",
            "SW": "Solid Waste"
        }
    },
    "387": {
        "desc": "Command response",
        "values": {
            "ER": "Command cannot be completed because of error condition",
            "OK": "Command completed successfully",
            "ST": "Command cannot be completed because of the status of the requested equipment",
            "TI": "Command cannot be completed within requested completion time",
            "UN": "Command cannot be completed for unknown reasons"
        }
    },
    "388": {
        "desc": "Processing type",
        "values": {
            "E": "Evaluation",
            "P": "Regular Production"
        }
    },
    "389": {
        "desc": "Analyte repeat status",
        "values": {
            "D": "Repeated with dilution",
            "F": "Reflex test",
            "O": "Original, first run",
            "R": "Repeated without dilution"
        }
    },
    "392": {
        "desc": "Match reason",
        "values": {
            "DB": "Match on Date of Birth",
            "NA": "Match on Name (Alpha Match)",
            "NP": "Match on Name (Phonetic Match)",
            "SS": "Match on Social Security Number"
        }
    },
    "393": {
        "desc": "Match algorithms",
        "values": {
            "LINKSOFT_2.01": "Proprietary algorithm for LinkSoft v2.01",
            "MATCHWARE_1.2": "Proprietary algorithm for MatchWare v1.2"
        }
    },
    "394": {
        "desc": "Response modality",
        "values": {
            "B": "Batch",
            "R": "Real Time",
            "T": "Bolus (a series of responses sent at the same time without use of batch formatting)"
        }
    },
    "395": {
        "desc": "Modify indicator",
        "values": {
            "M": "Modified Subscription",
            "N": "New Subscription"
        }
    },
    "396": {
        "desc": "Coding system",
        "values": {
            "ACR": "American College of Radiology finding codes",
            "ALPHAID2006": "German Alpha-ID v2006",
            "ALPHAID2007": "German Alpha-ID v2007",
            "ALPHAID2008": "German Alpha-ID v2008",
            "ANS+": "HL7 set of units of measure",
            "ART": "WHO Adverse Reaction Terms",
            "AS4": "ASTM E1238/ E1467 Universal",
            "AS4E": "AS4 Neurophysiology Codes",
            "ATC": "American Type Culture Collection",
            "C4": "CPT-4",
            "C5": "CPT-5",
            "CAS": "Chemical abstract codes",
            "CCC": "Clinical Care Classification system",
            "CD2": "CDT-2 Codes",
            "CDCA": "CDC Analyte Codes",
            "CDCM": "CDC Methods/Instruments Codes",
            "CDS": "CDC Surveillance",
            "CE": "CEN ECG diagnostic codes",
            "CLP": "CLIP",
            "CPTM": "CPT Modifier Code",
            "CST": "COSTART",
            "CVX": "CDC Vaccine Codes",
            "DCM": "DICOM Controlled Terminology",
            "E": "EUCLIDES",
            "E5": "Euclides  quantity codes",
            "E6": "Euclides Lab method codes",
            "E7": "Euclides Lab equipment codes",
            "ENZC": "Enzyme Codes",
            "FDDC": "First DataBank Drug Codes",
            "FDDX": "First DataBank Diagnostic Codes",
            "FDK": "FDA K10",
            "GDRG2004": "G-DRG German DRG Codes v2004",
            "GDRG2005": "G-DRG German DRG Codes v2005",
            "GDRG2006": "G-DRG German DRG Codes v2006",
            "GDRG2007": "G-DRG German DRG Codes v2007",
            "GDRG2008": "G-DRG German DRG Codes v2008",
            "GMDC2004": "German Major Diagnostic Codes v2004",
            "GMDC2005": "German Major Diagnostic Codes v2005",
            "GMDC2006": "German Major Diagnostic Codes v2006",
            "GMDC2007": "German Major Diagnostic Codes v2007",
            "GMDC2008": "German Major Diagnostic Codes v2008",
            "HB": "HIBCC",
            "HCPCS": "CMS (formerly HCFA)  Common Procedure Coding System",
            "HCPT": "Health Care Provider Taxonomy",
            "HHC": "Home Health Care",
            "HI": "Health Outcomes",
            "HOT": "Japanese Nationwide Medicine Code",
            "HPC": "CMS (formerly HCFA )Procedure Codes (HCPCS)",
            "I10": "ICD-10",
            "I10G2004": "ICD 10 Germany v2004",
            "I10G2005": "ICD 10 Germany v2005",
            "I10G2006": "ICD 10 Germany v2006",
            "I10P": "ICD-10  Procedure Codes",
            "I9": "ICD9",
            "I9C": "ICD-9CM",
            "I9CDX": "ICD-9CM Diagnosis codes",
            "I9CP": "ICD-9CM Procedure codes",
            "IBT": "ISBT",
            "IBTnnnn": "ISBT 128 codes where nnnn  specifies a specific table within ISBT 128.",
            "ICD10AM": "ICD-10 Australian modification",
            "ICD10CA": "ICD-10 Canada",
            "ICD10GM2007": "ICD 10 Germany v2007",
            "ICD10GM2008": "ICD 10 Germany v2008",
            "ICDO": "International Classification of Diseases for Oncology",
            "ICS": "ICCS",
            "ICSD": "International Classification of Sleep Disorders",
            "ISO+": "ISO 2955.83 (units of measure) with HL7 extensions",
            "ITIS": "Integrated Taxonomic Information System",
            "IUPC": "IUPAC/IFCC Component Codes",
            "IUPP": "IUPAC/IFCC Property Codes",
            "JC10": "JLAC/JSLM, nationwide laboratory code",
            "JC8": "Japanese Chemistry",
            "JJ1017": "Japanese Image Examination Cache",
            "LB": "Local billing code",
            "LN": "Logical Observation Identifier Names and Codes (LOINC?R)",
            "MCD": "Medicaid",
            "MCR": "Medicare",
            "MDC": "Medical Device Communication",
            "MDDX": "Medispan Diagnostic Codes",
            "MEDC": "Medical Economics Drug Codes",
            "MEDR": "Medical Dictionary for Drug Regulatory Affairs (MEDDRA)",
            "MEDX": "Medical Economics Diagnostic Codes",
            "MGPI": "Medispan GPI",
            "MVX": "CDC Vaccine Manufacturer Codes",
            "NDA": "NANDA",
            "NDC": "National drug codes",
            "NIC": "Nursing Interventions Classification",
            "NPI": "National Provider Identifier",
            "NUBC": "National Uniform Billing Committee Code",
            "O301": "German Procedure Codes",
            "O3012004": "OPS Germany v2004",
            "O3012005": "OPS Germany v2005",
            "O3012006": "OPS Germany v2006",
            "OHA": "Omaha System",
            "OPS2007": "OPS Germany v2007",
            "OPS2008": "OPS Germany v2008",
            "POS": "POS Codes",
            "RC": "Read Classification",
            "SCT": "SNOMED Clinical Terms",
            "SCT2": "SNOMED Clinical Terms alphanumeric codes",
            "SDM": "SNOMED- DICOM Microglossary",
            "SNM": "Systemized Nomenclature of Medicine (SNOMED)",
            "SNM3": "SNOMED International",
            "SNT": "SNOMED topology codes (anatomic sites)",
            "UB04FL14": "Priority (Type) of Visit",
            "UB04FL15": "Point of Origin",
            "UB04FL17": "Patient Discharge Status",
            "UC": "UCDS",
            "UCUM": "UCUM code set for units of measure(from Regenstrief)",
            "UMD": "MDNS",
            "UML": "Unified Medical Language",
            "UPC": "Universal Product Code",
            "UPIN": "UPIN",
            "USPS": "United States Postal Service",
            "W1": "WHO record # drug codes (6 digit)",
            "W2": "WHO record # drug codes (8 digit)",
            "W4": "WHO record # code with ASTM extension",
            "WC": "WHO ATC"
        }
    },
    "397": {
        "desc": "Sequencing",
        "values": {
            "A": "Ascending",
            "AN": "Ascending, case insensitive",
            "D": "Descending",
            "DN": "Descending, case insensitive",
            "N": "None"
        }
    },
    "398": {
        "desc": "Continuation style code",
        "values": {
            "F": "Fragmentation",
            "I": "Interactive Continuation"
        }
    },
    "401": {
        "desc": "Government reimbursement program",
        "values": {
            "C": "Medi-Cal",
            "MM": "Medicare"
        }
    },
    "402": {
        "desc": "School type",
        "values": {
            "D": "Dental",
            "G": "Graduate",
            "M": "Medical",
            "U": "Undergraduate"
        }
    },
    "403": {
        "desc": "Language Ability",
        "values": {
            "1": "Read",
            "2": "Write",
            "3": "Speak",
            "4": "Understand",
            "5": "Sign"
        }
    },
    "404": {
        "desc": "Language Proficiency",
        "values": {
            "1": "Excellent",
            "2": "Good",
            "3": "Fair",
            "4": "Poor",
            "5": "Some (level unknown)",
            "6": "None"
        }
    },
    "406": {
        "desc": "Organization unit type",
        "values": {
            "1": "Hospital",
            "2": "Physician Clinic",
            "3": "Long Term Care",
            "4": "Acute Care",
            "5": "Other",
            "H": "Home",
            "O": "Office"
        }
    },
    "409": {
        "desc": "Application change type",
        "values": {
            "M": "Migrates to different CPU",
            "SD": "Shut down",
            "SU": "Start up"
        }
    },
    "415": {
        "desc": "DRG Transfer Type",
        "values": {
            "E": "DRG Exempt",
            "N": "DRG Non Exempt"
        }
    },
    "416": {
        "desc": "Procedure DRG Type",
        "values": {
            "1": "1st non-Operative",
            "2": "2nd non-Operative",
            "3": "Major Operative",
            "4": "2nd Operative",
            "5": "3rd Operative"
        }
    },
    "417": {
        "desc": "Tissue Type Code",
        "values": {
            "0": "No tissue expected",
            "1": "Insufficient Tissue",
            "2": "Not abnormal",
            "3": "Abnormal-not categorized",
            "4": "Mechanical abnormal",
            "5": "Growth alteration",
            "6": "Degeneration & necrosis",
            "7": "Non-acute inflammation",
            "8": "Non-malignant neoplasm",
            "9": "Malignant neoplasm",
            "B": "Basal cell carcinoma",
            "C": "Carcinoma-unspecified type",
            "G": "Additional tissue required"
        }
    },
    "418": {
        "desc": "Procedure Priority",
        "values": {
            "0": "the admitting procedure",
            "1": "the primary procedure",
            "2": "for ranked secondary procedures"
        }
    },
    "421": {
        "desc": "Severity of Illness Code",
        "values": {
            "MI": "Mild",
            "MO": "Moderate",
            "SE": "Severe"
        }
    },
    "422": {
        "desc": "Triage Code",
        "values": {
            "1": "Non-acute",
            "2": "Acute",
            "3": "Urgent",
            "4": "Severe",
            "5": "Dead on Arrival (DOA)",
            "99": "Other"
        }
    },
    "423": {
        "desc": "Case Category Code",
        "values": {
            "D": "Doctor's Office Closed"
        }
    },
    "424": {
        "desc": "Gestation Category Code",
        "values": {
            "1": "Premature / Pre-term",
            "2": "Full Term",
            "3": "Overdue / Post-term"
        }
    },
    "425": {
        "desc": "Newborn Code",
        "values": {
            "1": "Born in facility",
            "2": "Transfer in",
            "3": "Born en route",
            "4": "Other",
            "5": "Born at home"
        }
    },
    "426": {
        "desc": "Blood Product Code",
        "values": {
            "CRYO": "Cryoprecipitated AHF",
            "CRYOP": "Pooled Cryoprecipitate",
            "FFP": "Fresh Frozen Plasma",
            "FFPTH": "Fresh Frozen Plasma - Thawed",
            "PC": "Packed Cells",
            "PCA": "Autologous Packed Cells",
            "PCNEO": "Packed Cells - Neonatal",
            "PCW": "Washed Packed Cells",
            "PLT": "Platelet Concentrate",
            "PLTNEO": "Reduced Volume Platelets",
            "PLTP": "Pooled Platelets",
            "PLTPH": "Platelet Pheresis",
            "PLTPHLR": "Leukoreduced Platelet Pheresis",
            "RWB": "Reconstituted Whole Blood",
            "WBA": "Autologous Whole Blood"
        }
    },
    "427": {
        "desc": "Risk Management Incident Code",
        "values": {
            "B": "Body fluid exposure",
            "C": "Contaminated Substance",
            "D": "Diet Errors",
            "E": "Equipment problem",
            "F": "Patient fell (not from bed)",
            "H": "Patient fell from bed",
            "I": "Infusion error",
            "J": "Foreign object left during surgery",
            "K": "Sterile precaution violated",
            "O": "Other",
            "P": "Procedure error",
            "R": "Pharmaceutical error",
            "S": "Suicide Attempt",
            "T": "Transfusion error"
        }
    },
    "428": {
        "desc": "Incident Type Code",
        "values": {
            "O": "Other",
            "P": "Preventable",
            "U": "User Error"
        }
    },
    "429": {
        "desc": "Production Class Code",
        "values": {
            "BR": "Breeding/genetic stock",
            "DA": "Dairy",
            "DR": "Draft",
            "DU": "Dual Purpose",
            "LY": "Layer, Includes Multiplier flocks",
            "MT": "Meat",
            "NA": "Not Applicable",
            "OT": "Other",
            "PL": "Pleasure",
            "RA": "Racing",
            "SH": "Show",
            "U": "Unknown"
        }
    },
    "430": {
        "desc": "Mode of Arrival Code",
        "values": {
            "A": "Ambulance",
            "C": "Car",
            "F": "On foot",
            "H": "Helicopter",
            "O": "Other",
            "P": "Public Transport",
            "U": "Unknown"
        }
    },
    "431": {
        "desc": "Recreational Drug Use Code",
        "values": {
            "A": "Alcohol",
            "C": "Tobacco - chewed",
            "K": "Kava",
            "M": "Marijuana",
            "O": "Other",
            "T": "Tobacco - smoked",
            "U": "Unknown"
        }
    },
    "432": {
        "desc": "Admission Level of Care Code",
        "values": {
            "AC": "Acute",
            "CH": "Chronic",
            "CO": "Comatose",
            "CR": "Critical",
            "IM": "Improved",
            "MO": "Moribund"
        }
    },
    "433": {
        "desc": "Precaution Code",
        "values": {
            "A": "Aggressive",
            "B": "Blind",
            "C": "Confused",
            "D": "Deaf",
            "I": "On IV",
            "N": "\"No-code\" (i.e. Do not resuscitate)",
            "O": "Other",
            "P": "Paraplegic",
            "U": "Unknown"
        }
    },
    "434": {
        "desc": "Patient Condition Code",
        "values": {
            "A": "Satisfactory",
            "C": "Critical",
            "O": "Other",
            "P": "Poor",
            "S": "Stable",
            "U": "Unknown"
        }
    },
    "435": {
        "desc": "Advance Directive Code",
        "values": {
            "DNR": "Do not resuscitate",
            "N": "No directive"
        }
    },
    "436": {
        "desc": "Sensitivity to Causative Agent Code",
        "values": {
            "AD": "Adverse Reaction (Not otherwise classified)",
            "AL": "Allergy",
            "CT": "Contraindication",
            "IN": "Intolerance"
        }
    },
    "437": {
        "desc": "Alert Device Code",
        "values": {
            "B": "Bracelet",
            "N": "Necklace",
            "W": "Wallet Card"
        }
    },
    "438": {
        "desc": "Allergy Clinical Status",
        "values": {
            "C": "Confirmed or verified",
            "D": "Doubt raised",
            "E": "Erroneous",
            "I": "Confirmed but inactive",
            "P": "Pending",
            "S": "Suspect",
            "U": "Unconfirmed"
        }
    },
    "440": {
        "desc": "Data types",
        "values": {
            "AD": "Address",
            "AUI": "Authorization information",
            "CCD": "Charge code and date",
            "CCP": "Channel calibration parameters",
            "CD": "Channel definition",
            "CE": "Coded element",
            "CF": "Coded element with formatted values",
            "CK": "Composite ID with check digit",
            "CM": "Composite",
            "CN": "Composite ID number and name",
            "CNE": "Coded with no exceptions",
            "CNS": "Composite ID number and name simplified",
            "CP": "Composite price",
            "CQ": "Composite quantity with units",
            "CSU": "Channel sensitivity",
            "CWE": "Coded with exceptions",
            "CX": "Extended composite ID with check digit",
            "DDI": "Daily deductible information",
            "DIN": "Date and institution name",
            "DLD": "Discharge to location and date",
            "DLN": "Driver's license number",
            "DLT": "Delta",
            "DR": "Date/time range",
            "DT": "Date",
            "DTM": "Date/time",
            "DTN": "Day type and number",
            "ED": "Encapsulated data",
            "EI": "Entity identifier",
            "EIP": "Entity identifier pair",
            "ERL": "Error location",
            "FC": "Financial class",
            "FN": "Family name",
            "FT": "Formatted text",
            "GTS": "General timing specification",
            "HD": "Hierarchic designator",
            "ICD": "Insurance certification definition",
            "ID": "Coded values for HL7 tables",
            "IS": "Coded value for user-defined tables",
            "JCC": "Job code/class",
            "LA1": "Location with address variation 1",
            "LA2": "Location with address variation 2",
            "LD": "Error location and description",
            "MA": "Multiplexed array",
            "MO": "Money",
            "MOC": "Money and charge code",
            "MOP": "Money or percentage",
            "MSG": "Message type",
            "NA": "Numeric array",
            "NDL": "Name with location and date",
            "NM": "Numeric",
            "NR": "Numeric range",
            "OCD": "Occurrence code and date",
            "OSD": "Order sequence definition",
            "OSP": "Occurrence span code and date",
            "PIP": "Practitioner institutional privileges",
            "PL": "Person location",
            "PLN": "Practitioner license or other ID number",
            "PN": "Person name",
            "PPN": "Performing person time stamp",
            "PRL": "Parent result link",
            "PT": "Processing type",
            "PTA": "Policy type and amount",
            "QIP": "Query input parameter list",
            "QSC": "Query selection criteria",
            "RCD": "Row column definition",
            "RFR": "Reference range",
            "RI": "Repeat interval",
            "RMC": "Room coverage",
            "RP": "Reference pointer",
            "RPT": "Repeat pattern",
            "SAD": "Street Address",
            "SCV": "Scheduling class value pair",
            "SI": "Sequence ID",
            "SN": "Structured numeric",
            "SPD": "Specialty description",
            "SPS": "Specimen source",
            "SRT": "Sort order",
            "ST": "String",
            "TM": "Time",
            "TN": "Telephone number",
            "TQ": "Timing/quantity",
            "TS": "Time stamp",
            "TX": "Text data",
            "UVC": "UB value code and amount",
            "VH": "Visiting hours",
            "VID": "Version identifier",
            "VR": "Value range",
            "WVI": "Channel Identifier",
            "WVS": "Waveform source",
            "XAD": "Extended address",
            "XCN": "Extended composite ID number and name",
            "XON": "Extended composite name and ID number for organizations",
            "XPN": "Extended person name",
            "XTN": "Extended telecommunications number"
        }
    },
    "441": {
        "desc": "Immunization Registry Status",
        "values": {
            "A": "Active",
            "I": "Inactive",
            "L": "Inactive - Lost to follow-up (cancel contract)",
            "M": "Inactive - Moved or gone elsewhere (cancel contract)",
            "O": "Other",
            "P": "Inactive - Permanently inactive (Do not reactivate or add new entries to the record)",
            "U": "Unknown"
        }
    },
    "442": {
        "desc": "Location Service Code",
        "values": {
            "D": "Diagnostic",
            "E": "Emergency Room Casualty",
            "P": "Primary Care",
            "T": "Therapeutic"
        }
    },
    "443": {
        "desc": "Provider role",
        "values": {
            "AD": "Admitting",
            "AI": "Assistant/Alternate Interpreter",
            "AT": "Attending",
            "CP": "Consulting Provider",
            "FHCP": "Family Health Care Professional",
            "PI": "Primary Interpreter",
            "PP": "Primary Care Provider",
            "RP": "Referring Provider",
            "RT": "Referred to Provider",
            "TN": "Technician",
            "TR": "Transcriptionist"
        }
    },
    "444": {
        "desc": "Name assembly order",
        "values": {
            "F": "Prefix Family Middle Given Suffix",
            "G": "Prefix Given Middle Family Suffix"
        }
    },
    "445": {
        "desc": "Identity Reliability Code",
        "values": {
            "AL": "Patient/Person Name is an Alias",
            "UA": "Unknown/Default Address",
            "UD": "Unknown/Default Date of Birth",
            "US": "Unknown/Default Social Security Number"
        }
    },
    "450": {
        "desc": "Event type",
        "values": {
            "LOG": "Log Event",
            "SER": "Service Event"
        }
    },
    "451": {
        "desc": "Substance identifier",
        "values": {
            "ALL": "Used for query of all inventory items"
        }
    },
    "452": {
        "desc": "Health care provider type code",
        "values": {
            "SUGGESTION": "ANSI ASC X12 Health Care Provider Taxonomy, Level 1 - Type"
        }
    },
    "453": {
        "desc": "Health care provider classification",
        "values": {
            "SUGGESTION": "ANSI ASC X12 Health Care Provider Taxonomy, Level 2 -  Classification"
        }
    },
    "454": {
        "desc": "Health care provider area of specialization",
        "values": {
            "SUGGESTION": "ANSI ASC X12 Health Care Provider Taxonomy, Level 3 - specialization"
        }
    },
    "457": {
        "desc": "Overall Claim Disposition Code",
        "values": {
            "0": "No edits present on claim",
            "1": "Only edits present are for line item denial or rejection",
            "2": "Multiple-day claim with one or more days denied or rejected",
            "3": "Claim denied, rejected, suspended or returned to provider with only post payment edits",
            "4": "Claim denied, rejected, suspended or returned to provider with only pre payment edits"
        }
    },
    "458": {
        "desc": "OCE Edit Code",
        "values": {
            "1": "Invalid diagnosis code",
            "2": "Diagnosis and age conflict",
            "3": "Diagnosis and sex conflict",
            "4": "Medicare secondary payer alert",
            "5": "E-code as reason for visit",
            "6": "Invalid procedure code",
            "7": "Procedure and age conflict",
            "8": "Procedure and sex conflict",
            "9": "Nov-covered service",
            "10": "Non-covered  service submitted for verification of denial (condition code 21 from header information on claim)",
            "11": "Non-covered service submitted for FI review (condition code 20 from header information on claim)",
            "12": "Questionable covered service",
            "13": "Additional payment for service not provided by Medicare",
            "14": "Code indicates a site of service not included in OPPS",
            "15": "Service unit out of range for procedure",
            "16": "Multiple bilateral procedures without modifier 50 (see Appendix A)",
            "17": "Multiple bilateral procedures with modifier 50 (see Appendix A)",
            "18": "Inpatient procedure",
            "19": "Mutually exclusive procedure that is not allowed even if appropriate modifier present",
            "20": "Component of a comprehensive procedure that is not allowed even if appropriate modifier present",
            "21": "Medical visit on same day as a type \"T\" or \"S\" procedure without modifier 25 (see Appendix B)",
            "22": "Invalid modifier",
            "23": "Invalid date",
            "24": "Date out of OCE range",
            "25": "Invalid age",
            "26": "Invalid sex",
            "27": "Only incidental services reported",
            "28": "Code not recognized by Medicare; alternate code for same service available",
            "29": "Partial hospitalization service for non-mental health diagnosis",
            "30": "Insufficient services on day of partial hospitalization",
            "31": "Partial hospitalization on same day as ECT or type \"T\" procedure",
            "32": "Partial hospitalization claim spans 3 or less days with in-sufficient services, or ECT or significant procedure on at least one of the days",
            "33": "Partial hospitalization claim spans more than 3 days with insufficient number of days having mental health services",
            "34": "Partial hospitalization claim spans more than 3 days with insufficient number of days meeting partial hospitalization criteria",
            "35": "Only activity therapy and/or occupational therapy services provided",
            "36": "Extensive mental health services provided on day of ECT or significant procedure",
            "37": "Terminated bilateral procedure or terminated procedure with units greater than one",
            "38": "Inconsistency between implanted device and implantation procedure",
            "39": "Mutually exclusive procedure that would be allowed if appropriate modifier were present",
            "40": "Component of a comprehensive procedure that would be allowed if appropriate modifier were present",
            "41": "Invalid revenue code",
            "42": "Multiple medical visits on same day with same revenue code without condition code G0 (see Appendix B)"
        }
    },
    "459": {
        "desc": "Reimbursement Action Code",
        "values": {
            "0": "OCE line item denial or rejection is not ignored",
            "1": "OCE line item denial or rejection is ignored",
            "2": "External line item denial. Line item is denied even if no OCE edits",
            "3": "External line item rejection. Line item is rejected even if no OCE edits"
        }
    },
    "460": {
        "desc": "Denial or Rejection Code",
        "values": {
            "0": "Line item not denied or rejected",
            "1": "Line item denied or rejected",
            "2": "Line item is on a multiple-day claim. The line item is not denied or rejected, but occurs on a day that has been denied or rejected."
        }
    },
    "465": {
        "desc": "Name/address representation",
        "values": {
            "A": "Alphabetic (i.e., Default or some single-byte)",
            "I": "Ideographic (i.e., Kanji)",
            "P": "Phonetic (i.e., ASCII, Katakana, Hiragana, etc.)"
        }
    },
    "466": {
        "desc": "Ambulatory Payment Classification Code",
        "values": {
            "163": "Excision/biopsy",
            "181": "Level 1 skin repair.",
            "031": "Dental procedures"
        }
    },
    "467": {
        "desc": "Modifier Edit Code",
        "values": {
            "0": "Modifier does NOT exist",
            "1": "Modifier present, no errors",
            "2": "Modifier invalid",
            "3": "Modifier NOT approved for ASC/HOPD use",
            "4": "Modifier approved for ASC/HOPD use, inappropriate for code",
            "U": "Modifier edit code unknown"
        }
    },
    "468": {
        "desc": "Payment Adjustment Code",
        "values": {
            "1": "No payment adjustment",
            "2": "Designated current drug or biological payment adjustment applies to APC (status indicator G)",
            "3": "Designated new device payment adjustment applies to APC (status indicator H)",
            "4": "Designated new drug or new biological payment adjustment applies to APC (status indicator J)",
            "5": "Deductible not applicable (specific list of HCPCS codes)"
        }
    },
    "469": {
        "desc": "Packaging Status Code",
        "values": {
            "0": "Not packaged",
            "1": "Packaged service (status indicator N, or no HCPCS code and certain revenue codes)",
            "2": "Packaged as part of partial hospitalization per diem or daily mental health service per diem"
        }
    },
    "470": {
        "desc": "Reimbursement Type Code",
        "values": {
            "Crnl": "Corneal Tissue APC",
            "DME": "Durable Medical Equipment",
            "EPO": "Epotein",
            "Lab": "Clinical Laboratory APC",
            "Mamm": "Screening Mammography APC",
            "NoPay": "This APC is not paid",
            "OPPS": "Outpatient Prospective Payment System",
            "PartH": "Partial Hospitalization APC",
            "Pckg": "Packaged APC",
            "Thrpy": "Therapy APC"
        }
    },
    "472": {
        "desc": "TQ conjunction ID",
        "values": {
            "A": "Asynchronous",
            "C": "Actuation Time",
            "S": "Synchronous"
        }
    },
    "473": {
        "desc": "Formulary Status",
        "values": {
            "G": "This observation/service is on the formulary, and has guidelines",
            "N": "This observation/service is not on the formulary",
            "R": "This observation/service is on the formulary, but is restricted",
            "Y": "This observation/service is on the formulary"
        }
    },
    "474": {
        "desc": "Organization Unit Type",
        "values": {
            "D": "Department",
            "F": "Facility",
            "S": "Subdivision",
            "U": "Subdepartment",
            "V": "Division"
        }
    },
    "475": {
        "desc": "Charge Type Reason",
        "values": {
            "01": "Allergy",
            "02": "Intolerance",
            "03": "Treatment Failure",
            "04": "Patient Request",
            "05": "No Exception"
        }
    },
    "477": {
        "desc": "Controlled Substance Schedule*",
        "values": {
            "I": "Schedule I",
            "II": "Schedule II",
            "III": "Schedule III",
            "IV": "Schedule IV",
            "V": "Schedule V",
            "VI": "Schedule VI"
        }
    },
    "478": {
        "desc": "Formulary Status",
        "values": {
            "G": "Pharmaceutical substance is in the formulary, but guidelines apply",
            "N": "Pharmaceutical substance is NOT in the formulary",
            "R": "Pharmaceutical substance is in the formulary, but restrictions apply",
            "Y": "Pharmaceutical substance is in the formulary"
        }
    },
    "480": {
        "desc": "Pharmacy Order Types",
        "values": {
            "M": "Medication",
            "O": "Other solution as medication orders",
            "S": "IV Large Volume Solutions"
        }
    },
    "482": {
        "desc": "Order Type",
        "values": {
            "I": "Inpatient Order",
            "O": "Outpatient Order"
        }
    },
    "483": {
        "desc": "Authorization Mode",
        "values": {
            "EL": "Electronic",
            "EM": "E-mail",
            "FX": "Fax",
            "IP": "In Person",
            "MA": "Mail",
            "PA": "Paper",
            "PH": "Phone",
            "RE": "Reflexive (Automated system)",
            "VC": "Video-conference",
            "VO": "Voice"
        }
    },
    "484": {
        "desc": "Dispense Type",
        "values": {
            "B": "Trial Quantity Balance",
            "C": "Compassionate Fill",
            "N": "New/Renew - Full Fill",
            "P": "New/Renew - Part Fill",
            "Q": "Refill - Part Fill",
            "R": "Refill - Full Fill",
            "S": "Manufacturer Sample",
            "T": "Trial Quantity",
            "Z": "Non-Prescription Fill"
        }
    },
    "485": {
        "desc": "Extended Priority Codes",
        "values": {
            "A": "ASAP",
            "C": "Callback",
            "P": "Preop",
            "PRN": "As needed",
            "R": "Routine",
            "S": "Stat",
            "T": "Timing critical"
        }
    },
    "487": {
        "desc": "Specimen Type",
        "values": {
            "ABS": "Abscess",
            "ACNE": "Tissue, Acne",
            "ACNFLD": "Fluid, Acne",
            "AIRS": "Air Sample",
            "ALL": "Allograft",
            "AMP": "Amputation",
            "ANGI": "Catheter Tip, Angio",
            "ARTC": "Catheter Tip, Arterial",
            "ASERU": "Serum, Acute",
            "ASP": "Aspirate",
            "ATTE": "Environmental, Autoclave Ampule",
            "AUTOC": "Environment, Attest",
            "AUTP": "Autopsy",
            "BBL": "Blood bag",
            "BCYST": "Cyst, Baker's",
            "BITE": "Bite",
            "BLEB": "Bleb",
            "BLIST": "Blister",
            "BOIL": "Boil",
            "BON": "Bone",
            "BOWL": "Bowel contents",
            "BPU": "Blood product unit",
            "BRN": "Burn",
            "BRSH": "Brush",
            "BRTH": "Breath (use EXHLD)",
            "BRUS": "Brushing",
            "BUB": "Bubo",
            "BULLA": "Bulla/Bullae",
            "BX": "Biopsy",
            "CALC": "Calculus (=Stone)",
            "CARBU": "Carbuncle",
            "CAT": "Catheter",
            "CBITE": "Bite, Cat",
            "CLIPP": "Clippings",
            "CNJT": "Conjunctiva",
            "COL": "Colostrum",
            "CONE": "Biospy, Cone",
            "CSCR": "Scratch, Cat",
            "CSERU": "Serum, Convalescent",
            "CSITE": "Catheter Insertion Site",
            "CSMY": "Fluid,  Cystostomy Tube",
            "CST": "Fluid, Cyst",
            "CSVR": "Blood, Cell Saver",
            "CTP": "Catheter tip",
            "CVPS": "Site, CVP",
            "CVPT": "Catheter Tip, CVP",
            "CYN": "Nodule, Cystic",
            "CYST": "Cyst",
            "DBITE": "Bite, Dog",
            "DCS": "Sputum, Deep Cough",
            "DEC": "Ulcer, Decubitus",
            "DEION": "Environmental, Water  (Deionized)",
            "DIA": "Dialysate",
            "DISCHG": "Discharge",
            "DIV": "Diverticulum",
            "DRN": "Drain",
            "DRNG": "Drainage, Tube",
            "DRNGP": "Drainage, Penrose",
            "EARW": "Ear wax (cerumen)",
            "EBRUSH": "Brush, Esophageal",
            "EEYE": "Environmental, Eye Wash",
            "EFF": "Environmental, Effluent",
            "EFFUS": "Effusion",
            "EFOD": "Environmental, Food",
            "EISO": "Environmental, Isolette",
            "ELT": "Electrode",
            "ENVIR": "Environmental, Unidentified Substance",
            "EOTH": "Environmental, Other Substance",
            "ESOI": "Environmental, Soil",
            "ESOS": "Environmental, Solution (Sterile)",
            "ETA": "Aspirate,  Endotrach",
            "ETTP": "Catheter Tip, Endotracheal",
            "ETTUB": "Tube, Endotracheal",
            "EWHI": "Environmental, Whirlpool",
            "EXG": "Gas, exhaled (=breath)",
            "EXS": "Shunt, External",
            "EXUDTE": "Exudate",
            "FAW": "Environmental, Water  (Well)",
            "FBLOOD": "Blood, Fetal",
            "FGA": "Fluid,  Abdomen",
            "FIST": "Fistula",
            "FLD": "Fluid, Other",
            "FLT": "Filter",
            "FLU": "Fluid, Body unsp",
            "FLUID": "Fluid",
            "FOLEY": "Catheter Tip, Foley",
            "FRS": "Fluid, Respiratory",
            "FSCLP": "Scalp, Fetal",
            "FUR": "Furuncle",
            "GAS": "Gas",
            "GASA": "Aspirate, Gastric",
            "GASAN": "Antrum, Gastric",
            "GASBR": "Brushing, Gastric",
            "GASD": "Drainage, Gastric",
            "GAST": "Fluid/contents, Gastric",
            "GENV": "Genital vaginal",
            "GRAFT": "Graft",
            "GRANU": "Granuloma",
            "GROSH": "Catheter, Groshong",
            "GSOL": "Solution, Gastrostomy",
            "GSPEC": "Biopsy, Gastric",
            "GT": "Tube, Gastric",
            "GTUBE": "Drainage Tube, Drainage (Gastrostomy)",
            "HBITE": "Bite, Human",
            "HBLUD": "Blood, Autopsy",
            "HEMAQ": "Catheter Tip, Hemaquit",
            "HEMO": "Catheter Tip, Hemovac",
            "HERNI": "Tissue, Herniated",
            "HEV": "Drain, Hemovac",
            "HIC": "Catheter, Hickman",
            "HYDC": "Fluid, Hydrocele",
            "IBITE": "Bite, Insect",
            "ICYST": "Cyst, Inclusion",
            "IDC": "Catheter Tip, Indwelling",
            "IHG": "Gas, Inhaled",
            "ILEO": "Drainage, Ileostomy",
            "ILLEG": "Source of Specimen Is Illegible",
            "IMP": "Implant",
            "INCI": "Site, Incision/Surgical",
            "INFIL": "Infiltrate",
            "INS": "Insect",
            "INTRD": "Catheter Tip, Introducer",
            "IT": "Intubation tube",
            "IUD": "Intrauterine Device",
            "IVCAT": "Catheter Tip, IV",
            "IVFLD": "Fluid, IV",
            "IVTIP": "Tubing Tip, IV",
            "JEJU": "Drainage, Jejunal",
            "JNTFLD": "Fluid, Joint",
            "JP": "Drainage, Jackson Pratt",
            "KELOI": "Lavage",
            "KIDFLD": "Fluid, Kidney",
            "LAVG": "Lavage, Bronhial",
            "LAVGG": "Lavage, Gastric",
            "LAVGP": "Lavage, Peritoneal",
            "LAVPG": "Lavage, Pre-Bronch",
            "LENS1": "Contact Lens",
            "LENS2": "Contact Lens Case",
            "LESN": "Lesion",
            "LIQ": "Liquid, Unspecified",
            "LIQO": "Liquid, Other",
            "LSAC": "Fluid, Lumbar Sac",
            "MAHUR": "Catheter Tip, Makurkour",
            "MASS": "Mass",
            "MBLD": "Blood, Menstrual",
            "MUCOS": "Mucosa",
            "MUCUS": "Mucus",
            "NASDR": "Drainage, Nasal",
            "NEDL": "Needle",
            "NEPH": "Site, Nephrostomy",
            "NGASP": "Aspirate, Nasogastric",
            "NGAST": "Drainage, Nasogastric",
            "NGS": "Site, Naso/Gastric",
            "NODUL": "Nodule(s)",
            "NSECR": "Secretion, Nasal",
            "ORH": "Other",
            "ORL": "Lesion, Oral",
            "OTH": "Source, Other",
            "PACEM": "Pacemaker",
            "PCFL": "Fluid, Pericardial",
            "PDSIT": "Site, Peritoneal Dialysis",
            "PDTS": "Site, Peritoneal Dialysis Tunnel",
            "PELVA": "Abscess, Pelvic",
            "PENIL": "Lesion, Penile",
            "PERIA": "Abscess, Perianal",
            "PILOC": "Cyst, Pilonidal",
            "PINS": "Site, Pin",
            "PIS": "Site, Pacemaker Insetion",
            "PLAN": "Plant Material",
            "PLAS": "Plasma",
            "PLB": "Plasma bag",
            "PLEVS": "Serum, Peak Level",
            "PND": "Drainage, Penile",
            "POL": "Polyps",
            "POPGS": "Graft Site, Popliteal",
            "POPLG": "Graft, Popliteal",
            "POPLV": "Site, Popliteal Vein",
            "PORTA": "Catheter, Porta",
            "PPP": "Plasma, Platelet poor",
            "PROST": "Prosthetic Device",
            "PRP": "Plasma, Platelet rich",
            "PSC": "Pseudocyst",
            "PUNCT": "Wound, Puncture",
            "PUS": "Pus",
            "PUSFR": "Pustule",
            "PUST": "Pus",
            "QC3": "Quality Control",
            "RANDU": "Urine, Random",
            "RBITE": "Bite, Reptile",
            "RECT": "Drainage, Rectal",
            "RECTA": "Abscess, Rectal",
            "RENALC": "Cyst, Renal",
            "RENC": "Fluid, Renal Cyst",
            "RES": "Respiratory",
            "SAL": "Saliva",
            "SCAR": "Tissue, Keloid (Scar)",
            "SCLV": "Catheter Tip, Subclavian",
            "SCROA": "Abscess, Scrotal",
            "SECRE": "Secretion(s)",
            "SER": "Serum",
            "SHU": "Site, Shunt",
            "SHUNF": "Fluid, Shunt",
            "SHUNT": "Shunt",
            "SITE": "Site",
            "SKBP": "Biopsy, Skin",
            "SKN": "Skin",
            "SMM": "Mass, Sub-Mandibular",
            "SNV": "Fluid, synovial (Joint fluid)",
            "SPRM": "Spermatozoa",
            "SPRP": "Catheter Tip, Suprapubic",
            "SPRPB": "Cathether Tip, Suprapubic",
            "SPS": "Environmental, Spore Strip",
            "SPT": "Sputum",
            "SPTC": "Sputum - coughed",
            "SPTT": "Sputum - tracheal aspirate",
            "SPUT1": "Sputum, Simulated",
            "SPUTIN": "Sputum, Inducted",
            "SPUTSP": "Sputum, Spontaneous",
            "STER": "Environmental, Sterrad",
            "STL": "Stool = Fecal",
            "STONE": "Stone, Kidney",
            "SUBMA": "Abscess, Submandibular",
            "SUBMX": "Abscess, Submaxillary",
            "SUMP": "Drainage, Sump",
            "SUP": "Suprapubic Tap",
            "SUTUR": "Suture",
            "SWGZ": "Catheter Tip, Swan Gantz",
            "TASP": "Aspirate, Tracheal",
            "TISS": "Tissue",
            "TISU": "Tissue ulcer",
            "TLC": "Cathether Tip, Triple Lumen",
            "TRAC": "Site, Tracheostomy",
            "TRANS": "Transudate",
            "TSERU": "Serum, Trough",
            "TSTES": "Abscess, Testicular",
            "TTRA": "Aspirate, Transtracheal",
            "TUBES": "Tubes",
            "TUMOR": "Tumor",
            "TZANC": "Smear, Tzanck",
            "UDENT": "Source, Unidentified",
            "UR": "Urine",
            "URC": "Urine clean catch",
            "URINB": "Urine, Bladder Washings",
            "URINC": "Urine, Catheterized",
            "URINM": "Urine, Midstream",
            "URINN": "Urine, Nephrostomy",
            "URINP": "Urine, Pedibag",
            "URT": "Urine catheter",
            "USCOP": "Urine, Cystoscopy",
            "USPEC": "Source, Unspecified",
            "VASTIP": "Catheter Tip, Vas",
            "VENT": "Catheter Tip, Ventricular",
            "VITF": "Vitreous Fluid",
            "VOM": "Vomitus",
            "WASH": "Wash",
            "WASI": "Washing, e.g. bronchial washing",
            "WAT": "Water",
            "WB": "Blood, Whole",
            "WEN": "Wen",
            "WICK": "Wick",
            "WND": "Wound",
            "WNDA": "Wound abscess",
            "WNDD": "Wound drainage",
            "WNDE": "Wound exudate",
            "WORM": "Worm",
            "WRT": "Wart",
            "WWA": "Environmental, Water",
            "WWO": "Environmental, Water (Ocean)",
            "WWT": "Environmental, Water  (Tap)"
        }
    },
    "488": {
        "desc": "Specimen Collection Method",
        "values": {
            "ANP": "Plates, Anaerobic",
            "BAP": "Plates, Blood Agar",
            "BCAE": "Blood Culture, Aerobic Bottle",
            "BCAN": "Blood Culture, Anaerobic Bottle",
            "BCPD": "Blood Culture, Pediatric Bottle",
            "BIO": "Biopsy",
            "CAP": "Capillary Specimen",
            "CATH": "Catheterized",
            "CVP": "Line, CVP",
            "EPLA": "Environmental, Plate",
            "ESWA": "Environmental, Swab",
            "FNA": "Aspiration, Fine Needle",
            "KOFFP": "Plate, Cough",
            "LNA": "Line, Arterial",
            "LNV": "Line, Venous",
            "MARTL": "Martin-Lewis Agar",
            "ML11": "Mod. Martin-Lewis Agar",
            "MLP": "Plate, Martin-Lewis",
            "NYP": "Plate, New York City",
            "PACE": "Pace, Gen-Probe",
            "PIN": "Pinworm Prep",
            "PNA": "Aterial puncture",
            "PRIME": "Pump Prime",
            "PUMP": "Pump Specimen",
            "QC5": "Quality Control For Micro",
            "SCLP": "Scalp, Fetal Vein",
            "SCRAPS": "Scrapings",
            "SHA": "Shaving",
            "SWA": "Swab",
            "SWD": "Swab, Dacron tipped",
            "TMAN": "Transport Media, Anaerobic",
            "TMCH": "Transport Media, Chalamydia",
            "TMM4": "Transport Media, M4",
            "TMMY": "Transport Media, Mycoplasma",
            "TMOT": "Transport Media,",
            "TMP": "Plate, Thayer-Martin",
            "TMPV": "Transport Media, PVA",
            "TMSC": "Transport Media, Stool Culture",
            "TMUP": "Transport Media, Ureaplasma",
            "TMVI": "Transport Media, Viral",
            "VENIP": "Venipuncture",
            "WOOD": "Swab, Wooden Shaft"
        }
    },
    "489": {
        "desc": "Risk Codes",
        "values": {
            "AGG": "Aggressive",
            "BHZ": "Biohazard",
            "BIO": "Biological",
            "COR": "Corrosive",
            "ESC": "Escape Risk",
            "EXP": "Explosive",
            "IFL": "MaterialDangerInflammable",
            "INF": "MaterialDangerInfectious",
            "INJ": "Injury Hazard",
            "POI": "Poison",
            "RAD": "Radioactive"
        }
    },
    "490": {
        "desc": "Specimen Reject Reason",
        "values": {
            "EX": "Expired",
            "QS": "Quantity not sufficient",
            "RA": "Missing patient ID number",
            "RB": "Broken container",
            "RC": "Clotting",
            "RD": "Missing collection date",
            "RE": "Missing patient name",
            "RH": "Hemolysis",
            "RI": "Identification problem",
            "RM": "Labeling",
            "RN": "Contamination",
            "RP": "Missing phlebotomist ID",
            "RR": "Improper storage",
            "RS": "Name misspelling"
        }
    },
    "491": {
        "desc": "Specimen Quality",
        "values": {
            "E": "Excellent",
            "F": "Fair",
            "G": "Good",
            "P": "Poor"
        }
    },
    "492": {
        "desc": "Specimen Appropriateness",
        "values": {
            "??": "Inappropriate due to ...",
            "A": "Appropriate",
            "I": "Inappropriate",
            "P": "Preferred"
        }
    },
    "493": {
        "desc": "Specimen Condition",
        "values": {
            "AUT": "Autolyzed",
            "CLOT": "Clotted",
            "CON": "Contaminated",
            "COOL": "Cool",
            "FROZ": "Frozen",
            "HEM": "Hemolyzed",
            "LIVE": "Live",
            "ROOM": "Room temperature",
            "SNR": "Sample not received"
        }
    },
    "494": {
        "desc": "Specimen Child Role",
        "values": {
            "A": "Aliquot",
            "C": "Component",
            "M": "Modified from original specimen"
        }
    },
    "495": {
        "desc": "Body Site Modifier",
        "values": {
            "ANT": "Anterior",
            "BIL": "Bilateral",
            "DIS": "Distal",
            "EXT": "External",
            "L": "Left",
            "LAT": "Lateral",
            "LLQ": "Quadrant, Left Lower",
            "LOW": "Lower",
            "LUQ": "Quadrant, Left Upper",
            "MED": "Medial",
            "POS": "Posterior",
            "PRO": "Proximal",
            "R": "Right",
            "RLQ": "Quadrant, Right Lower",
            "RUQ": "Quadrant, Right Upper",
            "UPP": "Upper"
        }
    },
    "496": {
        "desc": "Consent Type",
        "values": {
            "100": "Photographs - news Media",
            "101": "Psychiatric Admission - Next of Kin",
            "102": "Psychiatric Information During Hospital Stay",
            "103": "Public Release of Information",
            "104": "Radiologic Procedure",
            "105": "Refusal of Treatment",
            "106": "Release of Body",
            "107": "Release of Limb",
            "108": "Rh Immune Globulin",
            "109": "Rights of Medical Research Participants",
            "110": "Request to Restrict Access/Disclosure to Medical Record/Protected Health Information",
            "111": "Request for Remain Anonymous",
            "112": "Seat Belt Exemption",
            "113": "Sialogram",
            "114": "Sigmoidoscopy",
            "115": "Sterilization - Anesthesia & Medical Services",
            "116": "Sterilization -Federally Funded",
            "117": "Sterilization - Female",
            "118": "Sterilization - Laparoscopy/Pomeroy",
            "119": "Sterilization - Non-Federally Funded",
            "120": "Sterilization - Secondary",
            "121": "Tranquilizers",
            "122": "Transfer - Acknowledgement",
            "123": "Transfer - Authorization",
            "124": "Transfer Certification - Physician",
            "125": "Transfer/Discharge Request",
            "126": "Transfer for Non-Medical Reasons",
            "127": "Transfer - Interfaculty Neonatal",
            "128": "Transfer Refusal",
            "129": "Transfer Refusal of Further Treatment",
            "130": "Treadmill & EKG",
            "131": "Treadmill, Thallium-201",
            "132": "Typhoid",
            "133": "Use of Investigational Device",
            "134": "Use of Investigational Drug",
            "135": "Venogram",
            "136": "Videotape",
            "1137": "Voiding Cystogram",
            "001": "Release of Information/MR / Authorization to Disclosure Protected Health Information",
            "002": "Medical Procedure (invasive)",
            "003": "Acknowledge Receipt of Privacy Notice",
            "004": "Abortion",
            "005": "Abortion/Laminaria",
            "006": "Accutane - Information",
            "007": "Accutane - Woman",
            "008": "Advanced Beneficiary Notice",
            "009": "AFP (Alpha Fetoprotein) Screening",
            "010": "Amniocentesis (consent & refusal)",
            "011": "Anatomical Gift (organ donation)",
            "012": "Anesthesia - Complications",
            "013": "Anesthesia - Questionnaire",
            "014": "Angiogram",
            "015": "Angioplasty",
            "016": "Anticancer Drugs",
            "017": "Antipsychotic Medications",
            "018": "Arthrogram",
            "019": "Autopsy",
            "020": "AZT Therapy",
            "021": "Biliary Drainage",
            "022": "Biliary Stone Extraction",
            "023": "Biopsy",
            "024": "Bleeding Time Test",
            "025": "Bronchogram",
            "026": "Cardiac Catheterization",
            "027": "Coronary Angiography",
            "028": "\"\"      \"\" w/o Surgery Capability",
            "029": "Cataract Op/Implant of FDA Aprvd Lens",
            "030": "Cataract Op/Implant of Investigational Lens",
            "031": "Cataract Surgery",
            "032": "Cholera Immunization",
            "033": "Cholesterol Screening",
            "034": "Circumcision - Newborn",
            "035": "Colonoscopy",
            "036": "Contact Lenses",
            "037": "CT Scan - Cervical & Lumbar",
            "038": "CT Scan w/ IV Contrast Media into Vein",
            "039": "CVS (Chorionic Villus) Sampling",
            "040": "Cystospy",
            "041": "Disclosure of Protected Health Information to Family/Friends",
            "042": "D & C and Conization",
            "043": "Dacryocystogram",
            "044": "Diagnostic Isotope",
            "045": "Drainage of an Abscess",
            "046": "Drug Screening",
            "047": "Electronic Monitoring of Labor - Refusal",
            "048": "Endometrial Biopsy",
            "049": "Endoscopy/Sclerosis of Esophageal Varices",
            "050": "ERCP",
            "051": "Exposure to reportable Communicable Disease",
            "052": "External Version",
            "053": "Fluorescein Angioscopy",
            "054": "Hepatitis B - Consent/Declination",
            "055": "Herniogram",
            "056": "HIV Test - Consent Refusal",
            "057": "HIV Test - Disclosure",
            "058": "HIV Test - Prenatal",
            "059": "Home IV Treatment Program",
            "060": "Home Parenteral Treatment Program",
            "061": "Hysterectomy",
            "062": "Hysterosalpingogram",
            "063": "Injection Slip/ Consent",
            "064": "Intrauterine Device",
            "065": "Intrauterine Device/Sterilization",
            "066": "Intravascular Infusion of Streptokinase/Urokinase",
            "067": "Intravenous Cholangiogram",
            "068": "Intravenous Digital Angiography",
            "069": "Iodine Administration",
            "070": "ISG",
            "071": "IVP",
            "072": "Laser Photocoagulation",
            "073": "Laser treatment",
            "074": "Lithium Carbonate",
            "075": "Liver Biopsy",
            "076": "Lumbar Puncture",
            "077": "Lymphangiogram",
            "078": "MAO Inhibitors",
            "079": "Med, Psych, and/or Drug/Alcohol",
            "080": "Medical Treatment - Refusal",
            "081": "Morning-after Pill",
            "082": "MRI - Adult",
            "083": "MRI - Pediatric",
            "084": "Myelogram",
            "085": "Needle Biopsy",
            "086": "Needle Biopsy of Lung",
            "087": "Newborn Treatment and Release",
            "088": "Norplant Subdermal Birth Control Implant",
            "089": "Operations, Anesthesia, Transfusions",
            "090": "Oral Contraceptives",
            "091": "Organ Donation",
            "092": "Patient Permits, Consents",
            "093": "Patient Treatment Permit, Release & Admission",
            "094": "Penile Injections",
            "095": "Percutaneous Nephrostomy",
            "096": "Percutaneous Transhepatic Cholangiogram",
            "097": "Photographs",
            "098": "Photographs - Employee",
            "099": "Photographs - Medical Research"
        }
    },
    "497": {
        "desc": "Consent Mode",
        "values": {
            "T": "Telephone",
            "V": "Verbal",
            "W": "Written"
        }
    },
    "498": {
        "desc": "Consent Status",
        "values": {
            "A": "Active - Consent has been granted",
            "B": "Bypassed (Consent not sought)",
            "L": "Limited - Consent has been granted with limitations",
            "P": "Pending - Consent has not yet been sought",
            "R": "Refused - Consent has been refused",
            "X": "Rescinded - Consent was initially granted, but was subsequently revoked or ended."
        }
    },
    "499": {
        "desc": "Consent Bypass Reason",
        "values": {
            "E": "Emergency",
            "PJ": "Professional Judgment"
        }
    },
    "500": {
        "desc": "Consent Disclosure Level",
        "values": {
            "F": "Full Disclosure",
            "N": "No Disclosure",
            "P": "Partial Disclosure"
        }
    },
    "501": {
        "desc": "Consent Non-Disclosure Reason",
        "values": {
            "E": "Emergency",
            "PR": "Patient Request",
            "RX": "Rx Private"
        }
    },
    "502": {
        "desc": "Non-Subject Consenter Reason",
        "values": {
            "LM": "Legally mandated",
            "MIN": "Subject is a minor",
            "NC": "Subject is not competent to consent"
        }
    },
    "503": {
        "desc": "Sequence/Results Flag",
        "values": {
            "C": "Cyclical",
            "R": "Reserved for future use",
            "S": "Sequential"
        }
    },
    "504": {
        "desc": "Sequence Condition Code",
        "values": {
            "EE": "End related service request(s), end current service request.",
            "ES": "End related service request(s), start current service request.",
            "SE": "Start related service request(s), end current service request.",
            "SS": "Start related service request(s), start current service request."
        }
    },
    "505": {
        "desc": "Cyclic Entry/Exit Indicator",
        "values": {
            "#": "The last service request in a cyclic group.",
            "*": "The first service request in a cyclic group"
        }
    },
    "506": {
        "desc": "Service Request Relationship",
        "values": {
            "C": "Compound",
            "E": "Exclusive",
            "N": "Nurse prerogative",
            "S": "Simultaneous",
            "T": "Tapering"
        }
    },
    "507": {
        "desc": "Observation Result Handling",
        "values": {
            "F": "Film-with-patient",
            "N": "Notify provider when ready"
        }
    },
    "508": {
        "desc": "Blood Product Processing Requirements",
        "values": {
            "AU": "Autologous Unit",
            "CM": "CMV Negative",
            "CS": "CMV Safe",
            "DI": "Directed Unit",
            "FR": "Fresh unit",
            "HB": "Hemoglobin S Negative",
            "HL": "HLA Matched",
            "IG": "IgA Deficient",
            "IR": "Irradiated",
            "LR": "Leukoreduced",
            "WA": "Washed"
        }
    },
    "510": {
        "desc": "Blood Product Dispense Status",
        "values": {
            "CR": "Released into inventory for general availability",
            "DS": "Dispensed to patient location",
            "PT": "Presumed transfused (dispensed and not returned)",
            "RA": "Returned unused/no longer needed",
            "RD": "Reserved and ready to dispense",
            "RE": "Released (no longer allocated for the patient)",
            "RI": "Received into inventory (for specified patient)",
            "RL": "Returned unused/keep linked to patient for possible use later",
            "RQ": "Request to dispense blood product",
            "RS": "Reserved (ordered and product allocated for the patient)",
            "WA": "Wasted (product no longer viable)"
        }
    },
    "511": {
        "desc": "BP Observation Status Codes Interpretation",
        "values": {
            "C": "Record coming over is a correction and thus replaces a final status",
            "D": "Deletes the BPX record",
            "F": "Final status; Can only be changed with a corrected status",
            "O": "Order detail description only (no status)",
            "P": "Preliminary status",
            "W": "Post original as wrong, e.g., transmitted for wrong patient"
        }
    },
    "513": {
        "desc": "Blood Product Transfusion/Disposition Status",
        "values": {
            "RA": "Returned unused/no longer needed",
            "RL": "Returned unused/keep linked to patient for possible use later",
            "TR": "Transfused with adverse reaction",
            "TX": "Transfused",
            "WA": "Wasted (product no longer viable)"
        }
    },
    "514": {
        "desc": "Transfusion Adverse Reaction",
        "values": {
            "ABOINC": "ABO Incompatible Transfusion Reaction",
            "ACUTHEHTR": "Acute Hemolytic Transfusion Reaction",
            "ALLERGIC1": "Allergic Reaction - First",
            "ALLERGIC2": "Allergic Reaction - Recurrent",
            "ALLERGICR": "Allergic Reaction - Repeating",
            "ANAPHYLAC": "Anaphylactic Reaction",
            "BACTCONTAM": "Reaction to Bacterial Contamination",
            "DELAYEDHTR": "Delayed Hemolytic Transfusion Reaction",
            "DELAYEDSTR": "Delayed Serological Transfusion Reaction",
            "GVHD": "Graft vs Host Disease - Transfusion - Associated",
            "HYPOTENS": "Non-hemolytic Hypotensive Reaction",
            "NONHTR1": "Non-Hemolytic Fever Chill Transfusion Reaction - First",
            "NONHTR2": "Non-Hemolytic Fever Chill Transfusion Reaction - Recurrent",
            "NONHTRREC": "Non-Hemolytic Fever Chill Transfusion Reaction - Repeating",
            "NONIMMUNE": "Non-Immune Hemolysis",
            "NONSPEC": "Non-Specific, Non-Hemolytic Transfusion Reaction",
            "NORXN": "No Evidence of Transfusion Reaction",
            "PTP": "Posttransfusion Purpura",
            "VOLOVER": "Symptoms most likely due to volume overload"
        }
    },
    "516": {
        "desc": "Error severity",
        "values": {
            "E": "Error",
            "F": "Fatal Error",
            "I": "Information",
            "W": "Warning"
        }
    },
    "517": {
        "desc": "Inform person code",
        "values": {
            "HD": "Inform help desk",
            "NPAT": "Do NOT inform patient",
            "PAT": "Inform patient",
            "USR": "Inform User"
        }
    },
    "518": {
        "desc": "Override type",
        "values": {
            "EQV": "Equivalence Override",
            "EXTN": "Extension Override",
            "INLV": "Interval Override"
        }
    },
    "520": {
        "desc": "Message waiting priority",
        "values": {
            "H": "High",
            "L": "Low",
            "M": "Medium"
        }
    },
    "523": {
        "desc": "Computation type",
        "values": {
            "%": "Indicates a percent change",
            "a": "Absolute Change"
        }
    },
    "524": {
        "desc": "Sequence condition",
        "values": {
            "C": "Repeating cycle of orders",
            "R": "Reserved for possible future use",
            "S": "Sequence conditions"
        }
    },
    "527": {
        "desc": "Calendar alignment",
        "values": {
            "DM": "day of the month",
            "DW": "day of the week (begins with Monday)",
            "DY": "day of the year",
            "HD": "hour of the day",
            "MY": "month of the year",
            "NH": "minute of the hour",
            "SN": "second of the minute",
            "WY": "week of the year"
        }
    },
    "528": {
        "desc": "Event related period",
        "values": {
            "AC": "before meal (from lat. ante cibus)",
            "ACD": "before lunch (from lat. ante cibus diurnus)",
            "ACM": "before breakfast (from lat. ante cibus matutinus)",
            "ACV": "before dinner (from lat. ante cibus vespertinus)",
            "HS": "the hour of sleep (e.g., H18-22)",
            "IC": "between meals (from lat. inter cibus)",
            "ICD": "between lunch and dinner",
            "ICM": "between breakfast and lunch",
            "ICV": "between dinner and the hour of sleep",
            "PC": "after meal (from lat. post cibus)",
            "PCD": "after lunch (from lat. post cibus diurnus)",
            "PCM": "after breakfast (from lat. post cibus matutinus)",
            "PCV": "after dinner (from lat. post cibus vespertinus)"
        }
    },
    "530": {
        "desc": "Organization, agency, department",
        "values": {
            "AE": "American Express",
            "DEA": "Drug Enforcement Agency",
            "DOD": "Department of Defense",
            "MC": "Master Card",
            "VA": "Veterans Affairs",
            "VI": "Visa"
        }
    },
    "532": {
        "desc": "Expanded yes/no indicator",
        "values": {
            "ASKU": "asked but unknown",
            "N": "No",
            "NA": "not applicable",
            "NASK": "not asked",
            "NAV": "temporarily unavailable",
            "NI": "No Information",
            "NP": "not present",
            "UNK": "unknown",
            "Y": "Yes"
        }
    },
    "534": {
        "desc": "Notify Clergy Code",
        "values": {
            "L": "Last Rites only",
            "N": "No",
            "O": "Other",
            "U": "Unknown",
            "Y": "Yes"
        }
    },
    "535": {
        "desc": "Signature Code",
        "values": {
            "C": "Signed CMS-1500 claim form on file, e.g., authorization for release of any medical or other information necessary to process this claim and assignment of benefits.",
            "M": "Signed authorization for assignment of benefits on file.",
            "P": "Signature generated by provider because the patient was not physically present for services.",
            "S": "Signed authorization for release of any medical or other information necessary to process this claim on file."
        }
    },
    "536": {
        "desc": "Certificate Status",
        "values": {
            "E": "Expired",
            "I": "Inactive",
            "P": "Provisional",
            "R": "Revoked",
            "V": "Active/Valid"
        }
    },
    "538": {
        "desc": "Institution Relationship Type",
        "values": {
            "CON": "Contractor",
            "CST": "Consultant",
            "EMP": "Employee",
            "VOL": "Volunteer"
        }
    },
    "540": {
        "desc": "Inactive Reason Code",
        "values": {
            "L": "Leave of Absence",
            "R": "Retired",
            "T": "Termination"
        }
    },
    "547": {
        "desc": "Jurisdictional Breadth",
        "values": {
            "C": "County/Parish",
            "N": "Country",
            "S": "State/Province"
        }
    },
    "548": {
        "desc": "Signatory's Relationship to Subject",
        "values": {
            "1": "Self",
            "2": "Parent",
            "3": "Next of Kin",
            "4": "Durable Power of Attorney in Healthcare Affairs",
            "5": "Conservator",
            "6": "Emergent Practitioner (practitioner judging case as emergency requiring care without a consent)",
            "7": "Non-Emergent Practitioner (i.e. medical ethics committee)"
        }
    },
    "550": {
        "desc": "Body Parts",
        "values": {
            "?": "External Jugular",
            "ACET": "Acetabulum",
            "ACHIL": "Achilles",
            "ADB": "Abdomen",
            "ADE": "Adenoids",
            "ADR": "Adrenal",
            "AMN": "Amniotic fluid",
            "AMS": "Amniotic Sac",
            "ANAL": "Anal",
            "ANKL": "Ankle",
            "ANTEC": "Antecubital",
            "ANTECF": "Antecubital Fossa",
            "ANTR": "Antrum",
            "ANUS": "Anus",
            "AORTA": "Aorta",
            "APDX": "Appendix",
            "AR": "Aortic Rim",
            "AREO": "Areola",
            "ARM": "Arm",
            "ARTE": "Artery",
            "ASCIT": "Ascites",
            "ASCT": "Ascitic Fluid",
            "ATR": "Atrium",
            "AURI": "Auricular",
            "AV": "Aortic Valve",
            "AXI": "Axilla",
            "BACK": "Back",
            "BARTD": "Bartholin Duct",
            "BARTG": "Bartholin Gland",
            "BCYS": "Brain Cyst Fluid",
            "BDY": "Body, Whole",
            "BID": "Bile Duct",
            "BIFL": "Bile fluid",
            "BLAD": "Bladder",
            "BLD": "Blood, Whole",
            "BLDA": "Blood,  Arterial",
            "BLDC": "Blood,  Capillary",
            "BLDV": "Blood,  Venous",
            "BLOOD": "Blood",
            "BMAR": "Bone marrow",
            "BON": "Bone",
            "BOWEL": "Bowel",
            "BOWLA": "Bowel, Large",
            "BOWSM": "Bowel, Small",
            "BPH": "Basophils",
            "BRA": "Brachial",
            "BRAIN": "Brain",
            "BRO": "Bronchial",
            "BROCH": "Bronchiole/Bronchiolar",
            "BRONC": "Bronchus/Bronchial",
            "BROW": "Eyebrow",
            "BRST": "Breast",
            "BRSTFL": "Breast fluid",
            "BRTGF": "Bartholin Gland Fluid",
            "BRV": "Broviac",
            "BUCCA": "Buccal",
            "BURSA": "Bursa",
            "BURSF": "Bursa Fluid",
            "BUTT": "Buttocks",
            "CALF": "Calf",
            "CANAL": "Canal",
            "CANLI": "Canaliculis",
            "CANTH": "Canthus",
            "CARO": "Carotid",
            "CARP": "Carpal",
            "CAVIT": "Cavity",
            "CBLD": "Blood, Cord",
            "CDM": "Cardiac Muscle",
            "CDUCT": "Common Duct",
            "CECUM": "Cecum/Cecal",
            "CERVUT": "Cervix/Uterus",
            "CHE": "Cavity, Chest",
            "CHEEK": "Cheek",
            "CHES": "Chest",
            "CHEST?": "Chest Tube",
            "CHIN": "Chin",
            "CIRCU": "Circumcision Site",
            "CLAVI": "Clavicle/Clavicular",
            "CLIT": "Clitoris",
            "CLITO": "Clitoral",
            "CNL": "Cannula",
            "COCCG": "Coccygeal",
            "COCCY": "Coccyx",
            "COLON": "Colon",
            "COLOS": "Colostomy",
            "CONJ": "Conjunctiva",
            "COR": "Cord",
            "CORAL": "Coral",
            "CORD": "Cord Blood",
            "CORN": "Cornea",
            "COS": "Colostomy Stoma",
            "CRANE": "Cranium, ethmoid",
            "CRANF": "Cranium, frontal",
            "CRANO": "Cranium, occipital",
            "CRANP": "Cranium, parietal",
            "CRANS": "Cranium, sphenoid",
            "CRANT": "Cranium, temporal",
            "CSF": "Cerebral Spinal Fluid",
            "CUBIT": "Cubitus",
            "CUFF": "Cuff",
            "CULD": "Cul De Sac",
            "CULDO": "Culdocentesis",
            "CVX": "Cervix",
            "DELT": "Deltoid",
            "DEN": "Dental Gingiva",
            "DENTA": "Dental",
            "DIAF": "Dialysis Fluid",
            "DIGIT": "Digit",
            "DISC": "Disc",
            "DORS": "Dorsum/Dorsal",
            "DPH": "Diaphragm",
            "DUFL": "Duodenal Fluid",
            "DUODE": "Duodenum/Duodenal",
            "DUR": "Dura",
            "EAR": "Ear",
            "EARBI": "Ear bone, incus",
            "EARBM": "Ear bone, malleus",
            "EARBS": "Ear bone,stapes",
            "EARLO": "Ear Lobe",
            "EC": "Endocervical",
            "ELBOW": "Elbow",
            "ELBOWJ": "Elbow Joint",
            "ENDC": "Endocardium",
            "ENDM": "Endometrium",
            "EOLPH": "endolpthamitis",
            "EOS": "Eosinophils",
            "EPD": "Epididymis",
            "EPICA": "Epicardial",
            "EPICM": "Epicardium",
            "EPIDU": "Epidural",
            "EPIGL": "Epiglottis",
            "ESO": "Esophagus",
            "ESOPG": "Esophageal",
            "ET": "Endotracheal",
            "ETHMO": "Ethmoid",
            "EUR": "Endourethral",
            "EYE": "Eye",
            "EYELI": "Eyelid",
            "FACE": "Face",
            "FALLT": "Fallopian Tube",
            "FBINC": "Facial bone, inferior nasal concha",
            "FBLAC": "Facial bone, lacrimal",
            "FBMAX": "Facial bone, maxilla",
            "FBNAS": "Facial bone, nasal",
            "FBPAL": "Facial bone, palatine",
            "FBVOM": "Facial bone, vomer",
            "FBZYG": "Facial bone, zygomatic",
            "FEMOR": "Femoral",
            "FEMUR": "Femur",
            "FET": "Fetus",
            "FIBU": "Fibula",
            "FING": "Finger",
            "FINGN": "Finger Nail",
            "FMH": "Femoral Head",
            "FOL": "Follicle",
            "FOOT": "Foot",
            "FOREA": "Forearm",
            "FOREH": "Forehead",
            "FORES": "Foreskin",
            "FOURC": "Fourchette",
            "GB": "Gall Bladder",
            "GEN": "Genital",
            "GENC": "Genital Cervix",
            "GENL": "Genital Lochia",
            "GL": "Genital Lesion",
            "GLAND": "Gland",
            "GLANS": "Glans",
            "GLUT": "Gluteus",
            "GLUTE": "Gluteal",
            "GLUTM": "Gluteus Medius",
            "GROIN": "Groin",
            "GUM": "Gum",
            "GVU": "Genital - Vulva",
            "HAL": "Hallux",
            "HAND": "Hand",
            "HAR": "Hair",
            "HART": "Heart",
            "HEAD": "Head",
            "HEEL": "Heel",
            "HEM": "Hemorrhoid",
            "HIP": "Hip",
            "HIPJ": "Hip Joint",
            "HUMER": "Humerus",
            "HV": "Heart Valve",
            "HVB": "Heart Valve, Bicuspid",
            "HVT": "Heart Valve, Tricuspid",
            "HYMEN": "Hymen",
            "ICX": "Intracervical",
            "ILC": "Ileal Conduit",
            "ILCON": "Ilical Conduit",
            "ILCR": "Iliac Crest",
            "ILE": "Ileal Loop",
            "ILEOS": "Ileostomy",
            "ILEUM": "Ileum",
            "ILIAC": "Iliac",
            "INASA": "Intranasal",
            "INGUI": "Inguinal",
            "INSTL": "Intestine, Large",
            "INSTS": "Intestine, Small",
            "INT": "Intestine",
            "INTRO": "Introitus",
            "INTRU": "Intrauterine",
            "ISCHI": "Ischium",
            "ISH": "Loop, Ishial",
            "JAW": "Jaw",
            "JUGI": "Jugular, Internal",
            "KIDN?": "Kidney",
            "KNEE": "Knee",
            "KNEEF": "Knee Fluid",
            "KNEEJ": "Knee Joint",
            "LABIA": "Labia",
            "LABMA": "Labia Majora",
            "LABMI": "Labia Minora",
            "LACRI": "Lacrimal",
            "LAM": "Lamella",
            "LARYN": "Larynx",
            "LEG": "Leg",
            "LENS": "Lens",
            "LING": "Lingual",
            "LINGU": "Lingula",
            "LIP": "Lip",
            "LIVER": "Liver",
            "LMN": "Lumen",
            "LN": "Lymph Node",
            "LNG": "Lymph Node, Groin",
            "LOBE": "Lobe",
            "LOCH": "Lochia",
            "LUMBA": "Lumbar",
            "LUNG": "Lung",
            "LYM": "Lymphocytes",
            "MAC": "Macrophages",
            "MALLE": "Malleolus",
            "MANDI": "Mandible/Mandibular",
            "MAR": "Marrow",
            "MAST": "Mastoid",
            "MAXIL": "Maxilla/Maxillary",
            "MAXS": "Maxillary Sinus",
            "MEATU": "Meatus",
            "MEC": "Meconium",
            "MEDST": "Mediastinum",
            "MEDU": "Medullary",
            "METAC": "Metacarpal",
            "METAT": "Metatarsal",
            "MILK": "Milk, Breast",
            "MITRL": "Mitral Valve",
            "MOLAR": "Molar",
            "MONSU": "Mons Ureteris",
            "MONSV": "Mons Veneris(Mons Pubis)",
            "MOU": "Membrane",
            "MOUTH": "Mouth",
            "MP": "Mons Pubis",
            "MPB": "Meninges",
            "MRSA2": "Mrsa:",
            "MYO": "Myocardium",
            "NAIL": "Nail",
            "NAILB": "Nail Bed",
            "NAILF": "Nail, Finger",
            "NAILT": "Nail, Toe",
            "NARES": "Nares",
            "NASL": "Nasal",
            "NAVEL": "Navel",
            "NECK": "Neck",
            "NERVE": "Nerve",
            "NIPPL": "Nipple",
            "NLACR": "Nasolacrimal",
            "NOS": "Nose (Nasal Passage)",
            "NOSE": "Nose",
            "NOSTR": "Nostril",
            "NP": "Nasopharyngeal",
            "NSS": "Nasal Septum",
            "NTRAC": "Nasotracheal",
            "OCCIP": "Occipital",
            "OLECR": "Olecranon",
            "OMEN": "Omentum",
            "ORBIT": "Orbit/Orbital",
            "ORO": "Oropharynx",
            "OSCOX": "Os coxa (pelvic girdle)",
            "OVARY": "Ovary",
            "PAFL": "Pancreatic Fluid",
            "PALAT": "Palate",
            "PALM": "Palm",
            "PANAL": "Perianal/Perirectal",
            "PANCR": "Pancreas",
            "PARAT": "Paratracheal",
            "PARIE": "Parietal",
            "PARON": "Paronychia",
            "PAROT": "Parotid",
            "PAS": "Parasternal",
            "PATEL": "Patella",
            "PCARD": "Pericardium",
            "PCLIT": "Periclitoral",
            "PELV": "Pelvis",
            "PENIS": "Penis",
            "PENSH": "Penile Shaft",
            "PER": "Peritoneal",
            "PERI": "Pericardial Fluid",
            "PERIH": "Perihepatic",
            "PERIN": "Perineal Abscess",
            "PERIS": "Perisplenic",
            "PERIT": "Peritoneum",
            "PERIU": "Periurethal",
            "PERIV": "Perivesicular",
            "PERRA": "Perirectal",
            "PERT": "Peritoneal Fluid",
            "PHALA": "Phalanyx",
            "PILO": "Pilonidal",
            "PINNA": "Pinna",
            "PLACF": "Placenta (Fetal Side)",
            "PLACM": "Placenta (Maternal Side)",
            "PLANT": "Plantar",
            "PLATH": "Palate, Hard",
            "PLATS": "Palate, Soft",
            "PLC": "Placenta",
            "PLEU": "Pleural Fluid",
            "PLEUR": "Pleura",
            "PLR": "Pleural Fluid (Thoracentesis Fld)",
            "PNEAL": "Perineal",
            "PNEPH": "Perinephric",
            "PNM": "Perineum",
            "POPLI": "Popliteal",
            "PORBI": "Periorbital",
            "PREAU": "Preauricular",
            "PRERE": "Prerenal",
            "PROS": "Prostatic Fluid",
            "PRST": "Prostate Gland",
            "PTONS": "Peritonsillar",
            "PUBIC": "Pubic",
            "PUL": "Pulmonary Artery",
            "RADI": "Radial",
            "RADIUS": "Radius",
            "RBC": "Red Blood Cells",
            "RECTL": "Rectal",
            "RECTU": "Rectum",
            "RENL": "Renal",
            "RIB": "Rib",
            "RNP": "Renal Pelvis",
            "RPERI": "Retroperitoneal",
            "SAC": "Uterine Cul/De/Sac",
            "SACIL": "Sacroiliac",
            "SACRA": "Sacral",
            "SACRO": "Sacrococcygeal",
            "SACRU": "Sacrum",
            "SALGL": "Salivary Gland",
            "SCALP": "Scalp",
            "SCAPU": "Scapula/Scapular",
            "SCLAV": "Supraclavicle/Supraclavicular",
            "SCLER": "Sclera",
            "SCLV": "Sub Clavian",
            "SCROT": "Scrotum/Scrotal",
            "SDP": "Subdiaphramatic",
            "SEM": "Seminal Fluid",
            "SEMN": "Semen",
            "SEPTU": "Septum/Septal",
            "SEROM": "Seroma",
            "SGF": "Subgaleal Fluid",
            "SHIN": "Shin",
            "SHOL": "Shoulder",
            "SHOLJ": "Sholder Joint",
            "SIGMO": "Sigmoid",
            "SINUS": "Sinus",
            "SKENE": "Skene's Gland",
            "SKM": "Skeletal Muscle",
            "SKULL": "Skull",
            "SOLE": "Sole",
            "SPCOR": "Spinal Cord",
            "SPHEN": "Sphenoid",
            "SPLN": "Spleen",
            "SPRM": "Spermatozoa",
            "SPX": "Supra Cervical",
            "STER": "Sternum/Sternal",
            "STOM": "Stoma",
            "STOMA": "Stomach",
            "STOOLL": "Liquid Stool",
            "STUMP": "Stump",
            "SUB": "Subdural",
            "SUBD": "Subdural Fluid",
            "SUBM": "Submandibular",
            "SUBME": "Submental",
            "SUBPH": "Subphrenic",
            "SUBX": "Submaxillary",
            "SUPB": "Suprapubic Specimen",
            "SUPRA": "Suprapubic",
            "SWT": "Sweat",
            "SWTG": "Sweat Gland",
            "SYN": "Synovial Fluid",
            "SYNOL": "Synovial",
            "SYNOV": "Synovium",
            "TARS": "Tarsal",
            "TBRON": "Transbronchial",
            "TCN": "Transcarina Asp",
            "TDUCT": "Tear Duct",
            "TEAR": "Tears",
            "TEMPL": "Temple",
            "TEMPO": "Temporal",
            "TESTI": "Testicle(Testis)",
            "THIGH": "Thigh",
            "THM": "Thymus",
            "THORA": "Thoracentesis",
            "THRB": "Throat",
            "THUMB": "Thumb",
            "THYRD": "Thyroid",
            "TIBIA": "Tibia",
            "TML": "Temporal Lobe",
            "TNL": "Thumbnail",
            "TOE": "Toe",
            "TOEN": "Toe Nail",
            "TONG": "Tongue",
            "TONS": "Tonsil",
            "TOOTH": "Tooth",
            "TRCHE": "Trachea/Tracheal",
            "TSK": "Tooth Socket",
            "ULNA": "Ulna/Ulnar",
            "UMB": "Umbilical Blood",
            "UMBL": "Umbilicus",
            "URET": "Ureter",
            "URTH": "Urethra",
            "USTOM": "Stoma, Urinary",
            "UTER": "Uterus",
            "UTERI": "Uterine",
            "VAGIN": "Vagina/Vaginal",
            "VAL": "Valve",
            "VAS": "Vas Deferens",
            "VASTL": "Vastus Lateralis",
            "VAULT": "Vault",
            "VCSF": "Ventricular CSF",
            "VCUFF": "Vaginal Cuff",
            "VEIN": "Vein",
            "VENTG": "Ventragluteal",
            "VERMI": "Vermis Cerebelli",
            "VERTC": "Vertebra, cervical",
            "VERTL": "Vertebra, lumbar",
            "VERTT": "Vertebra, thoracic",
            "VESCL": "Vesicular",
            "VESFLD": "Vesicular Fluid",
            "VESI": "Vesicle",
            "VESTI": "Vestibule(Genital)",
            "VGV": "Vaginal Vault",
            "VITR": "Vitreous Fluid",
            "VOC": "Vocal Cord",
            "VULVA": "Vulva",
            "WBC": "Leukocytes",
            "WRIST": "Wrist"
        }
    },
    "553": {
        "desc": "Invoice Control Code",
        "values": {
            "AA": "Authorization request for inpatient admission",
            "AI": "Combined Authorization and Adjudication request",
            "CA": "Cancel Authorization request",
            "CG": "Cancel Invoice Product/Service Group",
            "CL": "Cancel Invoice Product/Service Line Item",
            "CN": "Cancel Invoice",
            "CP": "Copy of Invoice",
            "CQ": "Coverage Register Query",
            "EA": "Authorization request for inpatient stay extension",
            "OA": "Original Authorization",
            "OR": "Original Invoice",
            "PA": "Pre-Authorization",
            "PD": "Pre-Determination Invoice",
            "RA": "Re-Assessment",
            "RC": "Referral Pre-Authorization",
            "RU": "Referral authorization",
            "SA": "Special Authorization"
        }
    },
    "554": {
        "desc": "Invoice Reason Codes",
        "values": {
            "LATE": "Late Invoice",
            "NORM": "Normal submission",
            "SUB": "Subscriber coverage problem"
        }
    },
    "555": {
        "desc": "Invoice Type",
        "values": {
            "BK": "Block",
            "FN": "Final",
            "FS": "Fee for Service",
            "GP": "Group",
            "IN": "Information Only",
            "NP": "Non Patient",
            "PA": "Partial",
            "SL": "Salary",
            "SS": "By Session",
            "SU": "Supplemental"
        }
    },
    "556": {
        "desc": "Benefit Group",
        "values": {
            "AMB": "AMBULATORY CARE",
            "DENT": "DENTAL"
        }
    },
    "557": {
        "desc": "Payee Type",
        "values": {
            "EMPL": "Employer",
            "ORG": "Payee Organization",
            "PERS": "Person",
            "PPER": "Pay Person"
        }
    },
    "558": {
        "desc": "Payee Relationship to Invoice",
        "values": {
            "FM": "Family Member",
            "GT": "Guarantor",
            "PT": "Patient",
            "SB": "Subscriber"
        }
    },
    "559": {
        "desc": "Product/Service Status",
        "values": {
            "D": "Denied",
            "P": "Processed",
            "R": "Rejected"
        }
    },
    "560": {
        "desc": "Quantity Units",
        "values": {
            "DY": "Days",
            "FL": "Units",
            "HS": "Hours",
            "MN": "Month",
            "YY": "Years"
        }
    },
    "561": {
        "desc": "Product/Services Clarification Codes",
        "values": {
            "CLCTR": "Claim Center",
            "DGAPP": "Diagnostic Approval Number",
            "DTCTR": "Data Center Number",
            "ENC": "Encounter Number",
            "GFTH": "Good Faith Indicator",
            "OOP": "Out of Province Indicator",
            "SEQ": "Sequence Number"
        }
    },
    "562": {
        "desc": "Processing Consideration Codes",
        "values": {
            "DFADJ": "Deferred Adjudication Processing",
            "EFORM": "Electronic form to follow",
            "FAX": "Fax to follow",
            "PAPER": "Paper documentation to follow",
            "PYRDELAY": "Delayed by a Previous Payer",
            "RTADJ": "Real Time Adjudication Processing"
        }
    },
    "564": {
        "desc": "Adjustment Category Code",
        "values": {
            "EA": "Edit/Adjudication Response",
            "IN": "Information",
            "PA": "Provider Adjustment",
            "PR": "Processing Result"
        }
    },
    "565": {
        "desc": "Provider Adjustment Reason Code",
        "values": {
            "DISP": "Dispensing Fee",
            "GST": "Goods and Services Tax",
            "HST": "Harmonized Sales Tax",
            "MKUP": "Mark up Fee",
            "PST": "Provincial Sales Tax"
        }
    },
    "569": {
        "desc": "Adjustment Action",
        "values": {
            "EOB": "Print on EOB",
            "PAT": "Inform Patient",
            "PRO": "Inform Provider"
        }
    },
    "570": {
        "desc": "Payment Method Code",
        "values": {
            "CASH": "Cash",
            "CCCA": "Credit Card",
            "CCHK": "Cashier's Check",
            "CDAC": "Credit/Debit Account",
            "CHCK": "Check",
            "DDPO": "Direct Deposit",
            "DEBC": "Debit Card",
            "SWFT": "Society for Worldwide Interbank Financial Telecommunications (S.W.I.F.T.)",
            "TRAC": "Traveler's Check",
            "VISN": "VISA Special Electronic Funds Transfer Network"
        }
    },
    "571": {
        "desc": "Invoice Processing Results Status",
        "values": {
            "ACK": "Acknowledge",
            "ADJ": "Adjudicated with Adjustments",
            "ADJSUB": "Adjudicated as Submitted",
            "ADJZER": "Adjudicated to Zero",
            "PAID": "Paid",
            "PEND": "Pending",
            "PRED": "Pre-Determination",
            "REJECT": "Reject"
        }
    },
    "572": {
        "desc": "Tax status",
        "values": {
            "RVAT": "Registered in VAT register",
            "UVAT": "Unregistered in VAT register"
        }
    },
    "615": {
        "desc": "User Authentication Credential Type Code",
        "values": {
            "KERB": "Kerberos Service Ticket",
            "SAML": "Authenticated User Identity Assertion"
        }
    },
    "616": {
        "desc": "Address Expiration Reason",
        "values": {
            "C": "Corrected",
            "E": "Added in error",
            "M": "Moved",
            "R": "On request"
        }
    },
    "617": {
        "desc": "Address Usage",
        "values": {
            "C": "Classification",
            "M": "Mailing",
            "V": "Visit"
        }
    },
    "618": {
        "desc": "Protection Code",
        "values": {
            "LI": "Listed",
            "UL": "Unlisted (Should not appear in directories)",
            "UP": "Unpublished"
        }
    },
    "625": {
        "desc": "Item Status Codes",
        "values": {
            "1": "Active",
            "2": "Pending Inactive",
            "3": "Inactive"
        }
    },
    "634": {
        "desc": "Item Importance Codes",
        "values": {
            "CRT": "Critical"
        }
    },
    "642": {
        "desc": "Reorder Theory Codes",
        "values": {
            "D": "DOP/DOQ",
            "M": "MIN/MAX",
            "O": "Override"
        }
    },
    "651": {
        "desc": "Labor Calculation Type",
        "values": {
            "CST": "Cost",
            "TME": "Time"
        }
    },
    "653": {
        "desc": "Date Format",
        "values": {
            "1": "mm/dd/yy",
            "2": "yy.mm.dd",
            "3": "dd/mm/yy",
            "4": "dd.mm.yy",
            "5": "yy/mm/dd",
            "6": "Yymmdd"
        }
    },
    "657": {
        "desc": "Device Type",
        "values": {
            "1": "EO Gas Sterilizer",
            "2": "Steam Sterilizer",
            "3": "Peracetic Acid"
        }
    },
    "659": {
        "desc": "Lot Control",
        "values": {
            "1": "OR Mode Without Operator",
            "2": "OR Mode with Operator",
            "3": "CPD Mode Without Operator",
            "4": "CPD Mode With Operator",
            "5": "Offline Mode"
        }
    },
    "667": {
        "desc": "Device Data State",
        "values": {
            "0": "Real Time Values",
            "1": "Historic Values"
        }
    },
    "669": {
        "desc": "Load Status",
        "values": {
            "LCC": "Load is Complete",
            "LCN": "Load Canceled",
            "LCP": "Load In Process",
            "LLD": "Building a Load"
        }
    },
    "682": {
        "desc": "Device Status",
        "values": {
            "0": "Ready",
            "1": "Not Ready"
        }
    },
    "702": {
        "desc": "Cycle Type",
        "values": {
            "2RS": "Second Rinse",
            "ANR": "Anesthesia/Respiratory",
            "BDP": "Bedpans",
            "BWD": "Bowie-Dick Test",
            "CMW": "Chemical Wash",
            "COD": "Code",
            "CRT": "Cart Wash",
            "DEC": "Decontamination",
            "DRT": "Dart",
            "DRW": "Dart Warm-up Cycle",
            "EOH": "EO High Temperature",
            "EOL": "EO Low Temperature",
            "EXP": "Express",
            "FLS": "Flash",
            "GLS": "Glassware",
            "GNP": "Gen. Purpose",
            "GRV": "Gravity",
            "GTL": "Gentle",
            "ISO": "Isothermal",
            "IST": "Instrument Wash",
            "LKT": "Leak Test",
            "LQD": "Liquid",
            "OPW": "Optional Wash",
            "PEA": "Peracetic Acid",
            "PLA": "Plastic Goods Wash",
            "PRV": "Prevac",
            "RNS": "Rinse",
            "SFP": "Steam Flush Pressure Pulse",
            "THR": "Thermal",
            "TRB": "Tray/Basin",
            "UTL": "Utensil Wash",
            "WFP": "Wrap/Steam Flush Pressure Pulse (Wrap/SFPP)"
        }
    },
    "717": {
        "desc": "Access Restriction Value",
        "values": {
            "ALL": "All",
            "DEM": "All demographic data",
            "DRG": "Drug",
            "HIV": "HIV status and results",
            "LOC": "Patient Location",
            "NO": "None",
            "OI": "Opt in all registries (HIPAA)",
            "OO": "Opt out all registries (HIPAA)",
            "PID-17": "Religion",
            "PID-7": "Date of Birth",
            "PSY": "Psychiatric Mental health",
            "SMD": "Sensitive medical data",
            "STD": "Sexually transmitted diseases"
        }
    },
    "719": {
        "desc": "Access Restriction Reason Code",
        "values": {
            "DIA": "Diagnosis-related",
            "EMP": "Employee of this organization",
            "ORG": "Organizational policy or requirement",
            "PAT": "Patient Request",
            "PHY": "Physician Request",
            "REG": "Regulatory requirement",
            "VIP": "Very important person or celebrity"
        }
    },
    "725": {
        "desc": "Mood Codes",
        "values": {
            "APT": "Appointment",
            "ARQ": "Appointment Request",
            "EVN": "Event",
            "EVN.CRT": "Event Criterion",
            "EXP": "Expectation",
            "INT": "Intent",
            "PRMS": "Promise",
            "PRP": "Proposal",
            "RQO": "Request-Order"
        }
    },
    "728": {
        "desc": "CCL Value",
        "values": {
            "0": "Nothing obvious",
            "1": "Low",
            "2": "Moderate",
            "3": "High",
            "4": "Very high"
        }
    },
    "731": {
        "desc": "DRG Diagnosis Determination Status",
        "values": {
            "0": "Valid code",
            "1": "Invalid code",
            "2": "Two primary diagnosis codes",
            "3": "Invalid for this gender",
            "4": "Invalid for this age"
        }
    },
    "734": {
        "desc": "Grouper Status",
        "values": {
            "0": "Normal grouping",
            "1": "Invalid or missing primary diagnosis",
            "2": "Diagnosis is not allowed to be primary",
            "3": "Data does not fulfill DRG criteria",
            "4": "Invalid age, admission date, date of birth or discharge date",
            "5": "Invalid gender",
            "6": "Invalid discharge status",
            "7": "Invalid weight ad admission",
            "8": "Invalid length of stay",
            "9": "Invalid field \"same day\""
        }
    },
    "739": {
        "desc": "Status Patient",
        "values": {
            "1": "Normal length of stay",
            "2": "Short length of stay",
            "3": "Long length of stay"
        }
    },
    "742": {
        "desc": "DRG Status Financial Calculation",
        "values": {
            "10": "No information/entry in cost data for this DRG",
            "11": "No relative weight found for department (type)",
            "00": "Effective weight calculated",
            "01": "Hospital specific contract",
            "03": "Eeffective weight for transfer/referral calculated",
            "04": "Referral from other hospital based on a cooperation (no DRG reimbursement)",
            "05": "Invalid length of stay"
        }
    },
    "749": {
        "desc": "DRG Grouping Status",
        "values": {
            "0": "Valid code; not used for grouping",
            "1": "Valid code; used for grouping",
            "2": "Invalid code; not used for grouping",
            "3": "Invalid code; code is relevant for grouping"
        }
    },
    "755": {
        "desc": "Status Weight At Birth",
        "values": {
            "0": "No weight reported at admission used for grouping",
            "1": "Weight reported at admission used for grouping",
            "2": "Default weight (>2499g) used for grouping"
        }
    },
    "757": {
        "desc": "Status Respiration Minutes",
        "values": {
            "0": "Respiration minutes not used for grouping",
            "1": "Listed respiration minutes used for grouping",
            "2": "OPS code value used for grouping"
        }
    },
    "759": {
        "desc": "Status Admission",
        "values": {
            "0": "Admission status is valid; used for grouping",
            "1": "Admission status is valid; not used for grouping",
            "2": "Admission status is invalid; not used for grouping",
            "3": "Admission status is invalid; default value used for grouping"
        }
    },
    "761": {
        "desc": "DRG Procedure Determination Status",
        "values": {
            "0": "Valid code",
            "1": "Invalid code",
            "2": "Not used",
            "3": "Invalid for this gender",
            "4": "Invalid for this age"
        }
    },
    "763": {
        "desc": "DRG Procedure Relevance",
        "values": {
            "0": "Neither operation relevant nor non-operation relevant procedure",
            "1": "Operation relevant procedure",
            "2": "Non-operation relevant procedure"
        }
    },
    "776": {
        "desc": "Item Status",
        "values": {
            "A": "Active",
            "I": "Inactive",
            "P": "Pending Inactive"
        }
    },
    "778": {
        "desc": "Item Type",
        "values": {
            "EQP": "Equipment",
            "IMP": "Implant",
            "MED": "Medication",
            "SUP": "Supply",
            "TDC": "Tubes, Drains, and Catheters"
        }
    },
    "790": {
        "desc": "Approving Regulatory Agency",
        "values": {
            "AMA": "American Medical Association",
            "FDA": "Food and Drug Administration"
        }
    },
    "793": {
        "desc": "Ruling Act",
        "values": {
            "SMDA": "Safe Medical Devices Act"
        }
    },
    "806": {
        "desc": "Sterilization Type",
        "values": {
            "EOG": "Ethylene Oxide Gas",
            "PCA": "Peracetic acid",
            "STM": "Steam"
        }
    },
    "818": {
        "desc": "Package",
        "values": {
            "BX": "Box",
            "CS": "Case",
            "EA": "Each",
            "SET": "Set"
        }
    },
    "834": {
        "desc": "MIME Types",
        "values": {
            "application": "Application data",
            "audio": "Audio data",
            "image": "Image data",
            "model": "Model data",
            "multipart": "MIME multipart package",
            "text": "Text data",
            "video": "Video data"
        }
    },
    "868": {
        "desc": "Telecommunication expiration reason",
        "values": {
            "C": "Corrected",
            "E": "Added in error",
            "M": "Moved",
            "N": "No longer in service",
            "R": "On request"
        }
    },
    "871": {
        "desc": "Supply Risk Codes",
        "values": {
            "COR": "Corrosive",
            "EXP": "Explosive",
            "FLA": "Flammable",
            "INJ": "Injury Hazard",
            "RAD": "Radioactive",
            "TOX": "Toxic",
            "UNK": "Unknown"
        }
    },
    "881": {
        "desc": "Role Executing Physician",
        "values": {
            "B": "Both",
            "P": "Professional Part",
            "T": "Technical Part"
        }
    },
    "882": {
        "desc": "Medical Role Executing Physician",
        "values": {
            "E": "Employed",
            "SE": "Self-employed"
        }
    },
    "894": {
        "desc": "Side of body",
        "values": {
            "L": "Left",
            "R": "Right"
        }
    },
    "895": {
        "desc": "Present On Admission (POA) Indicator",
        "values": {
            "E": "Exempt",
            "N": "No",
            "U": "Unknown",
            "W": "Not applicable",
            "Y": "Yes"
        }
    }
};

module.exports = tables;
