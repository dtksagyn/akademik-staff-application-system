const experienceSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    position: String,
    institution: String,
    startDate: Date,
    endDate: Date,
    responsibilities: String,
    proofOfEmployment: String // File URL
});

module.exports = mongoose.model('Experience', experienceSchema);
