export const DEFAULT_OPTION = "Please select a service"

export const SERVICE_OPTION = [
    { value: 'visa', label: 'Visa'},
    { value: 'passport', label: 'Passport'},
    { value: 'certificate', label: 'Certificate'},
    { value: 'translation', label: 'Translation'}
]


export const PAGE = {
    SERVICE: 1,
    DATE: 2,
    PERSONAL: 3,
    SUMMARY: 4,
    CONFIRMATION: 5,
}

export const ID_TYPES = [
    {value: 'passport', label: "Passport"},
    {value: 'national', label: "National ID"},
    {value: 'driver', label: "Driver's Licence"},
    {value: 'student id', label: "Student ID"},
]

export const FormModel = {
    service: DEFAULT_OPTION,
    date_time: {
        date: new Date(),
        time: "",
    },
    personal_details: {
        first_name: "",
        last_name: "",
        dob: "",
        id_type: "",
        id_number: "",
        nationality: "",
        email: "",
        country_code: "",
        phone: "",
    },
}