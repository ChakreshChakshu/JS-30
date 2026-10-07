const textInput = document.getElementById("textInput");
const wordCountEl = document.getElementById("wordCount");
const charCountEl = document.getElementById("charCount");
const charNoSpaceCountEl = document.getElementById("charNoSpaceCount");
const paragraphCountEl = document.getElementById("paragraphCount");
const readingTimeEl = document.getElementById("readingTime");

function analyzeText() {
  const text = textInput.value;

  // Characters
  const totalChars = text.length;
  const noSpaceChars = text.replace(/\s/g, "").length;

  // Words
  const words = text.trim() === "" ? [] : text.trim().split(/\s+/);
  const totalWords = words.length;

  // Paragraphs
  const paragraphs = text
    .split(/\n+/)
    .filter((para) => para.trim().length > 0);
  const totalParagraphs = paragraphs.length;

  // Reading time (200 wpm)
  const totalSeconds = Math.ceil((totalWords / 200) * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  wordCountEl.textContent = totalWords;
  charCountEl.textContent = totalChars;
  charNoSpaceCountEl.textContent = noSpaceChars;
  paragraphCountEl.textContent = totalParagraphs;
  readingTimeEl.textContent = `${minutes} min ${seconds} sec`;
}

textInput.addEventListener("input", analyzeText);
