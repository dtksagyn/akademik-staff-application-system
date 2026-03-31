const referenceSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    refereeName: String,
    position: String,
    institution: String,
    contactInformation: String,
    recommendationLetter: String // File URL
});

module.exports = mongoose.model('Reference', referenceSchema);
