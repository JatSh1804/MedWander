const Form = require('../config/form');
const axios = require('axios');

const getForms = async (req, res) => {
    try {
        const forms = await Form.findAll();
        res.json(forms);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching forms' });
    }
};

const createForm = async (req, res) => {
    try {
        const { formType, name, countryCode, phoneNumber } = req.body;
        const form = await Form.create({ formType, name, countryCode, phoneNumber });
        res.status(201).json(form);
    } catch (error) {
        res.status(500).json({ message: 'Error creating form' });
    }
};

const syncDataWithExcel = async (req, res) => {
    try {
        const forms = await Form.findAll();
        const data = forms.map(form => ({
            FormType: form.formType,
            Name: form.name,
            CountryCode: form.countryCode,
            PhoneNumber: form.phoneNumber,
        }));

        // Assuming you have an endpoint to update the Excel sheet
        await axios.post('https://your-excel-sync-endpoint', data);

        res.json({ message: 'Data synchronized with Excel' });
    } catch (error) {
        res.status(500).json({ message: 'Error syncing data with Excel' });
    }
};
module.exports = { syncDataWithExcel, createForm, getForms }