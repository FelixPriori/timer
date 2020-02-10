const args = process.argv;
const times = args.slice(2);

const timer = (times) => {
  times.sort((a,b) => a - b); 
  for(let i = 0; i < times.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(times[i]) * 1000);
  }
}

timer(times);


// system sound: process.stdout.write('\x07');