const patentSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    patentTitle: String,
    patentNumber: String,
    country: String,
    year: Number,
    role: { type: String, enum: ['Inventor', 'Co-Inventor'] },
    certificateUrl: String // File URL
});

module.exports = mongoose.model('Patent', patentSchema);
