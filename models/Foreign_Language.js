const languageProficiencySchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    language: String,
    exam: { type: String, enum: ['TOEFL', 'IELTS', 'YDS'] },
    score: Number,
    year: Number,
    certificateUrl: String
});

module.exports = mongoose.model('LanguageProficiency', languageProficiencySchema);
