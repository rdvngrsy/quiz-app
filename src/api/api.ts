import axios from "axios"

export const fetchQuizData = async (questions:number) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const filteredData = response.data.slice(0, questions);
  
  return filteredData.map((dt:any) => {
    // Metni kelimelere ayırma
    const words = dt.body.split(' ');
    // Doğru cevabı seçme
    const correctAnswer = words[Math.floor(Math.random() * words.length)];
    // Yanlış cevapları rastgele seçme ve doğru cevaptan farklı olmasını sağlama
    let incorrectAnswers:any[] = [];
    while (incorrectAnswers.length < 3) {
      let word = words[Math.floor(Math.random() * words.length)];
      if (!incorrectAnswers.includes(word) && word !== correctAnswer) {
        incorrectAnswers.push(word);
      }
    }
    // Tüm şıkları bir araya getirme
    let answers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);

    // Yeni anahtarları ekleyerek objeyi döndürme
    return {
      ...dt,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      answers: answers
    };
  });
};
