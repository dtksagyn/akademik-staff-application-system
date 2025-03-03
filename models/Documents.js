const documentSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    documentType: { type: String, enum: ['National ID', 'Passport', 'Proof of Employment', 'Academic Certificates'] },
    fileUrl: String,
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
