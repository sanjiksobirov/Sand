const express = require('express');
const router = express.Router();

const tutorResponses = {
  'tarix': 'Tarix - bu o\'tmishdagi hodisalarini o\'rganadigan fan. Tarix orqali biz insoniyat rivoji haqida bilamiz.',
  'geografiya': 'Geografiya - Yer va uning xususiyatlarini, mamlakatlari va aholisini o\'rganadigan fan.',
  'adabiyot': 'Adabiyot - bu san\'at asarlari, she\'riyat va nasrni o\'rganadigan fan.',
  'huquq': 'Huquq - jamiyat va shaxslarga tegishli qonunlarni o\'rganadigan fan.',
  'kimyo': 'Kimyo - moddalar va ularning o\'zaro ta\'sir qilishini o\'rganadigan fan.'
};

// Get AI Tutor response
router.post('/ask', async (req, res) => {
  try {
    const { question, subject } = req.body;
    const response = tutorResponses[subject.toLowerCase()] || 'Savol uchun tushuntirishni topa olmadim.';
    
    res.json({
      question,
      response,
      timestamp: new Date()
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
