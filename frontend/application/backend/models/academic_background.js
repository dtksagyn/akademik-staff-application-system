const academicBackgroundSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    degree: String,
    institution: String,
    graduationYear: Number,
    gpa: Number
});

module.exports = mongoose.model('AcademicBackground', academicBackgroundSchema);
