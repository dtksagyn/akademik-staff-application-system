const awardSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    awardName: String,
    awardingInstitution: String,
    year: Number,
    certificateUrl: String // File URL
});

module.exports = mongoose.model('Award', awardSchema);
