const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, ''))); // Serves the HTML

// THE VAULT COORDINATES (Akash must paste his exact MongoDB link here!)
const mongoURI = 'mongodb+srv://Akashns-Portfolio:akashns123@akash-cluster.uhg8llc.mongodb.net/?appName=Akash-cluster';

mongoose.connect(mongoURI)
    .then(() => console.log("System Alert: Akash's Vault is secure!"))
    .catch(err => console.error("Vault connection failed:", err));

// The Blueprint for the Data
const inquirySchema = new mongoose.Schema({
    message: String,
    date: { type: Date, default: Date.now }
});
const Inquiry = mongoose.model('Inquiry', inquirySchema);

// The Landing Pad for Incoming Transmissions
app.post('/api/message', async (req, res) => {
    try {
        const newTransmission = new Inquiry({ message: req.body.message });
        await newTransmission.save();
        res.json({ success: true, message: "Transmission locked in vault." });
    } catch (err) {
        res.status(500).json({ error: "Transmission failed." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Akash's Engine is live on port ${PORT}`));