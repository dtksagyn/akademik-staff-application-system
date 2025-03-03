const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    nationality: String,
    dateOfBirth: Date,
    positionApplied: { type: String, enum: ['Dr. Öğretim Üyesi', 'Doçent', 'Profesör'], required: true },
    academicBackground: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AcademicBackground' }],
    experience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience' }],
    researchProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ResearchProject' }],
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Publication' }],
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
    teachingExperience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TeachingExperience' }],
    awards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Award' }],
    patents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patent' }],
    languageProficiency: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LanguageProficiency' }],
    references: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reference' }],
    documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
    submissionStatus: { type: mongoose.Schema.Types.ObjectId, ref: 'SubmissionStatus' }
}, { timestamps: true });

module.exports = mongoose.model('Applicant', applicantSchema);
