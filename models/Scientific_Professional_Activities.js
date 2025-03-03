const activitySchema = new mongoose.Schema({
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
    membership: String,
    editorialRole: String,
    conferences: String
});

module.exports = mongoose.model('Activity', activitySchema);
