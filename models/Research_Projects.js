const researchProjectSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    projectTitle: String,
    type: { type: String, enum: ['National', 'International'] },
    fundingSource: String,
    role: { type: String, enum: ['PI', 'Co-PI', 'Researcher'] },
    duration: Number
});

module.exports = mongoose.model('ResearchProject', researchProjectSchema);
