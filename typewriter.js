const sentence = `hello there from lighthouse labs\n`;

let delay = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; 
} 

