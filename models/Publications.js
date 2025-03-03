const publicationSchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    title: String,
    journalName: String,
    index: { type: String, enum: ['SCI', 'SSCI', 'AHCI'] },
    year: Number,
    doi: String,
    fileUrl: String // If attached
});

module.exports = mongoose.model('Publication', publicationSchema);
